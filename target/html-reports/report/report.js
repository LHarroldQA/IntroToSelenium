$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Stocks.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Stocks test",
  "description": "",
  "id": "stocks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4754029000,
  "status": "passed"
});
formatter.before({
  "duration": 3480338200,
  "status": "passed"
});
formatter.before({
  "duration": 3569616800,
  "status": "passed"
});
formatter.before({
  "duration": 3410230400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Browse the items available on the website",
  "description": "",
  "id": "stocks-test;browse-the-items-available-on-the-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "the FTSE market overview",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Order the market in terms of the risers",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I can work out which one has the highest price",
  "keyword": "Then "
});
formatter.match({
  "location": "Stocks.we_can_open_the_demo_site()"
});
formatter.result({
  "duration": 4156311300,
  "status": "passed"
});
formatter.match({
  "location": "Stocks.order_the_market_in_terms_of_the_risers()"
});
formatter.result({
  "duration": 51370400,
  "status": "passed"
});
formatter.match({
  "location": "Stocks.i_can_work_out_which_one_is_the_largest_riser()"
});
formatter.result({
  "duration": 1177411500,
  "error_message": "java.lang.NumberFormatException: For input string: \"EXPN Experian Plc\"\r\n\tat java.base/jdk.internal.math.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2054)\r\n\tat java.base/jdk.internal.math.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\r\n\tat java.base/java.lang.Double.parseDouble(Double.java:549)\r\n\tat cuke.stepdefs.Stocks.i_can_work_out_which_one_is_the_largest_riser(Stocks.java:68)\r\n\tat ✽.Then I can work out which one has the highest price(Stocks.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1169194300,
  "status": "passed"
});
formatter.after({
  "duration": 1014216900,
  "status": "passed"
});
formatter.after({
  "duration": 953018900,
  "status": "passed"
});
formatter.after({
  "duration": 5085963600,
  "status": "passed"
});
});