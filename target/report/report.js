$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/practice.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "Siva",
        "5",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with Siva",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.logInFirstStep(String)"
});
formatter.result({
  "status": "passed"
});
});