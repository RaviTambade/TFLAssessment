Feature: Simple Calculator
  Scenario: Add two numbers
    Given I have a calculator
    When I add 5 and 8
    Then the result should be 13
