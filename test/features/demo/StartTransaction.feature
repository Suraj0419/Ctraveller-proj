Feature: Start Transaction

    Feature Description:To illustrate Start Transaction
    
    Scenario Outline: Perform Start RouteCard Transaction sucessfully for each Product

    Given Navigate to the Start Transaction screen.
    When Fill out the Start Trtansaction screen for <Product> with valid data and submit it.
    Then I should see a success message confirming the transaction.
    Examples:
        | Test_Id | Product |
        | TEST_001  | ProductA:A |
         | TEST_002  | ProductB:B |
         | TEST_003  | ProductD:B  |
  


   