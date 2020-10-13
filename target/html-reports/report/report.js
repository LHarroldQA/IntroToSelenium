$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
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
  "line": 19,
  "name": "Google Test",
  "description": "",
  "id": "google-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "login to the demo website",
  "description": "",
  "id": "google-test;login-to-the-demo-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "we can great a user with the username: \"\u003cusername\u003e\" and password: \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "use those credintials to login. username: \"\u003cusername\u003e\" and password: \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "google-test;login-to-the-demo-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 41,
      "id": "google-test;login-to-the-demo-website;;1"
    },
    {
      "cells": [
        "user",
        "user"
      ],
      "line": 42,
      "id": "google-test;login-to-the-demo-website;;2"
    },
    {
      "cells": [
        "root",
        "root"
      ],
      "line": 43,
      "id": "google-test;login-to-the-demo-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4997967000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "login to the demo website",
  "description": "",
  "id": "google-test;login-to-the-demo-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "we can great a user with the username: \"user\" and password: \"user\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "use those credintials to login. username: \"user\" and password: \"user\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTest.we_can_open_the_demo_site()"
});
formatter.result({
  "duration": 919452800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 40
    },
    {
      "val": "user",
      "offset": 61
    }
  ],
  "location": "GoogleTest.we_can_great_a_user_with_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 1203182800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 43
    },
    {
      "val": "user",
      "offset": 64
    }
  ],
  "location": "GoogleTest.use_those_credintials_to_login_username_and_password(String,String)"
});
formatter.result({
  "duration": 705195400,
  "status": "passed"
});
formatter.after({
  "duration": 969402400,
  "status": "passed"
});
formatter.before({
  "duration": 3510421900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "login to the demo website",
  "description": "",
  "id": "google-test;login-to-the-demo-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "we can great a user with the username: \"root\" and password: \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "use those credintials to login. username: \"root\" and password: \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTest.we_can_open_the_demo_site()"
});
formatter.result({
  "duration": 462491300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 40
    },
    {
      "val": "root",
      "offset": 61
    }
  ],
  "location": "GoogleTest.we_can_great_a_user_with_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 714668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 43
    },
    {
      "val": "root",
      "offset": 64
    }
  ],
  "location": "GoogleTest.use_those_credintials_to_login_username_and_password(String,String)"
});
formatter.result({
  "duration": 633425600,
  "status": "passed"
});
formatter.after({
  "duration": 856653200,
  "status": "passed"
});
});