Feature: HTTP Status Code Playground
  The API should return correct status codes for different endpoints

  Scenario: Verify 200 OK
    Given the Product API is available
    When I send GET request to "/api/status/ok"
    Then the response status should be 200
    And the response should contain "Everything is fine"

  Scenario: Verify 201 Created
    When I send POST request to "/api/status/created"
    Then the response status should be 201
    And the response should contain "Resource created"

  Scenario: Verify 404 Not Found
    When I send GET request to "/api/status/notfound"
    Then the response status should be 404
    And the response should contain "not found"

  Scenario: Verify 500 Internal Server Error
    When I send GET request to "/api/status/servererror"
    Then the response status should be 500
    And the response should contain "/ by zero"