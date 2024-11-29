Feature: Open Route Card Transaction.

Feature Description: Feature to open Route Card.

@smoke1
Scenario Outline: Run Open Transaction.

Given Go to Open Transaction screen.
When Scan the closed <Route> in the open screen.
When In the open screen click on the submit button.
Then  "Opened successfully" should confirm the open transaction.
Examples:
    | No. | Route | 
    | TS01 | PMS1112 | 


@smoke1
Scenario Outline: Run Open Transaction for open route card.

Given Go to Open Transaction screen.
When Enter the open <Route> in the open screen.
Then  "is already in Open State" should come as error message.
Examples:
    | No. | Route | 
    | TS01 | ER976544 | 


@smoke1
Scenario Outline: Run Open Transaction for route card on hold.

Given Go to Open Transaction screen.
When Enter the hold <Route> in the open screen.
Then  "is in Hold State" should come as error message.
Examples:
    | No. | Route | 
    | TS01 | PMS5667QW | 


@smoke1
Scenario Outline: Run Open Transaction for child routecard.

Given Go to Open Transaction screen.
When Scan the closed <Route> in the open screen.
When In the open screen click on the submit button.
Then  "Opened successfully" should confirm the open transaction.
When Scan the parent Route <ParentRoute> in the screen.
Then  "is already in Open State" should come as error message verifying that parent route is open.

Examples:
    | No. | Route | ParentRoute |
    | TS01 | CH561 | PMS1114 |



Scenario Outline: Run Open Transaction for child routecard.

Given Go to Open Transaction screen.
When Scan the closed <Route> in the open screen.
When In the open screen click on the submit button.
When Scan the parent Route <ParentRoute> in the screen.
Then  "is already in Open State" should come as error message verifying that parent route is open.

Examples:
    | No. | Route | ParentRoute |
    | TS01 | CH561 | PMS1114 |


  
@smoke1
Scenario Outline: Run Open Transaction for parent routecard.

Given Go to Open Transaction screen.
When Scan the closed <Route> in the open screen.
When In the open screen click on the submit button.
Then  "Opened successfully" should confirm the open transaction.
Then  Verify whether the child routes <ChildRoutes> are open or not.

Examples:
    | No. | Route | ChildRoutes |
    | TS01 | TMK667PAR | TMKCHILD668,TMKCHILD669 |