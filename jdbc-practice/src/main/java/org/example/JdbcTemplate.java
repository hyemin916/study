package org.example;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcTemplate {

    public void executeUpdate(final String sql, final PreparedStatementSetter ps) throws SQLException {
        Connection connection = null;
        PreparedStatement pstmt = null;

        try {
            connection = ConnectionManager.getConnection();
            pstmt = connection.prepareStatement(sql);
            ps.setter(pstmt);

            pstmt.executeUpdate();
        } finally {
            if (null != ps) {
                pstmt.close();
            }
            if (null != connection) {
                connection.close();
            }
        }
    }


    public Object executeQuery(final String sql, final PreparedStatementSetter ps, final RowMapper rowMapper) throws SQLException {
        Connection connection = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            connection = ConnectionManager.getConnection();
            pstmt = connection.prepareStatement(sql);
            ps.setter(pstmt);

            rs = pstmt.executeQuery();

            if (rs.next()) {
                return rowMapper.map(rs);
            }
            return null;
        } finally {
            if (null != rs) {
                rs.close();
            }
            if (null != ps) {
                pstmt.close();
            }
            if (null != connection) {
                connection.close();
            }
        }
    }
}
