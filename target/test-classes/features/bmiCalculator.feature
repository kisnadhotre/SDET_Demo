Feature: BMI Calcualtor feature
  I want to calculate BMI for below users

  @Regression
  Scenario: BMI Page
    Given Open BMICalculator Page
    When Get Page Title
    Then Verify Page Title "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science"
    And Close Browser

  @Regression
  Scenario Outline: BMI Calculator
    Given Open BMICalculator Page
    When Click on BMICalculatorLink
    And Get Page Title
    Then Verify Page Title "BMI Calculator"
    And User enters "<age>" and "<height>" and "<weight>"
    And Click on CalculateButton
    Then Print BMIValue
    And Close Browser

    Examples:
     | age | height | weight |
     | 10  |  127   |  40    |
     | 30  |  156   |  70    |
     | 25  |  152   |  55    |
     | 20  |  160   |  45    |
     | 35  |  160   |  70    |