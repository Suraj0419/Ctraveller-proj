Feature: Close Route Card Transaction

    Feature Description: Feature to close transaction

@smoke
Scenario Outline: Run Close Transaction

Given Go to close transaction screen.
When Scan the <Route> for details in the Close screen.
When Click on the submit button in the Close screen.
Then "Closed successfully" should confirm the close transaction.

Examples:
    | TestId | Route |
    | Test05  | ROUTE_001 |