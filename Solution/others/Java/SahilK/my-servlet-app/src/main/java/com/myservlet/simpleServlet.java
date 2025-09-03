package com.myservlet;
import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/simple")
public class simpleServlet  extends HttpServlet{
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException
    {
            response.setContentType("text/html");
            String Method=request.getMethod();

            if("GET".equals(Method))
            {
                response.getWriter().println("<h1>Hello,Sahil this is a GET method</h1>");
            }
            else if("POST".equals(Method))
            {
                response.getWriter().println("<h1>Hello Sahil this is a POST method</h1>");  
            }
            else
            {
                response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
                response.getWriter().println("<h1>Sahil, your"+Method+"not allowed");
            }
    }
        
}
