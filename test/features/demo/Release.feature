Feature: Release Route Card Transaction.

Feature Description: Feature to Release Route Card.


Scenario Outline: Run Release Transaction.

Given Go to Release Transaction screen.
When Scan the <Route> for details in the Release Screen.
When Click on the Release Reason <ReleaseReason>.
When Click on the submit button in the release screen.
Then  "Released successfully" should confirm the release transaction.
Examples:
    | No. | Route | ReleaseReason | 
    | TS01 | ROUTE_6013 | QualityApproval |