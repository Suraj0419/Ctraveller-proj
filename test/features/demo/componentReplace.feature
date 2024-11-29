Feature: Component Replace Transaction.

    Feature Description: Feature to do Component Replace Transaction.

@smoke1
Scenario Outline: Component Replace Transaction with Bulk Component Route Card.

Given Go to Component Replace screen.
When Scan the <Route> for details in Component Replace screen.
When Select the row in the grid with Issue Control as bulk in Component Replace screen.
When  Enter the Bulk Component RouteCard <RouteCard> input in the Component Replace screen.
When Enter the Replace Qty <ReplaceQty> in Component Replace screen.
When Click on the Replace Reason <Reason> in the Component Replace screen.
When Click on submit button in the Component Replace screen.
Then "Component Replace Completed" should confirm the Component Replace transaction.

Examples:
    | TestId | Route | RouteCard | ReplaceQty| Reason |
    | Test0051  | GFCV111 |GFCV114 | 300| Physical Damage |

    @smoke1
    Scenario Outline: When Main RouteCard Product does not match with the Selected Material RouteCard Product.

Given Go to Component Replace screen.
When Scan the <Route> for details in Component Replace screen.
When Select the row in the grid with Issue Control as bulk in Component Replace screen.
When  Enter the Bulk Component RouteCard <RouteCard> input in the Component Replace screen.
Then "entered does not match the selected Material requirement " should come as validation error.

Examples:
    | TestId | Route | RouteCard | 
    | Test0051  | RSDE1123 |RSWEEQ | 



    @smoke1
    Scenario Outline: When Component RouteCard Product match with the Material Product
     but this Material Product match with the Substitute Product of Component RouteCard Product
    

Given Go to Component Replace screen.
When Scan the <Route> for details in Component Replace screen.
When Select the row in the grid with Issue Control as bulk in Component Replace screen.
When  Enter the Bulk Component RouteCard <RouteCard> input in the Component Replace screen.
When Enter the Replace Qty <ReplaceQty> in Component Replace screen.
When Click on the Replace Reason <Reason> in the Component Replace screen.
When Click on submit button in the Component Replace screen.
Then "Component Replace Completed" should confirm the Component Replace transaction.


Examples:
     | TestId | Route | RouteCard | ReplaceQty| Reason |
    | Test0051  | BCG1255   |WER33216 | 2000| Physical Damage |



    