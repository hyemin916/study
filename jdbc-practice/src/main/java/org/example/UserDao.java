package org.example;

import java.sql.SQLException;

public class UserDao {

    public void create(final User user) throws SQLException {
        final JdbcTemplate jdbcTemplate = new JdbcTemplate();
        final String sql = "INSERT INTO USERS VALUES (?, ?, ?, ?)";
        jdbcTemplate.executeUpdate(sql, ps -> {
            ps.setString(1, user.getId());
            ps.setString(2, user.getPassword());
            ps.setString(3, user.getName());
            ps.setString(4, user.getEmail());
        });
    }

    public User findByUserId(final String id) throws SQLException {
        final JdbcTemplate jdbcTemplate = new JdbcTemplate();
        final String sql = "SELECT id, password, name, email FROM USERS WHERE id = ?";

        return (User) jdbcTemplate.executeQuery(
                sql,
                ps -> ps.setString(1, id),
                rs -> new User(
                        rs.getString("id"),
                        rs.getString("password"),
                        rs.getString("name"),
                        rs.getString("email")
                ));
    }
}