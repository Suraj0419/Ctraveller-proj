Feature: Hold  Route Card Transaction.

    Feature Description: Feature to hold Route Card.
   @smoke  
Scenario Outline: Run Hold Transaction.

Given Go to Hold Transaction screen.
When Scan the <Route> for details in the Hold screen.
When  Click on the Hold Reason <HoldReason>.
When Click on the submit button in the hold screen.
Then  "put on Hold" should confirm the hold transaction.
Examples:
    | TestId | Route | HoldReason | 
    | TS_001  | ROUTE_6010 | Stock |