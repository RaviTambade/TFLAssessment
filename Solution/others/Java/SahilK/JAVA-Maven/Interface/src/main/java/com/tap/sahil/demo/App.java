package com.tap.sahil.demo;

public class App 
{
    public static void main( String[] args )
    {
        Vehicle v =new Car();
        v.start();
        v.stop();

        v=new bike();
        v.start();
        v.stop();

    }
}
