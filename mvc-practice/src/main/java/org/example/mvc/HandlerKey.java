package org.example.mvc;

import org.example.annotation.RequestMethod;

import java.util.Objects;

public class HandlerKey {

    private final RequestMethod requestMethod;
    private final String uriPath;

    public HandlerKey(final RequestMethod requestMethod, final String uriPath) {
        this.requestMethod = requestMethod;
        this.uriPath = uriPath;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (!(o instanceof final HandlerKey that)) return false;
        return requestMethod == that.requestMethod && Objects.equals(uriPath, that.uriPath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(requestMethod, uriPath);
    }
}
