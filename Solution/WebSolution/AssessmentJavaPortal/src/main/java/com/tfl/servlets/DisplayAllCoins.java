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
 * Servlet implementation class DisplayAllCoins
 */
@WebServlet("/DisplayAllCoins")
public class DisplayAllCoins extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DisplayAllCoins() {
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

			// Retrieve all coins from the database
		//	CoinDAO coinDAO = new CoinDAO();
		//	List<Coin> allCoins = coinDAO.getAllCoins();

			// HTML Response

			out.println("<html><head><title>Display Coins</title></head><body>");
			out.println("<h1> All Coins Collections Data </h1>");
			out.println("<table border='1'>");
			out.println(
					"<thead><tr><th> COIN ID </th><th>COUNTRY</th><th>DENOMINATION</th><th>YEAR OF MINITNG</th><th>CURRENT VALUE</th><th> ACQUIRED DATE </th><th>UPDATE</th><th>REMOVE</th></tr></thead>");

			//for (Coin coin : allCoins) {
				out.println("<tr>");
				/*out.println("<td> " + coin.getId() + " </td>");
				out.println("<td>" + coin.getCountry() + "</td>");
				out.println("<td>" + coin.getDenomination() + "</td>");
				out.println("<td>" + coin.getYearOfMinting() + "</td>");
				out.println("<td> " + coin.getCurrentValue() + "</td>");
				out.println("<td> " + coin.getAcquiredDate() + " </td>");
				out.println("<td> <a href='FetchToUpdate?coinId=" + coin.getId() + "'>EDIT</a> </td>");
				out.println("<td>  <a href='DeleteCoinServlet?coinId=" + coin.getId() + "'>DELETE</a> </td>");
				*/
				
				out.println("<td>  23 </td>");
				out.println("<td> India</td>");
				out.println("<td>564</td>");
				out.println("<td>75</td>");
				out.println("<td> 80</td>");
				out.println("<td>23/4/2024 </td>");
				
				
				out.println("</tr>");
			//}
			out.println("</table>");
			out.println("<br><br>");
			out.println("<a href='index.html'> Back to Home </a> ");
			out.println("</body></html>");

		} catch (Exception e) {

			// error
			out.println("<html><head><title>Display Coin</title></head><body>");
			out.println("<h1 style='color:red'> Error while Retrieving the Coins List </h1>");
			out.println("<a href='index.html'>Back to Home </a> ");
			out.println("<a href='/ManagingCoinCollection/DisplayAllCoins'> See Coin Collection</a> ");
			out.println("<p> ERROR : " + e.getMessage() + "</p>");
			out.println("</body></html>");
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
