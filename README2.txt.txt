Practice 12: Enhancing Your Deployment with Environment Variables
Student Name: Jacob Hawley
Platform Used: Render (Free Tier)

=== Code Modification ===
- Modified server.js to look for an environment variable named GREETING using `process.env.GREETING`.
- Set up a fallback message ('Hello from your deployed app!') if the environment variable is not defined locally.
- Updated the GET route at `/api/message` to return the `greeting` variable dynamically in the JSON response.

=== Environment Variable Configuration on Render ===
1. Logged into the Render dashboard and navigated to the Web Service.
2. Clicked on the "Environment" tab in the service menu.
3. Added a new environment variable:
   - Key: GREETING
   - Value: Hello from Render!
4. Saved the changes, which automatically triggered a fresh deployment of the application.

=== Issues Encountered & Resolution ===
- No issues encountered; setting the variable in Render's dashboard and redeploying applied the new JSON greeting successfully on the live URL.