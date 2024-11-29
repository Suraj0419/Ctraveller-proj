Feature: Create routecard for move transaction.

    Feature Description:To illustrate move transaction for a created routecards.
    Scenario Outline: Perform  Create routecard for move transaction.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
        When Select <ProcessFlow> in the ProcessFlow dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When In the Route Start Transaction screen press on the submit button.
        When  Click on the Move menu in the sidebar.
        When Scan the <Route> in the move screen.
        When Click on submit button in the Move screen.
        Then "moved to" should confirm the transaction.

        Examples:
            | Route | Department | Level | StartReason | ProductionOrder | Product  |ProcessFlow|
            | ROUTE_001784 | Department 3 | Tracking | Validation  | FAB-003 | F48193-1:A | 50000335:B|