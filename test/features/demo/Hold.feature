Feature: Hold  Route Card Transaction.

    Feature Description: Feature to hold Route Card.
    
 @smoke1
Scenario Outline: Run Hold Transaction.

Given Go to Hold Transaction screen.
When Scan the <Route> for details in the Hold screen.
When  Click on the Hold Reason <HoldReason>.
When Click on the submit button in the hold screen.
Then  "put on Hold" should confirm the hold transaction.
Examples:
    | TestId | Route | HoldReason | 
    | TS_001  | PTM111 | Repair |


@smoke1
Scenario Outline: Run Hold Transaction without selecting the Hold Reason.

Given Go to Hold Transaction screen.
When Scan the <Route> for details in the Hold screen.
When Click on the submit button in the hold screen.
Then  "Hold Reason is required" should come up as validation error.
Examples:
    | TestId | Route | 
    | TS_001  | CTR_2024-07-29 16:27:06.625 |



@smoke
Scenario Outline: Run Hold Transaction for rouytes in hold.

Given Go to Hold Transaction screen.
When Enter the <Route> in Hold.
Then  "already is in Hold state." should come up as validation error.
Examples:
    | TestId | Route | 
    | TS_001  | CTR_2024-07-29 17:35:46.924 |

    