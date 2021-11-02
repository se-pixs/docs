Feature: Upload image successfully?
  User wants to upload image to the server.

  Scenario: Image has PNG file format
    Given image is in format <format>
    When user drags image in into input field
    Then user should see a "progress bar"
    
    Examples: Image format
      | format |
      | PNG    |
      | JPEG   |
      | TIFF   |
      | SVG    |
