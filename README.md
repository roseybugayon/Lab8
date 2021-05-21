# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1 (A?)

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No because unit tests cannot test how individual components interact with each other. The messaging feature requires testing of both the writing of a message and whether or not the other person received the message. A single unit test could not test the interaction between these two functions.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   Yes, because this is just one simple function that tests whether the user could or could not type more for the message.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   If we set it to true, it would be a headless browser meaning it would not load any UI so it would not actually render the web page environment when running the tests. It would just output the results.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   The beforeAll callback could possibly use the "await page.click('header > img')" to click on the settings icon before every test case.
