Feature: Slice original image into 1080x1080 images successfull?
    User wants to split up an panorame image into smaller images with an resolution of 1080x1080 pixels.

    Scenario: Images has successfully been converted to low poly art.
        Given image has successfully been converted to low poly art
        When user chooses action convert to low poly art
        Then user should see a "success message"

     Scenario: Images has not successfully been converted to low poly art.
        Given image has not successfully been converted to low poly art
        When user chooses action convert to low poly art
        Then user should see a "warning message"

