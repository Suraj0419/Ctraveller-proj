Feature: Combine RouteCard Transaction

    Feature Description: Feature to Combine RouteCard Transaction

@smoke1
Scenario Outline: Run Combine transaction for a particular route.

Given Go to Combine RouteCard Transaction screen.
When Scan the <Route> for details in the Combine RouteCard Transaction screen.
When Click on the checkbox to Combine multiple <RouteCards>.
When Enter Comment <Comment> in the Combine Qty screen.
When Click on the submit button in the Combine RouteCard Transaction screen.
Then "Combined successfully" should confirm the Combine RouteCard Transaction.

Examples:
    | TestId | Route | RouteCards | Comment |
    | Test005  | TEST_RC |PT115 | cmd11 |


    @smoke1
    Scenario Outline: Run Combine transaction without selecting route children.

Given Go to Combine RouteCard Transaction screen.
When Scan the <Route> for details in the Combine RouteCard Transaction screen.
When Click on the submit button in the Combine RouteCard Transaction screen.
Then "Atleast one RouteCard has to be selected to perform Transaction." should come as validation error.

Examples:
    | TestId | Route |
    | Test001  | ES32111 |


@smoke1
Scenario Outline: Run Combine transaction for a route while selecting closeWhenEmpty checkbox.

Given Go to Combine RouteCard Transaction screen.
When Scan the <Route> for details in the Combine RouteCard Transaction screen.
When Click on the checkbox to Combine multiple <RouteCards>.
When  Click on Close When Empty checkbox.
When Enter Comment <Comment> in the Combine Qty screen.
When Click on the submit button in the Combine RouteCard Transaction screen.
Then "Combined successfully" should confirm the Combine RouteCard Transaction.

Examples:
    | TestId | Route | RouteCards | Comment |
    | Test001  | reswaa | PT116 | cmdf |


@smoke1
Scenario Outline: Run Combine transaction for child route.

Given Go to Combine RouteCard Transaction screen.
When Enter the child route <Route> for details in the Combine RouteCard Transaction screen.
Then "not eligible for this Transaction." should come as validation error alert.

Examples:
    | TestId | Route | 
    | Test001  | DEMO_MAINPO | 



