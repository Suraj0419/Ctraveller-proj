Feature: Rework Operation

    Feature Description: Feature to move route card to rework step.
@smoke1
Scenario Outline: Run Rework Transaction.

Given Go to Rework Transaction screen.
When Scan the route <Route> for rework transaction screen.
When  Click on the <ReworkReason> in the rework screen.
When  Select the <ReworkStep> in the rework screen.
When Click on submit button in the rework screen.
Then "moved to rework step" should confirm the rework transaction.
Examples:
    | TestId | Route | Equipment | ReworkReason | ReworkStep |
    | TS_001  | REW112 | Equipment A | stock | step2|

@smoke1
Scenario Outline: Run Rework Transaction without Rework Reason.

Given Go to Rework Transaction screen.
When Scan the route <Route> for rework transaction screen.
When Click on submit button in the rework screen.
Then "Rework Reason is required" error message should come up in rework screen.
Examples:
    | TestId | Route | 
    | TS_001  | REW111 | 



@smoke1
Scenario Outline: Run Rework Transaction without rework step.

Given Go to Rework Transaction screen.
When Scan the route <Route> for rework transaction screen.
When  Click on the <ReworkReason> in the rework screen.
When Clear the rework step if it is present.
When Click on submit button in the rework screen.
Then "Rework Step is required" should come as error message.
Examples:
    | TestId | Route |  ReworkReason | 
    | TS_001  | REW111 | stock | 


    
@smoke1
Scenario Outline: Run Rework Transaction for a parent route.

Given Go to Rework Transaction screen.
When Enter the parent Route <Route> for rework transaction screen.
Then "Rework Step is not configured" should come as error message.
Examples:
    | TestId | Route |  
    | TS_001  | TEST562 |


@smoke1
    Scenario Outline: Run Rework Transaction for an invalid route.

Given Go to Rework Transaction screen.
When Input the invalid Route <Route> for rework transaction screen.
Then "Invalid RouteCard, Please scan valid RouteCard" should come as error message.
Examples:
    | TestId | Route |  
    | TS_001  | rffff5 |


 





