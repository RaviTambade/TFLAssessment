package com.transflower.tflassessment.entities;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.time.LocalTime;

public class SqlTimeOnlyTypeHandler {

    // Equivalent of SetValue() in C#
    public static void setValue(PreparedStatement parameter, int index, LocalTime time)
            throws SQLException {

        parameter.setTime(index, Time.valueOf(time));
    }

    // Equivalent of Parse() in C#
    public static LocalTime parse(ResultSet resultSet, String columnName)
            throws SQLException {

        Time sqlTime = resultSet.getTime(columnName);
        return sqlTime.toLocalTime();
    }
}
