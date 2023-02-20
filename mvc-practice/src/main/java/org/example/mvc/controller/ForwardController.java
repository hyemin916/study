package org.example.mvc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ForwardController implements Controller {

    final private String forwardUriPath;

    public ForwardController(final String forwardUriPath) {
        this.forwardUriPath = forwardUriPath;
    }

    @Override
    public String handleRequest(final HttpServletRequest req, final HttpServletResponse res) throws Exception {
        return forwardUriPath;
    }
}
