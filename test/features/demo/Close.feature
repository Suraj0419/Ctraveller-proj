Feature: Close Route Card Transaction

    Feature Description: Feature to close transaction

    @smoke1
    Scenario Outline: Run Close Transaction

        Given Go to close transaction screen.
        When Scan the <Route> for details in the Close screen.
        When Click on the submit button in the Close screen.
        Then "Closed successfully" should confirm the close transaction.

        Examples:
            | TestId | Route      |
            | Test05 | RSV111 |


   @smoke1
    Scenario Outline: Run Close Transaction for close routecards,

        Given Go to close transaction screen.
        When Enter the closed route <Route> in the close transaction screen.
        Then "is already in Closed state." should come as error.

        Examples:
            | TestId | Route |
            | Test05 | 300716 |


     @smoke1
    Scenario Outline: Run Close Transaction for child routecard.

        Given  Go to close transaction screen.
        When Scan the <Route> for details in the Close screen.
        When Click on the submit button in the Close screen.
        Then "Closed successfully" should confirm the close transaction.
        When Enter the parent Route <ParentRoute> in the close screen.
        Then Status for the ParentRoute route should come as Active indicating parent route is Active.

        Examples:
            | No.  | Route | ParentRoute|
            | TS01 | TEST_CHILD2 | ES32111 |


    @smoke1
    Scenario Outline: Run Close Transaction for parent routecard.

        Given  Go to close transaction screen.
        When Scan the <Route> for details in the Close screen.
        When Click on the submit button in the Close screen.
        Then  Verify whether the child routes <ChildRoutes> are closed or not.

        Examples:
            | No.  | Route | ChildRoutes |
            | TS01 | PT110 | PT111,PT112 |