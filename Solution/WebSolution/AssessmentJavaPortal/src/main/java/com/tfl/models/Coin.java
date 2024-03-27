package com.tfl.models;

import java.math.BigDecimal;
import java.util.Date;

public class Coin {

	private int id;
	private String country;
	private String denomination;
	private int year_Of_Minting;
	private BigDecimal currentValue;
	// private Double currentValue;
	private Date acquiredDate;

	// No Args Constructor --> Spacebar + Enter
	public Coin() {
	}

	// ParamterisedConstructor
	public Coin(int id, String country, String denomination, int yearOfMinting, BigDecimal currentValue,
			Date acquiredDate) {
		super();
		this.id = id;
		this.country = country;
		this.denomination = denomination;
		this.year_Of_Minting = yearOfMinting;
		this.currentValue = currentValue;
		this.acquiredDate = acquiredDate;
	}

	public Coin(String country, String denomination, int yearOfMinting, BigDecimal currentValue, Date acquiredDate) {
		super();
		this.country = country;
		this.denomination = denomination;
		this.year_Of_Minting = yearOfMinting;
		this.currentValue = currentValue;
		this.acquiredDate = acquiredDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDenomination() {
		return denomination;
	}

	public void setDenomination(String denomination) {
		this.denomination = denomination;
	}

	public int getYearOfMinting() {
		return year_Of_Minting;
	}

	public void setYearOfMinting(int yearOfMinting) {
		this.year_Of_Minting = yearOfMinting;
	}

	public BigDecimal getCurrentValue() {
		return currentValue;
	}

	public void setCurrentValue(BigDecimal currentValue) {
		this.currentValue = currentValue;
	}

	public Date getAcquiredDate() {
		return acquiredDate;
	}

	public void setAcquiredDate(Date acquiredDate) {
		this.acquiredDate = acquiredDate;
	}

	@Override
	public String toString() {
		return "Coin [id=" + id + ", country=" + country + ", denomination=" + denomination + ", yearOfMinting="
				+ year_Of_Minting + ", currentValue=" + currentValue + ", acquiredDate=" + acquiredDate + "]";
	}
	
	

}
