# sa11y-starter-kit-hackathon

This is a sample application that demonstrates how to build applications with Lightning Web Components and test with the [Sa11y automation library](https://github.com/salesforce/sa11y).

1. Set up your environment. Follow the steps in the [E-Bikes Sample Project](https://github.com/trailheadapps/ebikes-lwc/blob/master/README.md), but use this repository instead of the e-bikes repository.

2. Verify that you are able to run local unit tests. All tests should pass by default.

    ```
    npm run test:unit
    ```

3. Check out the "sa11y-hackathon-walkthrough" branch. Run tests again, and you will see a number of Sa11y test failures.

4. Complete the challenge tasks below. When you want to deploy your changes, remember to use this command:
    ```
    sfdx force:source:deploy -p force-app
    ```

-   Fix all current Sa11y failures until you have all tests passing.

    -   Missing alt text in [insert items here]
    -   Incorrect header level in [insert items here]
    -   Invalid aria atribute in [insert items here]

    Helpful hint: use this command to have your tests automatically run as you save files, so that you can see which tests are still failing:

    ```
    npm run test:unit:watch
    ```

5. Add a new Sa11y test

    1. Add new HTML to a feature, with an accessibility error
        - Suggestion:
    2. Add a new Sa11y test to your application
    3. Verify that your new Sa11y test produces a failure for your inaccessible code
    4. Fix the error and verify that your new Sa11y test now runs without an error

6. Test your application with a screen reader to verify that all of your changes will also work for screen reader users.

    - [VoiceOver Tutorial](https://support.apple.com/guide/voiceover/welcome/10)
    - [NVDA Tutorial](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-videos/learn-nvda)
    - [JAWS Tutorial](https://www.freedomscientific.com/training/jaws/getting-started/)

7. Check out the "sa11y-hackathon-walkthrough-answers" branch for suggested solutions to fix Sally failures.

8. Now it's time to add Sa11y to your own projects, and share what you've learned with your team!

<div style="text-align: center; margin-top: 1rem;">
    <img src="https://miro.medium.com/max/752/1*pWxFv3VdPcLEFgPoZ5Nnrw.jpeg" alt="A man pointing at the camera with flames behind him, and meme text that reads 'Inaccessible Code: Check-In Gets Bounced" />
</div>
