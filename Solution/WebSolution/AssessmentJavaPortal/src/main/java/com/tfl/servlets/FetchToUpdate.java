package com.tfl.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tfl.dao.CoinDAO;
import com.tfl.models.Coin;

/**
 * Servlet implementation class FetchToUpdate
 */
@WebServlet("/FetchToUpdate")
public class FetchToUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FetchToUpdate() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		try {
			int coinId = Integer.parseInt(request.getParameter("coinId"));
			CoinDAO coinDAO = new CoinDAO();
			Coin coinToUpdate = coinDAO.getById(coinId);
			System.out.println("=========================" + coinToUpdate.getId());
			out.println("<html><head><title>FetchToUpdate Coin</title></head><body>");
			out.println("<h2 style='color:blue'> Update Coin Details </h2>");
			if (coinToUpdate != null) {
				// success

				out.println("<form action='UpdateCoinServlet' method='post'>");
				out.println("<table>");
				out.println("<tr>");
				out.println("<td><label>Coin ID : </label></td>");
				out.println("<td><input type='hidden' name='id' value=" + coinToUpdate.getId() + "></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><label>Country : </label></td>");
				out.println(
						"<td><input type='text' name='country' value=" + coinToUpdate.getCountry() + " required></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><label>Denomination : </label></td>");
				out.println("<td><input type='text' name='denomination' value=" + coinToUpdate.getDenomination()
						+ " required></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><label>Year Of Minting : </label></td>");
				out.println("<td><input type='number' name='yearOfMinting' value=" + coinToUpdate.getYearOfMinting()
						+ " required></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><label>Current Value : </label></td>");
				out.println("<td><input type='text' name='currentValue' value=" + coinToUpdate.getCurrentValue()
						+ " required></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><label>Acquired Date : </label></td>");
				out.println("<td><input type='date' name='acquiredDate' value=" + coinToUpdate.getAcquiredDate()
						+ " required></td>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<td><input type='submit' value='Update Coin'></td>");
				out.println("<td><a href='index.html'>Back to Home</a></td>");
				out.println("</tr>");
			} else {
				out.println("<h1 style='color:red'> Error while Fetching to Update a Coin</h1>");
			}
		} catch (NumberFormatException e) {

			// error
			out.println("<h1 style='color:red'>Error while Fetching to Update a Coin</h1>");
			out.println("<p> ERROR : " + e.getMessage() + "</p>");

		}
		out.println("<a href='index.html'>Back to Home </a> ");
		out.println("<a href='/ManagingCoinCollection/DisplayAllCoins'> See Coin Collection</a> ");
		out.println("</body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
