package org.example.mvc;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

public interface HandlerAdapter {
    boolean supports(Object handler);
    ModelAndView handler(HttpServletRequest request, HttpServletResponse response, Object handler ) throws Exception;
}
