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
Feature: Google Test
	@ignore
  Scenario Outline: find animals on google images
  
  	Given we can open google
  	When we search for "<Animals>"
  	Then google will return us images of "<Animals>"
  	
  	Examples:
  	|  Animals |
  	|  kittens |
  	|  puppies |
  	|  bunnies |
  	|  lions   |
  	
	Scenario Outline: login to the demo website
  
  	Given we can open the demo site
  	When we can great a user with the username: "<username>" and password: "<password>"
  	Then use those credintials to login. username: "<username>" and password: "<password>"
  	
  	Examples:
  	|  username | password |
  	|  user     | user     |
  	|  root     | root     |
    
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
