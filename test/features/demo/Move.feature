Feature: Move Route Card Transaction.

    Feature Description: Feature to move route card to next step.


 @smoke1
Scenario Outline: Verify the workflow is in first step or not.

Given Go to Move Transaction screen.
Then Verify that workflow for the <Route> is in <First> step of the workflow.
Examples:
    | TestId | Route | First | 
    | TS_001  | RSDEE32 | step2 | 
    

Scenario Outline: Run Move Transaction

Given Go to Move Transaction screen.
When  Scan the <Route> in the move screen.
When Click on submit button in the Move screen.
Then "moved to" should confirm the transaction.
Examples:
    | TestId | Route | Equipment | 
    | TS_001  | RS543211 | Equipment A | 

    


 
     Scenario Outline: Run Move Transaction with alternate path.

Given Go to Move Transaction screen.
When Scan the <Route> in the move screen.
When  Select the alternate path <ToStep> in the move dropdown.
When Click on submit button in the Move Non Standard screen.
Then  The success move message should have <ToStep> indicating that route has moved into Alternate path.
Examples:
    | TestId | Route |  ToStep | 
    | TS_001  | RSDEE34321|  step4 | 
    


Scenario Outline: Run Move Transaction to further steps.

Given Go to Move Transaction screen.
Then  Keep moving RouteCards until "End of Processflow.Cannot move further" come as error alert for <Route>.
Examples:
    | TestId | Route | 
    | TS_001  | RASAEQ11137 |
    

@smoke1
Scenario Outline: Verify the routecard is in last step or not.

Given Go to Move Transaction screen.
When  Scan the <Route> in the move screen.
When Click on submit button in the Move screen.
Then "End of Processflow.Cannot move further" must come as error popup.
Examples:
    | TestId | Route | Last |
    | TS_001  | RASAEQ1111 |step7 |