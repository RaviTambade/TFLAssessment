package com.example.catalog.tests;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.notNullValue;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;

public class ProductAPITest {

    static {
        RestAssured.baseURI = "http://localhost:6070";
    }

    @Test
    public void testGetAllProducts() {
        given()
            .when().get("/api/products")
            .then()
            .statusCode(200)
            .body("size()", greaterThan(0))
            .body("[0].name", notNullValue());
    }

    @Test
    public void getProductById_showReturnOne() {
        given()
            .when().get("/api/products/4")
            .then()
            .statusCode(200);
    }

    @Test
    public void createProduct_shouldReturn200() {
        String newProductJson = """
        {
            "name": "red Rose",
            "price": 150.0
        }
        """;

        given()
            .contentType(ContentType.JSON)
            .body(newProductJson)
        .when()
            .post("/api/products")
        .then()
            .statusCode(200)
            .body("id", notNullValue())
            .body("name", equalTo("red Rose"))
            .body("price", equalTo(150.0F));
    }

    @Test
   public void updateProduct_shouldReturn200() {
    String updateProductJson = """
    {
        "id": 2,
        "name": "rose",
        "price": 130.0
    }
    """;

    given()
        .contentType(ContentType.JSON)
        .body(updateProductJson)
    .when()
        .put("/api/products/3") 
    .then()
        .statusCode(200)
        .body("name", equalTo("rose"))
        .body("price", equalTo(130.0F));
}

    @Test
    public void deleteProduct_showReturn200() {
        given()
            .when().delete("/api/products/3")
        .then().statusCode(200);
    }
}
