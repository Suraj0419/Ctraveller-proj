Feature: Disassociate Transaction

  Feature Description: Feature to Disassociate transaction

@smoke1
Scenario Outline: Verify that all child routes asscciated with particular route are displayed in the grid.

Given Go to the Disassociate screen.
When In the Disassociate Transaction Scan the <Route> for details.
Then Children <Children> Routecards should be displayed in the grid.

Examples:
    | TestId | Route |  Children |
    | Test005  | RSDEW12256GV | RSEDEW11|


@smoke1
Scenario Outline: Run Disassociate Transaction by selecting one child route from the grid.

Given Go to the Disassociate screen.
When In the Disassociate Transaction Scan the <Route> for details.
When Click on the <ChildRoute> in the dissociate grid.
When Click on the submit button in the Disassociate transaction screen.
Then "Disassociated successfully" should confirm the Disassociate transaction.

Examples:
    | TestId | Route | ChildRoute |
    | Test005  | SRR001 | RSDEE32 |


@smoke1
  Scenario Outline: Verify that the child route dissociate is not present in the grid when scanning the parent route card.

Given Go to the Disassociate screen.
When In the Disassociate Transaction Scan the <Route> for details.
Then Child RouteCard <Children> should not be there in the grid.

Examples:
    | TestId | Route |  Children |
    | Test005  | SRR001 |RSDEE32|



   @smoke1
    Scenario Outline: Run Disassociate Transaction for route by selecting header checkbox.

Given Go to the Disassociate screen.
When In the Disassociate Transaction Scan the <Route> for details.
When Click on the header checkbox to Disassociate all the routes.
When Click on the submit button in the Disassociate transaction screen.
Then "Disassociated successfully" should confirm the Disassociate transaction.

Examples:
    | TestId | Route | 
    | Test005  | ER65421 |


   

     
@smoke1
Scenario Outline: Verify  that the qty for parent route is 0 after dissociating all the children route cards.

Given Go to the Disassociate screen.
When Enter the dissociated route <Route> for details.
Then The Qty for the Parent Route <Route> should be 0.

Examples:
    | TestId | Route | 
    | Test005  | ER65421 |




