package org.example.mvc;

import org.example.model.User;
import org.example.mvc.controller.Controller;
import org.example.repository.UserRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserCreateController implements Controller {
    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        UserRepository.save(new User(req.getParameter("id"), req.getParameter("name")));
        return "redirect:/users";
    }
}
