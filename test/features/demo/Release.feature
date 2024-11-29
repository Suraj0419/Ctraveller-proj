Feature: Release Route Card Transaction.

Feature Description: Feature to Release Route Card.

@smoke1
Scenario Outline: Run Release Transaction.

Given Go to Release Transaction screen.
When Scan the <Route> for details in the Release Screen.
When Click on the Release Reason <ReleaseReason>.
When Click on the submit button in the release screen.
Then  "Released successfully" should confirm the release transaction.
Examples:
    | No. | Route | ReleaseReason | 
    | TS01 | Test_MainCOM | Engineering |


    @smoke1
    Scenario Outline: Run Release Transaction for invalid RouteCards.

Given Go to Release Transaction screen.
When Enter the invalid RouteCard <Route> for details in the Release Screen.
Then  "Invalid RouteCard, Please scan valid RouteCard" should confirm the release transaction.
Examples:
    | No. | Route | 
    | TS01 | dffdrrgge | 


@smoke1
Scenario Outline: Run Release Transaction without selecting Release Reason.

Given Go to Release Transaction screen.
When Scan the <Route> for details in the Release Screen.
When Click on the submit button in the release screen.
Then  "Release Reason is required" should come as error.
Examples:
    | No. | Route | 
    | TS01 | PTGF34445 | 


  @smoke1
    Scenario Outline: Run Release Transaction for routes not on hold.

Given Go to Release Transaction screen.
When Scan the hold Route <Route> in the release screen.
Then  "is not on Hold." should come as error alert in the release screen.
Examples:
    | No. | Route | 
    | TS01 | MCQ1122 | 