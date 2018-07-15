# eventbrite-clone
Simple app that resembles the basic functionality of eventbrite.com.
Functionalities: sign up/sign in, events feed, search bar with different search criterias for the events feed, favorites events page/favorites events can be stored to user account.

For now the client/server side are separated in different folders.
To start the project:
```bash
1: run npm install in the two root folders(/client and /server)
```

```bash
2: npm run dev in the /server folder
```

## Client side
Created with React and Redux using static type checking with TypeScript.
Events feed and functionality are implemented using the 3rd party ticketmaster API(https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

## Server side
Node, Express and MongoDB for database.
The authentication is made with passport's JWT strategy, Google Oauth2 passport strategy is used for the sign in with Google functionality. It also uses bcrypt for storing hashed passwords in the MongoDB database.