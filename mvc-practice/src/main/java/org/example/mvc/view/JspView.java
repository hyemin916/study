package org.example.mvc.view;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class JspView implements View {
    private final String name;

    public JspView(String name) {
        this.name = name;
    }

    @Override
    public void render(final Map<String, ?> model, final HttpServletRequest req, final HttpServletResponse resp) throws Exception {
        model.forEach(req::setAttribute);
        req.getRequestDispatcher(name).forward(req, resp);
    }
}
