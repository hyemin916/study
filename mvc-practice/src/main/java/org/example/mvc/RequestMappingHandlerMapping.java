package org.example.mvc;

import org.example.controller.Controller;
import org.example.controller.HomeController;
import org.example.controller.UserListController;

import java.util.HashMap;
import java.util.Map;

public class RequestMappingHandlerMapping {
    // key:/users, value:UserController
    private Map<String, Controller> mappings = new HashMap<>();

    void init() {
        mappings.put("/", new HomeController());
        mappings.put("/users", new UserListController());
        mappings.put("/users", new UserCreateController());
    }

    public Controller findHandler(String uriPath) {
        return mappings.get(uriPath);
    }
}
