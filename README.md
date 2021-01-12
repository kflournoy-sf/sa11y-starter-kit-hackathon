# sa11y-starter-kit-hackathon

1. Set up your environment. Follow the steps in the [E-Bikes Sample Project](https://github.com/trailheadapps/ebikes-lwc/blob/master/README.md), but use this repository instead of the e-bikes repository.

2. Verify that you are able to run local unit tests. All tests should pass by default.

    ```
    npm run test:unit
    ```

3. Check out the "sa11y-hackathon-walkthrough" branch. Run tests again, and you will see Sa11y test failures for [insert items here].

4. Complete challenge tasks below. When you want to deploy your changes, remember to use this command:
    ```
    sfdx force:source:deploy -p force-app
    ```

-   Fix all current Sa11y failures until you have all tests passing.

    -   Missing alt text in [insert items here]
    -   Incorrect header level in [insert items here]
    -   Invalid aria atribute in [insert items here]

    Helpful hint: run this command to have your tests automatically update as you save files:

    ```
    npm run test:unit
    ```

-   Test your application with a screen reader to verify your changes [link to tutorials]

-   Add a Sa11y test for [something here]

5. Check out the "sa11y-hackathon-walkthrough-answers" branch for suggested solutions to fix Sally failures.
