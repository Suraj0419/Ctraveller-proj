Feature: Verify Changes in Database.

    Feature Description: Feature to verify the changes in Database.
@smoke
Scenario Outline: Run Database change transaction.

Given Perfom RouteCard Start Transaction with <Route>,<Level>,<StartReason>,<Department>,<Product>,<ProcessFlow>.
Then Transaction should be reflected in the database for the <Route>.

Examples:
            | Route | Department | Level | StartReason | Product  |ProcessFlow|
            | ROUTE_001748765 | Production | LOT | Normal   | Wheels:A | Jmeter_PF:A|