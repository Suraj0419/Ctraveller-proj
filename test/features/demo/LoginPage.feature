Feature: Sign In Transaction

    Feature Description: Feature to illustrate the SignIn Transaction.

Scenario Outline: Run Login Feature

Given Go to Ctraveller Login Page
When Login with <Username> and <Password>.
Then "Dashboard Demo" on home page should confirm the login functionality.
Examples:
    | Username | Password | 
    | amogha.s@dhruvts.com  | dts@123  | 
    

