package org.example.mvc;

import org.example.annotation.RequestMethod;
import org.example.mvc.controller.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/")
public class DispatcherServlet extends HttpServlet {
    private static final Logger log = LoggerFactory.getLogger(DispatcherServlet.class);
    private RequestMappingHandlerMapping rmhm = new RequestMappingHandlerMapping();

    @Override
    public void init() throws ServletException {
        rmhm.init();
    }

    @Override
    protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
        log.info("[DispatcherServlet] service started");
        try {
            final Controller handler = rmhm.findHandler(new HandlerKey(RequestMethod.valueOf(req.getMethod()), req.getRequestURI()));
            final String viewName = handler.handleRequest(req, resp);

            req.getRequestDispatcher(viewName).forward(req, resp);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
