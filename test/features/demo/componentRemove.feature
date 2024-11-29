Feature: Component Remove Transaction.

    Feature Description: Feature to do Component Issue Transaction.

@smoke1
Scenario Outline: Component Remove Transaction with Bulk Component Route Card.

Given Go to Component Remove Transaction screen.
When Scan the <Route> for details in Component Remove screen.
When Select a row in the grid with Issue Control as bulk in Component Remove Screen.
When Click on the Removal Reason <Reason> in in the Component Remove screen.
When Click on the Remove Difference Reason <DifferenceReason> in in the Component Remove screen.
When Enter the Issue Qty <IssueQty> in the Component Remove screen.
When Click on submit button in the Component Remove screen.
Then "Component Removed" should confirm the Component Remove transaction.

Examples:
    | TestId | Route | Reason | IssueQty| DifferenceReason |
    | Test005  | RSMA112667 |Remove Component | 2| Qty Adjustment |


@smoke1
Scenario Outline: Component Remove from Active Route Card.Removal Qty Less than to Issued Qty With issue difference reason.

Given Go to Component Remove Transaction screen.
When Scan the <Route> for details in Component Remove screen.
When Select a row in the grid with Issue Control as bulk in Component Remove Screen.
When Click on the Removal Reason <Reason> in in the Component Remove screen.
When Click on the Remove Difference Reason <DifferenceReason> in in the Component Remove screen.
When Enter the Issue Qty <IssueQty> in the Component Remove screen.
When Click on submit button in the Component Remove screen.
Then "Component Removed" should confirm the Component Remove transaction.

Examples:
    | TestId | Route | Reason | IssueQty| DifferenceReason |
    | Test005  | RESWQ11 | Remove Component | 1| Qty Adjustment |


     @smoke1
    Scenario Outline: Removal Qty Less than to Issued Qty With out Removal difference reason(bulk).

Given Go to Component Remove Transaction screen.
When Scan the <Route> for details in Component Remove screen.
When Select a row in the grid with Issue Control as bulk in Component Remove Screen.
When Click on the Removal Reason <Reason> in in the Component Remove screen.
When Enter the Issue Qty <IssueQty> in the Component Remove screen.
When Click on submit button in the Component Remove screen.
Then "Remove Difference Reason is required." should come as validation error.

Examples:
    | TestId | Route | Reason | IssueQty| 
    | Test005  | RSDEWQ114 |Remove Component | 44| 


    @smoke1
    Scenario Outline:Component Remove from Active Route Card.Removal Qty equal to Issued From RouteCard Qty (Bulk)


Given Go to Component Remove Transaction screen.
When Scan the <Route> for details in Component Remove screen.
When Select a row in the grid with Issue Control as bulk in Component Remove Screen.
When Click on the Removal Reason <Reason> in in the Component Remove screen.
When Click on the Remove Difference Reason <DifferenceReason> in in the Component Remove screen.
When Enter the Issue Qty <IssueQty> in the Component Remove screen.
When Click on submit button in the Component Remove screen.
Then "Component Removed" should confirm the Component Remove transaction.

Examples:
    | TestId | Route | Reason | IssueQty| DifferenceReason |
    | Test005  | RSDESW112765 |Remove Component | 1| Qty Adjustment |


    @smoke1
    Scenario Outline:Component Remove from Active Route Card.Removal Qty More than Issued Qty(Bulk)


Given Go to Component Remove Transaction screen.
When Scan the <Route> for details in Component Remove screen.
When Select a row in the grid with Issue Control as bulk in Component Remove Screen.
When Click on the Removal Reason <Reason> in in the Component Remove screen.
When Click on the Remove Difference Reason <DifferenceReason> in in the Component Remove screen.
When Enter the Issue Qty <IssueQty> in the Component Remove screen.
When Click on submit button in the Component Remove screen.
Then "Removing more qty than issued is not allowed." should come as validation error.

Examples:
    | TestId | Route | Reason | IssueQty| DifferenceReason |
    | Test005  | RSFDCXEW12467 | Remove Component | 750| Qty Adjustment |




 
