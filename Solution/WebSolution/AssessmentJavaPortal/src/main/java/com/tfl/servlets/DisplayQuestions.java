package com.tfl.servlets;

import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/questions")
public class DisplayQuestions extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public DisplayQuestions() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		try {
 
			// HTML Response
			out.println("<html><head><title>Question Bank</title></head><body>");
			out.println("<h1> Transflower Question Bank </h1>");
			out.println("<table border='1'>");
			out.println(
				"<thead><tr><th> Question ID </th><th>Question</th><th>Option A</th><th>Option B</th><th>Option C</th><th> Option D </th></tr></thead>");
				out.println("<tr>");
				out.println("<td>  23 </td>");
				out.println("<td> What is the full form of JVM</td>");
				out.println("<td>Java Virtual Machine</td>");
				out.println("<td>Just Video Morfing</td>");
				out.println("<td>Jet Viral Mode</td>");
				out.println("<td>Common Language Runtime</td>");
				out.println("</tr>");

				out.println("<tr>");
				out.println("<td>  23 </td>");
				out.println("<td> What is the full form of JVM</td>");
				out.println("<td>Java Virtual Machine</td>");
				out.println("<td>Just Video Morfing</td>");
				out.println("<td>Jet Viral Mode</td>");
				out.println("<td>Common Language Runtime</td>");
				out.println("</tr>");


				out.println("<tr>");
				out.println("<td>  23 </td>");
				out.println("<td> What is the full form of JVM</td>");
				out.println("<td>Java Virtual Machine</td>");
				out.println("<td>Just Video Morfing</td>");
				out.println("<td>Jet Viral Mode</td>");
				out.println("<td>Common Language Runtime</td>");
				out.println("</tr>");


				out.println("<tr>");
				out.println("<td>  23 </td>");
				out.println("<td> What is the full form of JVM</td>");
				out.println("<td>Java Virtual Machine</td>");
				out.println("<td>Just Video Morfing</td>");
				out.println("<td>Jet Viral Mode</td>");
				out.println("<td>Common Language Runtime</td>");
				out.println("</tr>");

				
				out.println("</table>");
				out.println("<br><br>");
				out.println("<a href='index.html'> Back to Home </a> ");
				out.println("</body></html>");

			}
			catch (Exception e) {
			// error
			out.println("<html><head><title>Display Coin</title></head><body>");
			out.println("<h1 style='color:red'> Error while Retrieving the Coins List </h1>");
			out.println("<a href='index.html'>Back to Home </a> ");
			out.println("<a href='/ManagingCoinCollection/DisplayAllCoins'> See Coin Collection</a> ");
			out.println("<p> ERROR : " + e.getMessage() + "</p>");
			out.println("</body></html>");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
}
