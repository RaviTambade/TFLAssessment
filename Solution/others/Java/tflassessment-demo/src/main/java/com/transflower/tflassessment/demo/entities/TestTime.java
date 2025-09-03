package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class TestTime implements Cloneable {

    private int hour;
    private int day;
    private int minutes;
    private int month;
    private int seconds;
    private int year;


    public TestTime() {
        this.hour = 0;
        this.day = 0;
        this.minutes=0;
        this.month = 0;
        this.seconds = 0;
        this.year = 0;
    }



    public TestTime(int hour, int day, int minutes, int month, int seconds, int year) {
        this.day = day;
        this.hour = hour;
        this.minutes = minutes;
        this.month = month;
        this.seconds = seconds;
        this.year = year;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getSeconds() {
        return seconds;

    }

    public void setSeconds(int seconds) {
        this.seconds = seconds;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "TestTime{" +
                "hour=" + hour +
                ", day=" + day +
                ", minutes=" + minutes +
                ", month=" + month +
                ", seconds=" + seconds +
                ", year=" + year +
                '}';

    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;

        TestTime other = (TestTime) obj;
        return hour == other.hour &&
                day == other.day &&
                minutes == other.minutes &&
                month == other.month &&
                seconds == other.seconds &&
                year == other.year;
    }

    @Override
    public int hashCode() {
        return Objects.hash(hour, day, minutes, month, seconds, year);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            super.finalize();
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
