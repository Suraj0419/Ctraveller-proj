Feature: POM Feature

    Feature Description: Feature to illustrate the POM
 @rnd
Scenario Outline: Run POM Feature

Given Go to Ctraveller Login Page
When Login with <Username> and <Password>.
Then Check whether it matches the <Text> of the Home Page
Examples:
    | Username | Password | Text |
    | amogha.s@dhruvts.com  | dts@123  | Dashboard demo  |
    | abc@dhruvts.com  | dts@12345  | Dashboard demo |
    

