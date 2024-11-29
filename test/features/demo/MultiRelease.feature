Feature: Multi Release Route Card Transaction.

    Feature Description: Feature to hold Route Card.


         @smoke1
    Scenario Outline: Run Multi Release Transaction.

        Given Go to the Multi Release transaction screen.
        When In the multi release screen Scan the multiple <Routes> for details.
        Then In the multi release screen All the scanned route cards <Routes> should display in grid.
        Examples:
            | TestId | Routes         | MultiReleaseReason |
            | TS_001 | PTGF311,PTGF312 | Engineering        |

   

    @smoke1
    Scenario Outline: Run Multi Release Transaction.

        Given Go to the Multi Release transaction screen.
        When In the multi release screen Scan the multiple <Routes> for details.
        Then In the multi release screen All the scanned route cards <Routes> should display in grid.
        When  Click on the Multi Release Reason <MultiReleaseReason> to multi release the routes.
        When Click on the submit button in the multi release transaction screen.
        Then  "released successfully" should confirm the multi release transaction.
        Examples:
            | TestId | Routes   | MultiReleaseReason |
            | TS_001 | PTGF311,PTGF312 | Engineering |

    
    @smoke1
    Scenario Outline: Run Multi Release Transaction without selecting Release Reason.

        Given Go to the Multi Release transaction screen.
        When In the multi release screen Scan the multiple <Routes> for details.
        When Click on the submit button in the multi release transaction screen.
        Then  "Release Reason is required" text should come up in the Multi Release screen.
        Examples:
            | TestId | Routes | MultiReleaseReason |
            | TS_001 | TTTR | Engineering |


        
