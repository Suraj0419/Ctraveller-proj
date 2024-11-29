Feature: Search Feature in Ctraveller

    Feature Description: Feature to Search Feature

@smoke1
Scenario Outline: Run Search Feature

Given Go to Transaction sub menu.
When Enter the value <Value> to Search in input box in sidebar.
Then I should see one or more menu links matching the search <Value> value.

Examples:
    | TestId | Value | 
    | TS_001  | Hold | 