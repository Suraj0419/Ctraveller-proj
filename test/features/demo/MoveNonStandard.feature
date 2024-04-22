Feature: Move Non Standard Route Card Transaction.

    Feature Description: Feature to move route card to any step within same workflow.
  
Scenario Outline: Run Move Non Standard Transaction with same processflow.

Given Go to Move Non Standard Transaction screen.
When Scan the route <Route> for move non standard transaction.
When  Click on the <Equipment> for the route in move non standard screen.
When  Click on the <ToStep> processflow Step in the move non standard screen.
When Click on submit button in the Move Non Standard screen.
Then "moved to" should confirm the transaction in the move non standard screen.
Examples:
    | TestId | Route | Equipment | ToStep | 
    | TS_001  | ROUTE_6013 | Equipment A | Assembling | 


@smoke 
Scenario Outline: Run Move Non Standard Transaction with different processflow.

Given Go to Move Non Standard Transaction screen.
When Scan the route <Route> for move non standard transaction.
When  Click on the <Equipment> for the route in move non standard screen.
When  Click on the ProcessWorkflow <ToProcessWorkflow> in the move non standard screen.
When  Click on the <ToStep> processflow Step in the move non standard screen.
When Click on submit button in the Move Non Standard screen.
Then "moved to" should confirm the transaction in the move non standard screen.
Examples:
    | TestId | Route | Equipment | ToProcessWorkflow | ToStep |
    | TS_001  | ROUTE_6013 | Equipment A | Collection | Moulding|

    