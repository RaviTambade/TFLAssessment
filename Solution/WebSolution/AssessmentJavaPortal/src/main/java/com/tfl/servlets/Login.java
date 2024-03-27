package com.tfl.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Login() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		 
		 
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

        response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String email=request.getParameter("email");
		String passwd=request.getParameter("password");
		//LoginService ls=new LoginServiceImpl();
		//MyUser u=ls.validateUser(uname,passwd);
        boolean status=false;
		if(status) {
			out.println("<h3>invalid credentials</h3>");
			RequestDispatcher rd=request.getRequestDispatcher("Login.html");
			rd.include(request, response);
		}else {
			//out.println("<h3>Successful login</h3>");
			//to get new session or to get existing session
			System.out.println("in else part");
			
			RequestDispatcher rd1=request.getRequestDispatcher("welcome.html");
			rd1.forward(request,response);
		}
		


	}
}
