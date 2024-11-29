Feature: Split RouteCard Transaction

    Feature Description: Feature to Split RouteCard Transaction

@smoke1
Scenario Outline: Run Split transaction for a particular route.

Given Go to Split RouteCard Transaction screen.
When Scan the <Route> for details in the Split RouteCard Transaction screen.
When Click on the checkbox to split multiple <RouteCards>.
When Enter the non created RouteCard <RouteCard> in ToRouteCard input box.
When Click on the submit button in the Split RouteCard Transaction screen.
Then "Split successfully" should confirm the Split RouteCard Transaction.

Examples:
    | TestId | Route | RouteCards | RouteCard |
    | Test005  | RDS11256 | RDS12566,RDS13566|RTGF762S|


@smoke1
Scenario Outline: Run Split transaction for a particular route without selecting routecards.

Given Go to Split RouteCard Transaction screen.
When Scan the <Route> for details in the Split RouteCard Transaction screen.
When Enter the non created RouteCard <RouteCard> in ToRouteCard input box.
When Click on the submit button in the Split RouteCard Transaction screen.
Then "Select atleast 1 row from" should come as error alert.

Examples:
    | TestId | Route | RouteCards | RouteCard |
    | Test005  | SV_Mould1 | SV_Mould1_C1 |RT_1977DHR|


    
@smoke1
Scenario Outline: Run Split transaction for a particular route without selecting routecards.

Given Go to Split RouteCard Transaction screen.
When Scan the <Route> for details in the Split RouteCard Transaction screen.
When Click on the checkbox to split multiple <RouteCards>.
When Click on the submit button in the Split RouteCard Transaction screen.
Then "is mandatory" should come as error alert for the non entered routecard.


Examples:
    | TestId | Route | RouteCards | RouteCard |
    | Test005  | TEST_MAIN3 |S4B|RT_197655|