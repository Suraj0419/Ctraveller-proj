Feature: Component Issue Transaction.

    Feature Description: Feature to do Component Issue Transaction.

@smoke1
Scenario Outline: Component Issue Transaction with Bulk Component Route Card.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as bulk.
When  Enter the Bulk Component RouteCard <RouteCard> input in the Component Issue screen.
When Enter the Issue Qty <IssueQty> in Component Issue screen.
When Click on the Issue Difference Reason <Reason> in in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Component issued" should confirm the Component Issue transaction.

Examples:
    | TestId | Route | RouteCard | IssueQty| Reason |
    | Test005  |BCG1275 | BCG1276 | 500| Replace Component |


@smoke1
Scenario Outline: Component Issue Transaction with Serialized Component Route Card.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as Serialized.
When  Enter the Serialized Component RouteCard <RouteCard> input in the Component Issue screen.
Then Required Qty should be equal to Component Route Card Qty.
When Click on the Issue Difference Reason <Reason> in in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Component issued" should confirm the Component Issue transaction.

Examples:
    | TestId | Route | RouteCard | Reason |
    | Test0051  | BFG1167 | BFG1168 | Replace Component |


@smoke1
Scenario Outline: Component Issue Transaction with Serialized Component Route Card having issue qty equal to Main Route Card Qty.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as Serialized.
When  Enter the Serialized Component RouteCard <RouteCard> input in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Component issued" should confirm the Component Issue transaction.

Examples:
    | TestId | Route | RouteCard | Reason |
    | Test0051  | BCG1275 |BCG1277 | Qty |


    @smoke1
Scenario Outline: Component Issue Transaction with Serialized Component Route Card having issue qty greater than to Main Route Card Qty.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as Serialized.
When  Enter the Serialized Component RouteCard <RouteCard> input in the Component Issue screen.
When Click on the Issue Difference Reason <Reason> in in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Component issued" should confirm the Component Issue transaction.

Examples:
    | TestId | Route | RouteCard | Reason |
    | Test0051  | BCGF211 | BCFG213 | Replace Component |


@smoke1
Scenario Outline: Component Issue Transaction with Serialized Component Route Card having substitute product.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as bulk.
When  Enter the Serialized Component RouteCard <RouteCard> input in the Component Issue screen.
When Click on the Issue Difference Reason <Reason> in in the Component Issue screen.
When Enter the Issue Qty <IssueQty> in Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "A Substitute Reason is required for Component Product" should come as Validation error.

Examples:
    | TestId | Route | RouteCard | Reason | IssueQty |
    | Test0051  | RT56Y21 |RT56Y23 | Replace Component | 500 |





 
@smoke1
Scenario Outline: Component Issue Transaction with Serialized Component Route Card having issue qty not equal to required qty.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as Serialized.
When  Enter the Serialized Component RouteCard <RouteCard> input in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Issue Difference Reason is required." should come as error.

Examples:
    | TestId | Route | RouteCard | Reason |
    | Test0051  | BCGF227 |BCGF228 | Stock Controlled |


    @smoke1
    Scenario Outline: Component Issue Transaction with Route being in Hold.

Given Go to Component Issue screen.
When Enter the invalid <Route> for details in Component Issue screen.
Then "is in Hold State." should come as validation error in Component Issue screen.

Examples:
    | TestId | Route | 
    | Test0051  | RSDY6544445R |


    @smoke1
    Scenario Outline: Component Issue Transaction with Route being in close state.

Given Go to Component Issue screen.
When Enter the invalid <Route> for details in Component Issue screen.
Then "is in Closed state." should come as validation error in Component Issue screen.

Examples:
    | TestId | Route | 
    | Test0051  | 556DDS |

    @smoke1
    Scenario Outline: Component Issue Transaction with Bulk Component Route Card with issue qty more than the component route qty.

Given Go to Component Issue screen.
When Scan the <Route> for details in Component Issue screen.
When Select the row in the grid with Issue Control as bulk.
When  Enter the Bulk Component RouteCard <RouteCard> input in the Component Issue screen.
When Enter the Issue Qty <IssueQty> in Component Issue screen.
When Click on the Issue Difference Reason <Reason> in in the Component Issue screen.
When Click on submit button in the Component Issue screen.
Then "Exceeds its Current Qty." should come as error in the Component Issue Screen.

Examples:
    | TestId | Route | RouteCard | IssueQty| Reason |
    | Test005  |RSDEW1234 | RSDEW2345 | 940| Qty |





