package com.example.demo.stepdefs;

import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ProductApiSteps {

    private Response response;

    @Given("the Product API is available")
    public void the_product_api_is_available() {
        RestAssured.baseURI = "http://localhost:9090";
    }

    @When("I GET all products")
    public void i_get_all_products() {
        response = given().when().get("/api/products");
    }

    @Then("the response status code should be {int}")
    public void the_response_status_code_should_be(Integer statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response should contain at least one product")
    public void the_response_should_contain_at_least_one_product() {
        response.then().body("size()", greaterThan(0))
                .body("[0].name", notNullValue());
    }

    @When("I POST a new product with id {int}, name {string}, price {int}")
    public void i_post_a_new_product(Integer id, String name, Integer price) {
        String jsonBody = String.format("""
                {
                    "id": %d,
                    "name": "%s",
                    "price": %d
                }
                """, id, name, price);

        response = given()
                .contentType(ContentType.JSON)
                .body(jsonBody)
                .when()
                .post("/api/products");
    }

    @Then("the response product name should be {string}")
    public void the_response_product_name_should_be(String expectedName) {
        response.then().body("name", equalTo(expectedName));
    }
}