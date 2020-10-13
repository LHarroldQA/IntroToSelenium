$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Animal.feature");
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
  "name": "Animal Test",
  "description": "",
  "id": "animal-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we search for \"\u003cAnimals\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "google will return us images of \"\u003cAnimals\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;",
  "rows": [
    {
      "cells": [
        "Animals"
      ],
      "line": 27,
      "id": "animal-test;find-animals-on-google-images;;1"
    },
    {
      "cells": [
        "kittens"
      ],
      "line": 28,
      "id": "animal-test;find-animals-on-google-images;;2"
    },
    {
      "cells": [
        "puppies"
      ],
      "line": 29,
      "id": "animal-test;find-animals-on-google-images;;3"
    },
    {
      "cells": [
        "bunnies"
      ],
      "line": 30,
      "id": "animal-test;find-animals-on-google-images;;4"
    },
    {
      "cells": [
        "lions"
      ],
      "line": 31,
      "id": "animal-test;find-animals-on-google-images;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4652112100,
  "status": "passed"
});
formatter.before({
  "duration": 3718236900,
  "status": "passed"
});
formatter.before({
  "duration": 3688713400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we search for \"kittens\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "google will return us images of \"kittens\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 3672645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kittens",
      "offset": 15
    }
  ],
  "location": "AnimalTest.we_search_for(String)"
});
formatter.result({
  "duration": 2454223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kittens",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_images_of(String)"
});
formatter.result({
  "duration": 3296690700,
  "status": "passed"
});
formatter.after({
  "duration": 1450654700,
  "status": "passed"
});
formatter.after({
  "duration": 1181804400,
  "status": "passed"
});
formatter.after({
  "duration": 5145924900,
  "status": "passed"
});
formatter.before({
  "duration": 3496069500,
  "status": "passed"
});
formatter.before({
  "duration": 3583342000,
  "status": "passed"
});
formatter.before({
  "duration": 5140287300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we search for \"puppies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "google will return us images of \"puppies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2630069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "puppies",
      "offset": 15
    }
  ],
  "location": "AnimalTest.we_search_for(String)"
});
formatter.result({
  "duration": 3327786900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "puppies",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_images_of(String)"
});
formatter.result({
  "duration": 3544714700,
  "status": "passed"
});
formatter.after({
  "duration": 1415316800,
  "status": "passed"
});
formatter.after({
  "duration": 943539000,
  "status": "passed"
});
formatter.after({
  "duration": 5157550900,
  "status": "passed"
});
formatter.before({
  "duration": 3491609300,
  "status": "passed"
});
formatter.before({
  "duration": 3427740700,
  "status": "passed"
});
formatter.before({
  "duration": 3582866900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we search for \"bunnies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "google will return us images of \"bunnies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 3020526300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bunnies",
      "offset": 15
    }
  ],
  "location": "AnimalTest.we_search_for(String)"
});
formatter.result({
  "duration": 3740554300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bunnies",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_images_of(String)"
});
formatter.result({
  "duration": 2936261400,
  "status": "passed"
});
formatter.after({
  "duration": 5049470400,
  "status": "passed"
});
formatter.after({
  "duration": 857167300,
  "status": "passed"
});
formatter.after({
  "duration": 4918070200,
  "status": "passed"
});
formatter.before({
  "duration": 3498062400,
  "status": "passed"
});
formatter.before({
  "duration": 3459875400,
  "status": "passed"
});
formatter.before({
  "duration": 3696778700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we search for \"lions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "google will return us images of \"lions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2195709900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lions",
      "offset": 15
    }
  ],
  "location": "AnimalTest.we_search_for(String)"
});
formatter.result({
  "duration": 3338332600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lions",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_images_of(String)"
});
formatter.result({
  "duration": 3586270900,
  "status": "passed"
});
formatter.after({
  "duration": 1273086200,
  "status": "passed"
});
formatter.after({
  "duration": 926235300,
  "status": "passed"
});
formatter.after({
  "duration": 5177866700,
  "status": "passed"
});
formatter.uri("DemoSite.feature");
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
  "name": "Demo site feature",
  "description": "",
  "id": "demo-site-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "login to the demo website",
  "description": "",
  "id": "demo-site-feature;login-to-the-demo-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we can great a user with the username: \"\u003cusername\u003e\" and password: \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "use those credintials to login. username: \"\u003cusername\u003e\" and password: \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "demo-site-feature;login-to-the-demo-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "demo-site-feature;login-to-the-demo-website;;1"
    },
    {
      "cells": [
        "user",
        "user"
      ],
      "line": 28,
      "id": "demo-site-feature;login-to-the-demo-website;;2"
    },
    {
      "cells": [
        "root",
        "root"
      ],
      "line": 29,
      "id": "demo-site-feature;login-to-the-demo-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3697647600,
  "status": "passed"
});
formatter.before({
  "duration": 3425782100,
  "status": "passed"
});
formatter.before({
  "duration": 3438552900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "login to the demo website",
  "description": "",
  "id": "demo-site-feature;login-to-the-demo-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we can great a user with the username: \"user\" and password: \"user\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "use those credintials to login. username: \"user\" and password: \"user\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.we_can_open_the_demo_site()"
});
formatter.result({
  "duration": 727645100,
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
  "location": "DemoSite.we_can_great_a_user_with_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 1082902700,
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
  "location": "DemoSite.use_those_credintials_to_login_username_and_password(String,String)"
});
formatter.result({
  "duration": 850353600,
  "status": "passed"
});
formatter.after({
  "duration": 962853000,
  "status": "passed"
});
formatter.after({
  "duration": 858542600,
  "status": "passed"
});
formatter.after({
  "duration": 982545100,
  "status": "passed"
});
formatter.before({
  "duration": 3345299700,
  "status": "passed"
});
formatter.before({
  "duration": 3673830200,
  "status": "passed"
});
formatter.before({
  "duration": 3669348400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "login to the demo website",
  "description": "",
  "id": "demo-site-feature;login-to-the-demo-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "we can open the demo site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "we can great a user with the username: \"root\" and password: \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "use those credintials to login. username: \"root\" and password: \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.we_can_open_the_demo_site()"
});
formatter.result({
  "duration": 476212000,
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
  "location": "DemoSite.we_can_great_a_user_with_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 885405900,
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
  "location": "DemoSite.use_those_credintials_to_login_username_and_password(String,String)"
});
formatter.result({
  "duration": 717203600,
  "status": "passed"
});
formatter.after({
  "duration": 1006134100,
  "status": "passed"
});
formatter.after({
  "duration": 996402800,
  "status": "passed"
});
formatter.after({
  "duration": 935313400,
  "status": "passed"
});
formatter.uri("TeaTesting.feature");
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
  "name": "Tea page navigation tests",
  "description": "",
  "id": "tea-page-navigation-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3866809700,
  "status": "passed"
});
formatter.before({
  "duration": 3678136300,
  "status": "passed"
});
formatter.before({
  "duration": 3678471800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Browse the items available on the website",
  "description": "",
  "id": "tea-page-navigation-tests;browse-the-items-available-on-the-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the correct web address",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I navigate to the \u0027Menu\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can browse a list of the available products.",
  "keyword": "Then "
});
formatter.match({
  "location": "TeaTesting.the_correct_web_address()"
});
formatter.result({
  "duration": 11500015200,
  "status": "passed"
});
formatter.match({
  "location": "TeaTesting.i_navigate_to_the_Menu_page()"
});
formatter.result({
  "duration": 10575185600,
  "status": "passed"
});
formatter.match({
  "location": "TeaTesting.i_can_browse_a_list_of_the_available_products()"
});
formatter.result({
  "duration": 13859700,
  "status": "passed"
});
formatter.after({
  "duration": 812565600,
  "status": "passed"
});
formatter.after({
  "duration": 918821600,
  "status": "passed"
});
formatter.after({
  "duration": 918485100,
  "status": "passed"
});
formatter.before({
  "duration": 3626096000,
  "status": "passed"
});
formatter.before({
  "duration": 3630648100,
  "status": "passed"
});
formatter.before({
  "duration": 3582261100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Add an item to the checkout",
  "description": "",
  "id": "tea-page-navigation-tests;add-an-item-to-the-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the correct web address",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click the checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I am taken to the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "TeaTesting.the_correct_web_address()"
});
formatter.result({
  "duration": 11116388800,
  "status": "passed"
});
formatter.match({
  "location": "TeaTesting.i_click_the_checkout_button()"
});
formatter.result({
  "duration": 766759900,
  "status": "passed"
});
formatter.match({
  "location": "TeaTesting.i_am_taken_to_the_checkout_page()"
});
formatter.result({
  "duration": 16024300,
  "status": "passed"
});
formatter.after({
  "duration": 4990576200,
  "status": "passed"
});
formatter.after({
  "duration": 869461300,
  "status": "passed"
});
formatter.after({
  "duration": 934742400,
  "status": "passed"
});
});