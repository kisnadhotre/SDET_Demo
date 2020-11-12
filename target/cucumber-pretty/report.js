$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bmiCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "BMI Calcualtor feature",
  "description": "I want to calculate BMI for below users",
  "id": "bmi-calcualtor-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "BMI Page",
  "description": "",
  "id": "bmi-calcualtor-feature;bmi-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open BMICalculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get Page Title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify Page Title \"Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "calculatorDefinition.given()"
});
formatter.result({
  "duration": 11825263000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 18511000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science",
      "offset": 19
    }
  ],
  "location": "calculatorDefinition.then(String)"
});
formatter.result({
  "duration": 23160200,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 373888100,
  "status": "passed"
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
  "duration": 9788440700,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 1882984300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 8828000,
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
  "duration": 117700,
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
  "duration": 795840000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 1426177000,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 63849400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 478139700,
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
  "duration": 8168285400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 1615368300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 6203300,
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
  "duration": 68100,
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
  "duration": 484504500,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 874677800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 69429100,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 457113200,
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
  "duration": 6614509200,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 3869084100,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 112437100,
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
  "duration": 93400,
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
  "duration": 639278300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 1677932900,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 95765100,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 4224837700,
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
  "duration": 9549521700,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 6837104800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 9582600,
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
  "duration": 85700,
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
  "duration": 440617400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 2677478600,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 46211600,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 427578100,
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
  "duration": 12917719300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.bmiCalculatorLink()"
});
formatter.result({
  "duration": 8993825800,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.when()"
});
formatter.result({
  "duration": 10305500,
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
  "duration": 170700,
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
  "duration": 455662200,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.click_on_CalculateButton()"
});
formatter.result({
  "duration": 1615343300,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.print_bmiValue()"
});
formatter.result({
  "duration": 52878400,
  "status": "passed"
});
formatter.match({
  "location": "calculatorDefinition.and()"
});
formatter.result({
  "duration": 413767700,
  "status": "passed"
});
});