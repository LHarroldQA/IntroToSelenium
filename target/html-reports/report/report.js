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
  "line": 20,
  "name": "Animal Test",
  "description": "",
  "id": "animal-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we search for \"\u003cAnimals\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "google will return us images of \"\u003cAnimals\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "google will return us videos of \"\u003cAnimals\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;",
  "rows": [
    {
      "cells": [
        "Animals"
      ],
      "line": 29,
      "id": "animal-test;find-animals-on-google-images;;1"
    },
    {
      "cells": [
        "kittens"
      ],
      "line": 30,
      "id": "animal-test;find-animals-on-google-images;;2"
    },
    {
      "cells": [
        "cute puppies"
      ],
      "line": 31,
      "id": "animal-test;find-animals-on-google-images;;3"
    },
    {
      "cells": [
        "bunnies"
      ],
      "line": 32,
      "id": "animal-test;find-animals-on-google-images;;4"
    },
    {
      "cells": [
        "lions"
      ],
      "line": 33,
      "id": "animal-test;find-animals-on-google-images;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4984290900,
  "status": "passed"
});
formatter.before({
  "duration": 3728203900,
  "status": "passed"
});
formatter.before({
  "duration": 3653916700,
  "status": "passed"
});
formatter.before({
  "duration": 4194172900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we search for \"kittens\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "google will return us images of \"kittens\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "google will return us videos of \"kittens\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2843605100,
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
  "duration": 4772901500,
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
  "duration": 3844522300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kittens",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_videos_of(String)"
});
formatter.result({
  "duration": 2482185300,
  "status": "passed"
});
formatter.after({
  "duration": 1181428900,
  "status": "passed"
});
formatter.after({
  "duration": 5583187100,
  "status": "passed"
});
formatter.after({
  "duration": 1027680300,
  "status": "passed"
});
formatter.after({
  "duration": 5322316100,
  "status": "passed"
});
formatter.before({
  "duration": 3739716300,
  "status": "passed"
});
formatter.before({
  "duration": 3423210400,
  "status": "passed"
});
formatter.before({
  "duration": 3626521300,
  "status": "passed"
});
formatter.before({
  "duration": 4055707900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we search for \"cute puppies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "google will return us images of \"cute puppies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "google will return us videos of \"cute puppies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2463639400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cute puppies",
      "offset": 15
    }
  ],
  "location": "AnimalTest.we_search_for(String)"
});
formatter.result({
  "duration": 3853856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cute puppies",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_images_of(String)"
});
formatter.result({
  "duration": 5795286900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cute puppies",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_videos_of(String)"
});
formatter.result({
  "duration": 2783866100,
  "status": "passed"
});
formatter.after({
  "duration": 5405289200,
  "status": "passed"
});
formatter.after({
  "duration": 1263607300,
  "status": "passed"
});
formatter.after({
  "duration": 1073225100,
  "status": "passed"
});
formatter.after({
  "duration": 4977547300,
  "status": "passed"
});
formatter.before({
  "duration": 3376626500,
  "status": "passed"
});
formatter.before({
  "duration": 3646003500,
  "status": "passed"
});
formatter.before({
  "duration": 3456564500,
  "status": "passed"
});
formatter.before({
  "duration": 3626916300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we search for \"bunnies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "google will return us images of \"bunnies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "google will return us videos of \"bunnies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2668143100,
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
  "duration": 1648348000,
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
  "duration": 3781326700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bunnies",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_videos_of(String)"
});
formatter.result({
  "duration": 2197161800,
  "status": "passed"
});
formatter.after({
  "duration": 2471131800,
  "status": "passed"
});
formatter.after({
  "duration": 5360117400,
  "status": "passed"
});
formatter.after({
  "duration": 1172324800,
  "status": "passed"
});
formatter.after({
  "duration": 5218837200,
  "status": "passed"
});
formatter.before({
  "duration": 3447491700,
  "status": "passed"
});
formatter.before({
  "duration": 3633417800,
  "status": "passed"
});
formatter.before({
  "duration": 3866168100,
  "status": "passed"
});
formatter.before({
  "duration": 3968575800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "find animals on google images",
  "description": "",
  "id": "animal-test;find-animals-on-google-images;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "we can open google",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we search for \"lions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "google will return us images of \"lions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "google will return us videos of \"lions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AnimalTest.we_can_open_google()"
});
formatter.result({
  "duration": 2695416000,
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
  "duration": 5495545300,
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
  "duration": 4050779500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lions",
      "offset": 33
    }
  ],
  "location": "AnimalTest.google_will_return_us_videos_of(String)"
});
formatter.result({
  "duration": 2283902700,
  "status": "passed"
});
formatter.after({
  "duration": 5169096100,
  "status": "passed"
});
formatter.after({
  "duration": 1029013300,
  "status": "passed"
});
formatter.after({
  "duration": 932066000,
  "status": "passed"
});
formatter.after({
  "duration": 5349719000,
  "status": "passed"
});
});