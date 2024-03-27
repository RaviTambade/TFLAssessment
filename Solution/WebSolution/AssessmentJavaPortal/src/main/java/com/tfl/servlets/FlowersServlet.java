package com.tfl.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

import com.tfl.models.Product;
import com.tfl.dao.ProductDAO;
import com.tfl.dao.ProductDAOImpl;

@WebServlet("/flowers/*")
public class FlowersServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public FlowersServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
    
            // Sample data
            String[] flowers = {"Gerbera", "Jasmine", "Lotus", "Rose"};

            // Convert data to JSON
            Gson gson = new Gson();
            String json = gson.toJson(flowers);

            // Set response content type to JSON
            response.setContentType("application/json");

            // Write JSON data to response
            response.getWriter().write(json);

    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
  
    }

    // Method to handle PUT requests (Update operation)
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

        // Method to handle DELETE requests (Delete operation)
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

            String pathInfo = request.getPathInfo();
            if (pathInfo == null || pathInfo.equals("/")) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                response.getWriter().write("Product ID is required for delete operation");
            } else {
                // Extract product ID from URL
                String productId = pathInfo.substring(1); // remove leading '/'
                // Remove product from list (replace with database deletion)
               /*  for (Iterator<Product> iterator = products.iterator(); iterator.hasNext();) {
                    Product product = iterator.next();
                    if (product.getId().equals(productId)) {
                        iterator.remove();
                        response.setStatus(HttpServletResponse.SC_OK);
                        response.getWriter().write("Product deleted successfully");
                        return;
                    }
               
                */
              }
                // If product with given ID not found
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                response.getWriter().write("Product not found");
    
    }







}
