Feature: Route Mainteance Transaction.

    Feature Description:To illustrate Route Mainteance Transaction.
    @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Select the Department <Department> field in the Maintenance transaction screen.
        When Select the Level <Level> field  in the the Maintenance transaction screen.
        When Select the Start Reason <StartReason> field  in the the Maintenance transaction screen.
        When Select the Production Order <ProductionOrder> field  in the the Maintenance transaction screen.
        When Select the Product <Product> field  in the the Maintenance transaction screen.
        When Select the Factory <Factory> field  in the the Maintenance transaction screen.
        When Select the Duedate <dueDate> field  in the the Maintenance transaction screen.
        When Select the ExpirationDate <expDate> field  in the the Maintenance transaction screen.
        When Select the UOM <UOM> field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then "RouteCard Maintenance successful" message should  confirming the route maintenance transaction.
        Examples:
            | Route | Department | Level | StartReason | ProductionOrder | Product | Factory | dueDate             | expDate             | UOM     |
            | 1245 | Production | UNIT  | Critical  | Jmeter_PO | Wheels:A  | Jmeter  | 29/11/2024 00:00:00 | 30/12/2024 00:00:00 | EACH |




    @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction by not entering mandatory fields.

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Clear the Department field in the Maintenance transaction screen.
        When  Clear the Level field  in the the Maintenance transaction screen.
        When  Clear the Start Reason field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then the following warning messages should be displayed:
            | Department is required   |
            | Level is required        |
            | Start Reason is required |
        Examples:
            | Route      | Department   | Level    | StartReason | ProductionOrder | Product  | Factory  |
            | YTNBVV1111 | manufacturing | UNIT | Engineering  | Manufacuturing_Order | Wheels:A | Aveva |


     @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction for hold route cards.

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Select the Department <Department> field in the Maintenance transaction screen.
        When Select the Level <Level> field  in the the Maintenance transaction screen.
        When Select the Start Reason <StartReason> field  in the the Maintenance transaction screen.
        When Select the Production Order <ProductionOrder> field  in the the Maintenance transaction screen.
        When Select the Product <Product> field  in the the Maintenance transaction screen.
        When Select the Factory <Factory> field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then "RouteCard Maintenance successful" message should  confirming the route maintenance transaction.
        Examples:
            | Route      | Department   | Level    | StartReason | ProductionOrder | Product  | Factory  |
            | TRWS4 | Development | UNIT | Critical  | Jmeter_PO | CAR:A | Aveva |


    @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction for closed route cards.

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Select the Department <Department> field in the Maintenance transaction screen.
        When Select the Level <Level> field  in the the Maintenance transaction screen.
        When Select the Start Reason <StartReason> field  in the the Maintenance transaction screen.
        When Select the Production Order <ProductionOrder> field  in the the Maintenance transaction screen.
        When Select the Product <Product> field  in the the Maintenance transaction screen.
        When Select the Factory <Factory> field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then "RouteCard Maintenance successful" message should  confirming the route maintenance transaction.
        Examples:
            | Route    | Department   | Level    | StartReason | ProductionOrder | Product  | Factory  |
            | CTR_2024-07-31 12:18:06.532 | Development | LOT | Critical  | Manufacuturing_Order| Wheels:A  | Aveva |



    @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction while editing the Due date field.

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Select the Duedate <dueDate> field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then "RouteCard Maintenance successful" message should  confirming the route maintenance transaction.

        Examples:
            | Route        | dueDate  |
            | reswaa | 30/11/2024 00:00:00 |

  

   @smoke1
    Scenario Outline: Perform Route Card Mainteance Transaction while editing the Expiration date field.

        Given Navigate to the RouteCard Maintenance Transaction screen.
        When Scan the <Route> for details in the Maintenance Transaction screen.
        When Select the ExpirationDate <expDate> field  in the the Maintenance transaction screen.
        When Click on the submit button in Route Maintenance Transaction screen.
        Then "RouteCard Maintenance successful" message should  confirming the route maintenance transaction.

        Examples:
            | Route        | expDate             |
            | CT1R33008241_00000001 | 13/12/2024 00:00:00 |


