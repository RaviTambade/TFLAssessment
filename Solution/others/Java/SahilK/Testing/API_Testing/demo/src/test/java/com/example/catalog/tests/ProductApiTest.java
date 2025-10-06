package com.example.catalog.tests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class ProductApiTest {

    @Test
    public void testGetAllProducts() {
        RestAssured.baseURI = "http://localhost:9090";

        given()
            .when().get("/api/products")
            .then()
            .statusCode(200)
            .body("size()", greaterThan(0))
            .body("[0].name", notNullValue());
    }

    // ✅ GET one product by ID
    // @Test
    // public void getProductById_shouldReturnOne() {
    //     RestAssured.baseURI = "http://localhost:9090";
    //     given()
    //     .when()
    //         .get("/api/products/1")
    //     .then()
    //         .statusCode(200);
    //         // .body("name", notNullValue())
    //         // .body("price", greaterThan(14000));
    // }
 
    @Test
    public void createProduct_shouldReturn201() {
        RestAssured.baseURI = "http://localhost:9090";
        String newProductJson = """
        {
            "id" :4,
            "name": "Wireless Mouse",
            "price": 1500
        }
        """;

        given()
            .contentType(ContentType.JSON)
            .body(newProductJson)
        .when()
            .post("/api/products")
        .then()
            .statusCode(201) // Created
            .body("id", notNullValue())
            .body("name", equalTo("Wireless Mouse"))
            .body("price", equalTo(1500));
    }

    // ✅ UPDATE product (PUT)
    // @Test
    // public void updateProduct_shouldReturn200() {
    //     RestAssured.baseURI = "http://localhost:9090";
    //     String updatedProductJson = """
    //     {
    //         "id": 1,
    //         "name": "Dell",
    //         "price": 19000
    //     }
    //     """;

    //     given()
    //         .contentType(ContentType.JSON)
    //         .body(updatedProductJson)
    //     .when()
    //         .put("/api/products/1")
    //     .then()
    //         .statusCode(200)
    //         .body("name", equalTo("Dell"))
    //         .body("price", equalTo(19000));
    // }

    // @Test
    // public void deleteProduct_shouldReturn204() {
    //     RestAssured.baseURI = "http://localhost:9090";
    //     given()
    //     .when()
    //         .delete("/api/products/1")
    //     .then()
    //         .statusCode(204); // No Content
    // }

}