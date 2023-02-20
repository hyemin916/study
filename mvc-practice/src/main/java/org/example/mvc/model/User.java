package org.example.mvc.model;

import java.util.Objects;

public class User {
    private String id;
    private String name;

    public User(final String id, final String name) {
        this.id = id;
        this.name = name;
    }

    public boolean equalsUser(User user) {
        return this.equals(user);
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (!(o instanceof final User user)) return false;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    public String getId() {
        return this.id;
    }
}
