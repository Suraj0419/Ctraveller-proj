Feature: Split Qty Transaction

    Feature Description: Feature to Split Qty Transaction


@smoke1
Scenario Outline: Run Split qty transaction.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the Add Row button.
When Enter the RouteCard <RouteCard> in Split Qty Transaction screen.
When Enter the Qty <Qty> in Split Qty Transaction screen.
When Click on the submit button in the Split Qty Transaction screen.
Then "Split successfully" should confirm the Split Qty Transaction.

Examples:
    | TestId | Route | RouteCard | Qty |
    | Test005  | www |sssdxde |  1 |



@smoke1
Scenario Outline: Run Split qty transaction.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the submit button in the Split Qty Transaction screen.
Then "Grid Cannot Be Empty" should come as error alert in the screen.

Examples:
    | TestId | Route | 
    | Test005  | www |


    @smoke1
    Scenario Outline: Run Split qty transaction for parent routecard.

Given Go to Split Qty Transaction screen.
When The parent route <Route> to split should be entered.
Then "until atleast one child is selected" should come as error alert in the screen.

Examples: 
    | TestId | Route | 
    | Test005  | 25142024 |


        
    @smoke1
    Scenario Outline: Run Split qty transaction for quantity than the RouteCard Qty.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the Add Row button.
When Enter the RouteCard <RouteCard> in Split Qty Transaction screen.
When Enter the Qty <Qty> in Split Qty Transaction screen.
When Click on the submit button in the Split Qty Transaction screen.
Then "The quantity to be removed exceeds its current quantity" should come as error alert.

Examples:
    | TestId | Route | RouteCard | Qty |
    | Test005  |Test_lens|TESSS45R65 |  157 |


    @smoke1
    Scenario Outline: Run Split qty transaction with checking Generate Names checkbox.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the Add Row button.
When Enter the RouteCard <RouteCard> in Split Qty Transaction screen.
When Enter the Qty <Qty> in Split Qty Transaction screen.
When Click on the Close Source When Empty checkbox.
When Check on the Generate Names Automatically checkbox.
When Click on the submit button in the Split Qty Transaction screen.
Then "The quantity to be removed exceeds its current quantity" should come as error alert.

Examples:
    | TestId | Route | RouteCard | Qty |
    | Test005  |rrr|SFDCU1298 |  20 |


    @smoke1
    Scenario Outline: Run Split qty transaction with checking Generate Names checkbox and with same Quantity.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the Add Row button.
When Enter the Qty <Qty> in Split Qty Transaction screen.
When Click on the Close Source When Empty checkbox.
When Check on the Generate Names Automatically checkbox.
When Click on the submit button in the Split Qty Transaction screen.
Then "Split successfully" should confirm the Split Qty Transaction.
Then <Route> should be in closed state.
Examples:
    | TestId | Route | Qty |
    | Test005  |TEST_CMP2 | 400 |


        @smoke1
    Scenario Outline: Run Split qty transaction with checking Generate Names checkbox and with same Quantity.

Given Go to Split Qty Transaction screen.
When Scan the <Route> for details in the Split Qty Transaction screen.
When Click on the Add Row button.
When Enter the Qty <Qty> in Split Qty Transaction screen.
When Check on the Generate Names Automatically checkbox.
When Click on the submit button in the Split Qty Transaction screen.
Then "Numbering Rule is not configured." should come as validation error alert.
Examples:
    | TestId | Route |  Qty |
    | Test005  |RMS33441|  100 |


    



