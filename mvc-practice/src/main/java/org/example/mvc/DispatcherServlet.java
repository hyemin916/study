package org.example.mvc;

import org.example.mvc.annotation.RequestMethod;
import org.example.mvc.controller.Controller;
import org.example.mvc.view.JspViewResolver;
import org.example.mvc.view.View;
import org.example.mvc.view.ViewResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@WebServlet("/")
public class DispatcherServlet extends HttpServlet {
    private static final Logger log = LoggerFactory.getLogger(DispatcherServlet.class);
    private RequestMappingHandlerMapping rmhm = new RequestMappingHandlerMapping();
    private List<ViewResolver> viewResolvers;
    private List<HandlerAdapter> handlerAdapters;

    @Override
    public void init() throws ServletException {
        rmhm.init();

        viewResolvers = Collections.singletonList(new JspViewResolver());
        handlerAdapters = List.of(new SimpleControllerHandlerAdapter());
    }

    @Override
    protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
        log.info("[DispatcherServlet] service started");
        try {
            final Controller handler = rmhm.findHandler(new HandlerKey(RequestMethod.valueOf(req.getMethod()), req.getRequestURI()));
            // redirect & forward
            final String viewName = handler.handleRequest(req, resp);

            for (ViewResolver viewResolver : viewResolvers) {
                final View view = viewResolver.resolveViews(viewName);
                view.render(new HashMap<>(), req, resp);
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
