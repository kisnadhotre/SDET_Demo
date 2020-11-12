$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bmiCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "BMI Calcualtor feature",
  "description": "I want to calculate BMI for below users",
  "id": "bmi-calcualtor-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cage\u003e\" and \"\u003cheight\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 23,
      "id": "bmi-calcualtor-feature;bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 24,
      "id": "bmi-calcualtor-feature;bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 25,
      "id": "bmi-calcualtor-feature;bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 26,
      "id": "bmi-calcualtor-feature;bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 27,
      "id": "bmi-calcualtor-feature;bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 28,
      "id": "bmi-calcualtor-feature;bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"10\" and \"127\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 11929117700,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 2947885300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 15593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 6162400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "127",
      "offset": 22
    },
    {
      "val": "40",
      "offset": 32
    }
  ],
  "location": "calculatorDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 480437000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 724072000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 74042300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 280917400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"30\" and \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 8430630400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 1781727300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 25628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 108200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 13
    },
    {
      "val": "156",
      "offset": 22
    },
    {
      "val": "70",
      "offset": 32
    }
  ],
  "location": "calculatorDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 817083500,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 4080524900,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 52802300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 4550599600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"25\" and \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 7980689700,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 1591948800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 20573300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 81400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    },
    {
      "val": "152",
      "offset": 22
    },
    {
      "val": "55",
      "offset": 32
    }
  ],
  "location": "calculatorDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 632226200,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 1206477800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 61585500,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 359359300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"20\" and \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 8987290700,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 2132634100,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 9946400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 22
    },
    {
      "val": "45",
      "offset": 32
    }
  ],
  "location": "calculatorDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 715375400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 876712600,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 48116200,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 393751500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "BMI Calculator",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on BMICalculatorLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Get Page Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Page Title \"BMI Calculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"35\" and \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on CalculateButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print BMIValue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 8410313300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 1829080300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 11466300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 104300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 22
    },
    {
      "val": "70",
      "offset": 32
    }
  ],
  "location": "calculatorDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 481106000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 909925800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 50073600,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 255839500,
  "status": "passed"
});
});