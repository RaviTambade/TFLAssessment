package com.tfl.dao;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.tfl.models.Coin;
import com.tfl.utils.ConnectionUtils;

public class CoinDAO {
//	public static void main(String[] args) {
//		System.out.println(new CoinDAO()
//				.addCoin(new Coin("India", "INR \u20B9", 1867, new BigDecimal(10000), new java.util.Date())));
//		System.out.println(new CoinDAO().getAllCoins());
//	}

	// get ALL coins
	public List<Coin> getAllCoins() {

		// java 8 -- Type Inference
		List<Coin> coins = new ArrayList<>();

		try (Connection connection = ConnectionUtils.getConnection()) {

			String selectQuery = "SELECT * FROM coin_collection";
			PreparedStatement statement = connection.prepareStatement(selectQuery);
			ResultSet resultSet = statement.executeQuery(selectQuery);

			// 5
			while (resultSet.next()) {
				// Coin coin = new Coin();
				// coin.setId(resresultSet.getInt("id"));
				// -----------------------------------------------------------
				Coin coin = new Coin(resultSet.getInt("id"), // id resultSet.getInt(int index)
						resultSet.getString("country"), // country
						resultSet.getString("denomination"), // denomination
						resultSet.getInt("year_of_minting"), // begdecimal
						resultSet.getBigDecimal("current_value"), // currentValue
						resultSet.getDate("acquired_date"));// date
				// new coin -- add list of coins
				coins.add(coin);
			}

		} catch (SQLException e) {
			e.printStackTrace(); // Handle properly in real time app
		}
		return coins;
	}

	// get by id
	public Coin getById(int coinId) {
		Coin coin = new Coin();
		String selectQuery = "SELECT * FROM coin_collection WHERE id = ?";
		try (Connection connection = ConnectionUtils.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(selectQuery)) {
			preparedStatement.setInt(1, coinId);
			ResultSet resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				coin.setId(resultSet.getInt("id"));
				coin.setCountry(resultSet.getString("country"));
				coin.setDenomination(resultSet.getString("denomination"));
				coin.setYearOfMinting(resultSet.getInt("year_of_minting"));
				coin.setCurrentValue(resultSet.getBigDecimal("current_value"));
				coin.setAcquiredDate(resultSet.getDate("acquired_date"));
			}
		} catch (SQLException e) {
			e.printStackTrace(); // Handle properly in real time app
			coin = null;
		}
		return coin;
	}

	// add Coin in the database
	public int addCoin(Coin coin) {

		//coin=new Coin("India", "INR \u20B9", 1867, new BigDecimal(10000), new java.util.Date())
		try (Connection connection = ConnectionUtils.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(
						"INSERT INTO coin_collection (country,denomination,year_of_minting,current_value,acquired_date) VALUES "
								+ "(?,?,?,?,?)")) {
			// java object to relational
			preparedStatement.setString(1, coin.getCountry());
			preparedStatement.setString(2, coin.getDenomination());
			preparedStatement.setInt(3, coin.getYearOfMinting());
			preparedStatement.setBigDecimal(4, coin.getCurrentValue());
			preparedStatement.setDate(5, new Date(coin.getAcquiredDate().getTime()));
			// on successful completion of query execution
			return preparedStatement.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace(); // Handle properly in real time app
			return 0;
		}

	}

	// update
	public int updateCoin(Coin coin) {
		int updatedRow = 0;
		String updateQuery = "UPDATE coin_collection SET country=?,denomination=?,year_of_minting=?,current_value=?,acquired_date=? WHERE id=?";
		try (Connection connection = ConnectionUtils.getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(updateQuery)) {
			// java object to relational
			System.out.println("coin Id : Update DAO Method ==> " + coin.getId());
			preparedStatement.setString(1, coin.getCountry());
			preparedStatement.setString(2, coin.getDenomination());
			preparedStatement.setInt(3, coin.getYearOfMinting());
			preparedStatement.setBigDecimal(4, coin.getCurrentValue());
			preparedStatement.setDate(5, new Date(coin.getAcquiredDate().getTime()));
			preparedStatement.setInt(6, coin.getId());
			// on successful completion of query execution
			updatedRow = preparedStatement.executeUpdate();
			System.out.println("-------------  updated Row : " + updatedRow);

		} catch (Exception e) {
			e.printStackTrace(); // Handle properly in real time app
			return 0;
		}
		return updatedRow;
	}

	// delete
	public int deleteCoin(int coinId) {
		int updatedRow = 0;
		try (Connection connection = ConnectionUtils.getConnection();
				PreparedStatement preparedStatement = connection
						.prepareStatement("DELETE FROM coin_collection WHERE id=?")) {
			preparedStatement.setInt(1, coinId);
			// on successful completion of query execution
			updatedRow = preparedStatement.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace(); // Handle properly in real time app
			return 0;
		}
		return updatedRow;
	}

}
