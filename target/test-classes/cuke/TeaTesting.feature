#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@ignore
Feature: Tea page navigation tests

@ignore
  Scenario: Browse the items available on the website
    Given the correct web address
    When I navigate to the 'Menu' page
    Then I can browse a list of the available products.

@ignore
  Scenario: Add an item to the checkout
    Given the correct web address
    When I click the checkout button
    Then I am taken to the checkout page