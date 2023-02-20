package org.example.mvc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.example.mvc.repository.UserRepository;
import java.util.List;

public class UserListController implements Controller{

    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        req.setAttribute("users", UserRepository.findAll());
        return "/user/list";
    }

}
