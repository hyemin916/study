package org.example.mvc;

import org.example.mvc.controller.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SimpleControllerHandlerAdapter implements HandlerAdapter {
    @Override
    public boolean supports(final Object handler) {
        return (handler instanceof Controller);
    }

    @Override
    public ModelAndView handler(final HttpServletRequest request, final HttpServletResponse response, Object handler) throws Exception {
        final String viewName = ((Controller) handler).handleRequest(request, response);
        return new ModelAndView(viewName);
    }
}
