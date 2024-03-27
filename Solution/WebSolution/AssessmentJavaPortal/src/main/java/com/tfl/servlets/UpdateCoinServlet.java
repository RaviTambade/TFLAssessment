package com.tfl.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tfl.constants.GenericConstants;
import com.tfl.dao.CoinDAO;
import com.tfl.models.Coin;

/**
 * Servlet implementation class UpdateCoinServlet
 */
@WebServlet("/UpdateCoinServlet")
public class UpdateCoinServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UpdateCoinServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		try {

			// response html type
			response.setContentType("text/html");
			// IO stream create
			int id = Integer.parseInt(request.getParameter("id"));
			String country = request.getParameter("country");
			String denomination = request.getParameter("denomination");
			int yearOfMinting = Integer.parseInt(request.getParameter("yearOfMinting"));
			BigDecimal currentValue = new BigDecimal(request.getParameter("currentValue"));
			Date acquiredDate = new Date();

			acquiredDate = new SimpleDateFormat(GenericConstants.requiredDateFormat)
					.parse(request.getParameter("acquiredDate"));

			Coin coin = new Coin(id, country, denomination, yearOfMinting, currentValue, acquiredDate);

			CoinDAO coinDAO = new CoinDAO();

			if (coinDAO.updateCoin(coin) > 0) {

				// success
				out.println("<html><head><title>Updating Coin</title></head><body>");
				out.println("<h1 style='color:green'> Coin Updated Successfully </h1>");
				// out.println("<p> COIN ID : " + coin.getId() + "</p>");
				out.println("<p> COIN COUNTRY : " + coin.getCountry() + "</p>");
				out.println("<p> COIN DENOMINATION : " + coin.getDenomination() + "</p>");
				out.println("<p> YEAR OF MINTING : " + coin.getYearOfMinting() + "</p>");
				out.println("<p> COIN CURRENT VALUE  : " + coin.getCurrentValue() + "</p>");
				out.println("<p> COIN ACQUIRED DATE : " + coin.getAcquiredDate() + "</p>");
				out.println("<a href='index.html'>Back to Home</a> ");
				out.println("<a href='/ManagingCoinCollection/DisplayAllCoins'> See Coin Collection</a> ");
				out.println("</body></html>");

			} else {

				//
				out.println("<html><head><title>Updating Coin</title></head><body>");
				out.println("<h1 style='color:red'> Coin NOT Updated Successfully </h1>");
				out.println("<a href='index.html'> Back to Home </a> ");
				out.println("</body></html>");

			}

		} catch (ParseException | NumberFormatException exceptionObj) {
			exceptionObj.printStackTrace();
			// error
			out.println("<html><head><title>Updating Coin</title></head><body>");
			out.println("<h1 style='color:red'> Error while Updating Coin </h1>");
			out.println("<a href='index.html'> Back to Home </a> ");
			out.println("<p> ERROR : " + exceptionObj.getMessage() + "</p>");
			out.println("</body></html>");

		}
	}

}
