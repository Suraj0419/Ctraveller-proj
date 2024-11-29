Feature: Data Collection Transaction.

    Feature Description: Feature to do Data Collection.



    @smoke1
    Scenario Outline: Run Data Collection Transaction while entering comments.

        Given Go to Data Collection Transaction screen.
        When Scan the <Route> for Data Collection details in the screen.
        When Enter all the required dimensions for data collection.
        When  Enter Comment <Comment> in the data collection screen.
        When Click on submit button in the Data Collection screen.
        Then "Data Collected successfully" should confirm the Data Collection transaction.

        Examples:
            | TestId | Route       | Length | Breadth | Weight | Height | Comment |
            | TS_001 | dmat6782126 | 15     | 5       | 12.5   | 5      | cmd1    |


    @smoke1
    Scenario Outline: Run Data Collection Transaction without entering mandatory fields.

        Given Go to Data Collection Transaction screen.
        When Scan the <Route> for Data Collection details in the screen.
        When  Enter Comment <Comment> in the data collection screen.
        When Click on submit button in the Data Collection screen.
        Then "is required." should be there as validation error alert in Data Collection screen.

        Examples:
            | TestId | Route    | Comment |
            | TS_001 | ER9767544 | cmd55   |


    @smoke1
    Scenario Outline: Run Data Collection Transaction while entering comments without selecting isValid Checkbox.

        Given Go to Data Collection Transaction screen.
        When Scan the <Route> for Data Collection details in the screen.
        When Fill in the dimensions without clicking isValid checkbox.
        When  Enter Comment <Comment> in the data collection screen.
        When Click on submit button in the Data Collection screen.
        Then "Data Collected successfully" should confirm the Data Collection transaction.

        Examples:
            | TestId | Route   | Length | Breadth | Weight | Height | Comment |
            | TS_001 | ER985477 | 100    | 50      | 20     | 150    | cmd6    |


    @smoke1
    Scenario Outline: Run Data Collection Transaction without entering comments.

        Given Go to Data Collection Transaction screen.
        When Scan the <Route> for Data Collection details in the screen.
        When Enter all the required dimensions for data collection.
        When Click on submit button in the Data Collection screen.
        Then "Data Collected successfully" should confirm the Data Collection transaction.

        Examples:
            | TestId | Route | Length | Breadth | Weight | Height |
            | TS_001 | WER433 | 100    | 50      | 20     | 150    |


    @smoke1
    Scenario Outline: Run Data Collection Transaction for routecards having no data collection configured.

        Given Go to Data Collection Transaction screen.
        When Enter the non configured Data Collection <Route> for Data Collection details in the screen.
        Then "Data Collection is not Configured" validation alert should come up.

        Examples:
            | TestId | Route    |
            | TS_001 | DATACOLL1 |