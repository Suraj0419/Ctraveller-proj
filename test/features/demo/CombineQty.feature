Feature: Combine Qty Transaction

    Feature Description: Feature to Combine Qty transaction.

@smoke1
Scenario Outline: Run Combine Qty Transaction.

Given Go to Combine Qty transaction screen.
When Scan the <Route> for details in the Combine Qty transaction screen.
When Click on the checkbox for the <RouteCards> in the Combine Qty transaction screen.
When Enter the quantity <Qty> in the combine qty grid for routecards <RouteCards>.
When Click on close when empty checkbox in the combine qty grid for for routecards <RouteCards>.
When Click on the submit button in the Combine Qty Transaction.
Then "Combined successfully" should confirm the Combine Qty Transaction.

Examples:
    | TestId | Route | RouteCards | Qty|
    | Test005  | test2 |AB | 400 |


    
    @smoke1
    Scenario Outline: Run Combine Qty Transaction without selecting the checkbox.

Given Go to Combine Qty transaction screen.
When Scan the <Route> for details in the Combine Qty transaction screen.
When Click on the submit button in the Combine Qty Transaction.
Then "At least one entry should be defined" should come as error alert.

Examples:
    | TestId | Route | RouteCards | Qty|
    | Test005  | abc |A_6 | 6|





    @smoke1
    Scenario Outline: Run Combine Qty Transaction with higher qty than the routecard quantity.

Given Go to Combine Qty transaction screen.
When Scan the <Route> for details in the Combine Qty transaction screen.
When Enter the quantity <Qty> in the combine qty grid for routecards <RouteCards>.
Then "Qty to Combine is cannot be greater" should come as error.

Examples:
    | TestId | Route | RouteCards | Qty|
    | Test005  | ww |CTR_2024-07-31 11:57:54.382 | 445|

        
@smoke1
Scenario Outline: Run Combine Qty Transaction without combining qty.

Given Go to Combine Qty transaction screen.
When Scan the <Route> for details in the Combine Qty transaction screen.
When Click on the checkbox for the <RouteCards> in the Combine Qty transaction screen.
When Click on close when empty checkbox in the combine qty grid for for routecards <RouteCards>.
When Click on the submit button in the Combine Qty Transaction.
Then "Some quantity must be specified" should come as error.

Examples:
    | TestId | Route | RouteCards | 
    | Test005  | RDFGHB76547 |SB | 


 @smoke1
 Scenario Outline: Run Combine Qty Transaction by selecting close when empty checkbox.

Given Go to Combine Qty transaction screen.
When Scan the <Route> for details in the Combine Qty transaction screen.
When Click on the checkbox for the <RouteCards> in the Combine Qty transaction screen.
When Enter the quantity <Qty> in the combine qty grid for routecards <RouteCards>.
When Click on close when empty checkbox in the combine qty grid for for routecards <RouteCards>.
When Click on the submit button in the Combine Qty Transaction.
Then "Combined successfully" should confirm the Combine Qty Transaction.
Then "is in Close State." should come as error alert for child RouteCards <RouteCards> in the combine qty screen.


Examples:
    | TestId | Route | RouteCards | Qty|
    | Test005  | TEST_00 | CTR_2024-07-26 15:03:00.891 | 12 |


