package org.example.mvc;

import org.example.controller.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserCreateController implements Controller {
    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        throw new IllegalStateException("UserCreateController::handleRequest not implemented yet");
    }
}
