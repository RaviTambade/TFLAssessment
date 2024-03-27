package com.tfl.models;


public class Product {

	private int id;
	private String title;
	private String description;
	private int unitPrice;
    private int quantity;

	public Product() {
	}

	public Product(int id, String title, String description, int unitPrice, int quantity) {
		super();
		this.id = id;
        this.title=title;
        this.description=description;
        this.unitPrice=unitPrice;
        this.quantity=quantity;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescrition() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", unit price="
				+ unitPrice + ", quantity available=" + quantity +  "]";
	}
}
