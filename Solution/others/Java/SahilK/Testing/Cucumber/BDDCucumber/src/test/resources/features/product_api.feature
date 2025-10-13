Feature: Product API

  Scenario: Get all products
    Given the Product API is available
    When I GET all products
    Then the response status code should be 200
    And the response should contain at least one product

  Scenario: Create a new product
    Given the Product API is available
    When I POST a new product with id 4, name "Wireless Mouse", price 1500
    Then the response status code should be 200
    And the response product name should be "Wireless Mouse"
