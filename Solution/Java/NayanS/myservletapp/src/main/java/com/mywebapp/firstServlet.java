package com.mywebapp;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.rmi.ServerException;

@WebServlet("/simple")
public class firstServlet extends HttpServlet {
    @Override

    protected void service(HttpServletRequest request, HttpServletResponse responce)
            throws IOException, ServerException {

        responce.setContentType("text/html");

        String method = request.getMethod();

        if ("GET".equals(method)) {
            responce.getWriter().println("<h1> Heloo Naina from get</h1>");
        }

        else if ("POST".equals(method)) {
            responce.getWriter().println("<h1> Heloo Naina from post</h1>");
        }
        else{
              responce.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
              responce.getWriter().println("<h1>Invalid</h1>");
        }

        
        

    }

}
