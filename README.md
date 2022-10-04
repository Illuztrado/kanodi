# KanoDi

Check prices of rice in wet markets & brick-and-mortar shops in your community. Post prices to let other folks know where to buy rice.

**Link to project:** https://kanodi.herokuapp.com/


![kanodi](https://user-images.githubusercontent.com/68641417/193819821-ca38ddf1-a491-42ea-b9d4-c9bc969f5b5c.gif)

## How It's Made:

### Client
**Tech used: EJS, CSS with Tailwind, JavaScript**

Why was this stack chosen?

For the app's layout, EJS works well for building a front-end web app quickly because of its ease of use. CSS' Tailwind library also works well for incorporating responsive design to an app quickly. For user interactions with the app and the server-side code, JavaScript was used for consistency in code syntax.

### Server + Database
**Tech used: Node.JS, Express.JS, MongoDB, Mongoose**

The app's server-side code runs on the Node.JS environment. Requests made the client are handled by Express.JS. Data created by the user are handled by Mongoose and stored in a MongoDB database.

### How to run the application locally:

1. Install Node.JS dependencies/packages via the terminal
 ```
  npm install [package-name]
  ```
  Dependencies/packages: express, mongodb, dotenv, ejs, nodemon
  
2. Create a .env file. Add a port and your database URI in the file.
```
PORT = [your port, example: 3000]
DB_STRING: [your database URI]
```

Future Optimizations:
1. For production, CSS' Tailwind library should be installed to avoid unexpected bugs in the app's layout
2. If other types of goods will be added to the app, the data presentation in the todos.ejs page should be converted to a table format for maintainability
3. Add user authentication for logins and sign-ups as well as for posting and updating store price
4. Add user-specific data labelling

Lessons Learned:

CSS' Tailwind library is a useful tool for building responsive layouts quickly. It reduces the pain point of having to build a layout from scratch.
