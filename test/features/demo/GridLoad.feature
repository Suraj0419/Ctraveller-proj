Feature: Grid Load Transaction.

    Feature Description: Feature to test the Grid Load Operation.
@smoke1
Scenario Outline: Run Grid Load Transaction.

Given Go to the Multi Hold Transaction screen.
When Scan the multiple <Routes> for details in the Multi Hold screen.
Then All the scanned route cards <Routes> should display in grid.
Examples:
    | TestId | Routes | 
    | TS_001  | AUTY1112 |