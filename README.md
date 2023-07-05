# googleSignIn-REACT
After March 31 2023 google depreacated the old google signin method- so this one is the latest you can simply clone this repo to add "SignIn with google" functionality in your websites. In this react code we are generating the JWT by google and sending it to our backend, so that all the things can be handled there.

In your nodeJs backend you can decode jwt uisng this code.
```
const { OAuth2Client } = require("google-auth-library");
const clientId = "your_clint_id";
const client = new OAuth2Client(clientId);

async function decodeGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (error) {
    console.error('Error decoding Google token:', error);
    throw error;
  }
}
```
