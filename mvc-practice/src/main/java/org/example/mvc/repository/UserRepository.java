package org.example.mvc.repository;

import org.example.mvc.model.User;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class UserRepository {
    private static Map<String, User> users = new HashMap<>();

    public UserRepository() {
    }

    public static void save(User user) {
        users.put(user.getId(), user);
    }

    public static Collection<User> findAll() {
        return users.values();
    }
}
