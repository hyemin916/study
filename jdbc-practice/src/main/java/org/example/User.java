package org.example;

import java.util.Objects;

public class User {
    private final String id;
    private final String password;
    private final String name;
    private final String email;

    public User(final String id, final String password, final String name, final String email) {
        this.id = id;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (!(o instanceof final User user)) return false;
        return Objects.equals(id, user.id) && Objects.equals(password, user.password) && Objects.equals(name, user.name) && Objects.equals(email, user.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, name, email);
    }
}
