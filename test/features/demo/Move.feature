Feature: Move Route Card Transaction.

    Feature Description: Feature to move route card to next step.

Scenario Outline: Run Move Transaction

Given Go to Move Transaction screen.
Then Verify that workflow for the <Route> is in <First> step of the workflow.
When  Click on the <Equipment> for the route.
When Click on submit button in the Move screen.
Then "moved to" should confirm the transaction.
Examples:
    | TestId | Route | First | Equipment | 
    | TS_001  | ROUTE_4477446 | Moulding | Equipment A | 
    