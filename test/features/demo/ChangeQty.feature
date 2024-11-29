Feature: Change Qty Transaction

    Feature Description: Feature to Change Qty transaction.

 @smoke1
Scenario Outline: Run Change Qty Operation when change Qty type is Loss.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
Then <Qty> should be less than or equal to qty for the route.
When Select "Loss" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | ertt | 20| JK_Test1|


 @smoke1
 Scenario Outline: Run Change Qty Operation when change Qty type is Gain.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
Then <Qty> should be less than or equal to qty for the route.
When Select "Gain" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | 300120 | 5| QtyGain|
 

 @smoke1
    Scenario Outline: Run Change Qty Operation when change Qty type is Sell.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
Then <Qty> should be less than or equal to qty for the route.
When Select "Sell" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | DEMO_SUB | 3| Qty Adjustments|



 @smoke1
Scenario Outline: Run Change Qty Operation when change Qty type is Buy.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
Then <Qty> should be less than or equal to qty for the route.
When Select "Buy" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | RCLot2607 | 9| TestBuyReason|



 @smoke1
 Scenario Outline: Run Change Qty Operation when change Qty type is Adjust and Qty is negative.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
When Select "Adjust" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | CTR_20240801_174206_000939 | -6| ADJUST QTY|



     @smoke1
 Scenario Outline: Run Change Qty Operation when change Qty type is Adjust and Qty is positive.

Given Go to Change Qty transaction screen.
When Scan the <Route> for details in the Change Qty screen.
When Select "Adjust" as Qty Type in the Change Qty screen.
When Select <ReasonCode> in the ChangeQty screen.
When Enter the <Qty> in the Change Qty screen.
When Click on the submit button in the Change Qty transaction screen.
Then "Change Qty successful" should confirm the Change Qty transaction.

Examples:
    | TestId | Route | Qty | ReasonCode|
    | Test005  | frt| 35| ADJUST QTY|

