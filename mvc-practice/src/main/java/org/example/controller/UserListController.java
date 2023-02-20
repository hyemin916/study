package org.example.controller;

import org.example.mvc.controller.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserListController implements Controller {

    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        return "/user/list.jsp";
    }
}
