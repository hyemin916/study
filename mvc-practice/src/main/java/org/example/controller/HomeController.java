package org.example.controller;

import org.example.annotation.RequestMapping;
import org.example.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HomeController  implements Controller {

    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        return "home.jsp";
    }
}
