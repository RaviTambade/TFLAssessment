package com.tap.servlet.main;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/simple")
public class SimpleServlet  extends HttpServlet {
    
 //Override the service method to handle both GET and POST requests
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Set the response content type
        response.setContentType("text/html");
        
        // Get the HTTP method (GET, POST, etc.)
        String method = request.getMethod();
        
        // Write HTML response based on the HTTP method
        if ("GET".equals(method)) {
            response.getWriter().println("<h1>Hello from GET request!</h1>");
        } else if ("POST".equals(method)) {
            response.getWriter().println("<h1>Hello from POST request!</h1>");
        } else {
            response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
            response.getWriter().println("<h1>Unsupported HTTP method: " + method + "</h1>");
        }
    }
}
