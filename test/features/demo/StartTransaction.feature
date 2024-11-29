Feature: Start Transaction

    Feature Description:To illustrate Start Transaction

    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering all fields.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When Select <Product> in the product dropdown.
        When Select <ProcessFlow> in the Processflow dropdown.
        When Select <Customer> in the customer dropdown.
        When Select <Factory> in the factory dropdown.
        When Enter the UOM <UOM> field  in Route Start Transaction screen.
        When Enter the Duedate <dueDate> field  in Route Start Transaction screen.
        When Enter the ExpirationDate <expDate> field  in Route Start Transaction screen.
        When In the Route Start Transaction screen press on the submit button.
        Then "started successfully" message should  confirm the start transaction.
        Examples:
            | Test_Id  | Route | Qty | Department | Level | StartReason | ProductionOrder | Product  | Customer | Factory | ProcessFlow | UOM | dueDate             | expDate             |
            | TEST_001 | EMSNAMB | 6   | Production | UNIT  | Normal      | Jmeter_PO       | Wheels:A | Amogha S | Aveva   | Jmeter_PF:A | LOT | 26/12/2024 00:00:00 | 29/12/2024 00:00:00 |


    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering only required fields.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "started successfully" message should  confirm the start transaction.
        Examples:
            | Test_Id  | Route | Qty | Department | Level | StartReason | ProductionOrder | Factory |
            | TEST_002 | RSDGBRN | 6   | Production | UNIT  | Normal      | Jmeter_PO       | Aveva   |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by not entering Product,ProcessFlow or Production Order.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Processflow not configured to start RouteCard." message should come as error alert.
        Examples:
            | Test_Id  | Route    | Department | Level | StartReason | Factory |
            | TEST_003 | SARSM2276 | Production | UNIT  | Engineering | Aveva   |


    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering the production order.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Factory> in the factory dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "started successfully" message should  confirm the start transaction.
        Examples:
            | Test_Id  | Route        | Qty | Department | Level | StartReason | ProductionOrder | Factory |
            | TEST_004 | WAF47954364T5 | 6   | Production | UNIT  | Engineering | Jmeter_PO       | Aveva   |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering the production order not configured with the product.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <Factory> in the factory dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Product is not configured in selected Production Order." message should come as error.
        Examples:
            | Test_Id  | Route        | Qty | Department | Level | StartReason | ProductionOrder | Factory |
            | TEST_005 | WAF778765666 | 6   | Production | UNIT  | Engineering | PRODUCTIONSUR | Aveva |


    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering already existing routecard.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When Select <Product> in the product dropdown.
        When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "RouteCard already exists." message should  come as error.
        Examples:
            | Test_Id  | Route | Department    | Level | StartReason | ProductionOrder | Product  | ProcessFlow | Factory |
            | TEST_006 | rtee  | manufacturing | LOT   | Engineering | Jmeter_PO       | Wheels:A | Jmeter_PF:A | Aveva   |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction by selecting product.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
          When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "started successfully" message should  confirm the start transaction.
        When  Click on the Move menu in the sidebar.
        Then Verify that workflow for the <Route> is in <First> step of the workflow.
        Examples:
            | Test_Id  | Route | Department | Level | StartReason | Product  | First | Factory |
            | TEST_007 | DWEJON  | Jmeter     | UNIT  | Engineering | PROD_SUR_1 | step2 | Aveva |

    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction by selecting product where process flow not configured with product

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
          When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Processflow not configured to start RouteCard." message should come as error.
        Examples:
            | Test_Id  | Route            | Department | Level | StartReason | Product  | Factory |
            | TEST_008 | DFGTRESTRE5TCY57 | Production | UNIT  | Engineering | Wheels:A | Aveva |


    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction by creating wafers not configured for Numbering rule.

        Given Navigate to the Start Transaction screen.
        When Click on the numbering rule checkbox in the route start screen.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
          When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Numbering Rule is not configured." message should come as error.
        Examples:
            | Test_Id  | Department    | Level | StartReason | Product  | Factory |
            | TEST_009 | manufacturing | UNIT  | Engineering | Wheels:A | Aveva |




    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction by creating wafers configured for Numbering rule.

        Given Navigate to the Start Transaction screen.
        When Click on the numbering rule checkbox in the route start screen.
        Then The input routecard should be disabled.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
       When Select <Product> in the product dropdown.
      When Select <ProcessFlow> in the Processflow dropdown.
        When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then The success message should show autogenerated lot.
        Examples:
            | Test_Id  | Department    | Level | StartReason | Product | Factory | ProcessFlow |
            | TEST_010 | manufacturing | EACH  | Engineering | PROD_AUTO  | Aveva | Jmeter_PF:A |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction by selecting inactive product.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
        When Select <Factory> in the factory dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Please select active Product" message should come as error.
        Examples:
            | Test_Id  | Route                  | Department | Level | StartReason | Product | Factory |
            | TEST_011 | tttt555566786986327986 | Technical  | UNIT  | Engineering | CAR:A   | Aveva   |




   @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering completed production order.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
          When Select <Factory> in the factory dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "is Completed.Please select valid Production Order" message should come as error.
        Examples:
            | Test_Id  | Route    | Qty | Department | Level | StartReason | ProductionOrder | Factory |
            | TEST_012 | tttes554 | 100 | Production | UNIT  | Engineering | PRDAUTO | Aveva |


     
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering cancelled production order.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "is Cancelled. Please select valid Production Order" should come as error popup.
        Examples:
            | Test_Id  | Route      | Qty | Department   | Level           | StartReason | ProductionOrder |
            | TEST_013 | 12709BCYT5 | 5   | Department 1 | Quality Control | Engineering | PACK-004        |


    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering inactive process flow.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <Product> in the product dropdown.
          When Select <Factory> in the factory dropdown.
        When Select <ProcessFlow> in the Processflow dropdown.
        When In the Route Start Transaction screen press on the submit button.
        Then "Please select active Processflow" should come as error popup.
        Examples:
            | Test_Id  | Route                 | Qty | Department | Level | StartReason | Product  | ProcessFlow     | Factory |
            | TEST_014 | 1270WYU | 5   | Production | UNIT  | Normal      | Jmeter:A | PROC-FLOW:A | Aveva |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering invalid qty.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Enter <Qty> routecard in the qty input control.
        Then The Invalid QTy which is in special charcaters should not be reflected in the input textbox.
        Examples:
            | Test_Id  | Route        | Qty |
            | TEST_015 | 123718CEATGD | -as |

    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering dueDate lesser than the current date.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When Select <Factory> in the factory dropdown.
        When Enter the Duedate <dueDate> field  in Route Start Transaction screen.
        When Enter the ExpirationDate <expDate> field  in Route Start Transaction screen.
        When In the Route Start Transaction screen press on the submit button.
        Then "Due Date cannot be greater than Expiration Date" message should come as error.
        Examples:
            | Test_Id  | Route                  | Department    | Level | StartReason | ProductionOrder | dueDate             | expDate             | Factory |
            | TEST_016 | 126UCC542 | manufacturing | UNIT  | Normal      | Jmeter_PO       | 08/12/2024 00:00:00 | 05/12/2024 00:00:00 | Aveva   |



    @smoke1
    Scenario Outline: Perform Start RouteCard Transaction sucessfully by entering Expiration Date lesser than the current date.

        Given Navigate to the Start Transaction screen.
        When Enter <Route> routecard in the route card name input.
        When Select <Department> in the Department dropdown.
        When Select <Level> in the level dropdown.
        When Select <StartReason> in the StartReason dropdown.
        When Select <ProductionOrder> in the production order dropdown.
        When Select <Factory> in the factory dropdown.
        When Enter the ExpirationDate <expDate> field  in Route Start Transaction screen.
        When In the Route Start Transaction screen press on the submit button.
        Then "Invalid Expiration Date." message should come as error.
        Examples:
            | Test_Id  | Route      | Department    | Level | StartReason | ProductionOrder | expDate             | Factory |
            | TEST_017 | 128976ASDF | manufacturing | UNIT  | Normal      | Jmeter_PO       | 01/09/2024 00:00:00 | Aveva   |



