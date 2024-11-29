Feature: Associate Transaction

Feature Description: Feature to Associate transaction

@smoke1
Scenario Outline: Run Associate Transaction for route with 0 QTY.

Given Go to Associate transaction screen.
When Scan the <Route> for details in the Associate Transaction.
When Click on the checkbox for the multiple elgible <RouteCards>.
When Click on the submit button in the Associate Transaction.
Then "Associated successfully" should confirm the Associate transaction.

Examples:
    | TestId | Route | RouteCards |
    | Test005  | newparent |Test_train,Test_tr |



@smoke1
Scenario Outline: Run Associate Transaction for route with non zero QTY.

Given Go to Associate transaction screen.
When Enter the routes to be associated <Route> with non zero Qty for details in the Associate Transaction.
Then "must have children or no quantity" should come as error.

Examples:
    | TestId | Route | 
    | Test005  | SUR1995 |


@smoke1
Scenario Outline: Run Associate Transaction when no entry has been selected from the grid.

Given Go to Associate transaction screen.
When Scan the <Route> for details in the Associate Transaction.
When Click on the submit button in the Associate Transaction.
Then "At least one entry should be selected in the grid" should come as error in the screen.

Examples:
    | TestId | Route | RouteCards |
    | Test005  | JOBCARD |APJ02,APJ03 |




@smoke1
Scenario Outline: Verify whether quantity is added to the parent route qty.

Given Go to Associate transaction screen.
When Scan the <Route> for details in the Associate Transaction.
When Click on the checkbox for the multiple elgible <RouteCards>.
When Click on the submit button in the Associate Transaction.
Then "Associated successfully" should confirm the Associate transaction.
When Enter the parent <Route> in Associate screen.
Then The Parent Qty should match with the combined qty of child <RouteCards>.

Examples:
    | TestId | Route | RouteCards |
    | Test005  | RMSV111 |TEST_01 |


    

