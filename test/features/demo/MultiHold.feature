Feature: Multi Hold  Route Card Transaction.

    Feature Description: Feature to hold Route Card.

@smoke1
Scenario Outline: Run Multi Hold Transaction.

Given Go to the Multi Hold Transaction screen.
When Scan the multiple <Routes> for details in the Multi Hold screen.
Then All the scanned route cards <Routes> should display in grid.
When  Click on the Multi Hold Reason <MultiHoldReason> to multi hold the routes.
When Click on the submit button in the multi hold transaction screen.
Then  "RouteCards put on hold successfully" should confirm the multi hold transaction.
Examples:
    | TestId | Routes | MultiHoldReason | 
    | TS_001  | 456,1234 | Repair |



    @smoke1
    Scenario Outline: Run Multi Hold Transaction by keeping Hold Reason field as empty.

Given Go to the Multi Hold Transaction screen.
When Scan the multiple <Routes> for details in the Multi Hold screen.
Then All the scanned route cards <Routes> should display in grid.
When Click on the submit button in the multi hold transaction screen.
Then  "Hold Reason is required" text should come up in the Multi Hold screen.
Examples:
    | TestId | Routes | 
    | TS_001  |  rty,ww |