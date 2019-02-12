# Real-time multiplayer Conway's Game of Life

### Description

UI app for Conway's Game of Life real-time multiplayer implementation.

Based on [Create-React-App](https://facebook.github.io/create-react-app/)

Complements [Web-socket server app](https://github.com/isSerge/game-of-life-websocket-server)

Deployed on [Heroku](https://game-of-life-ui.herokuapp.com/)

### Start locally

-   `git clone git@github.com:isSerge/game-of-life-ui.git`
-   `cd game-of-life-ui`
-   `yarn`
-   `yarn start`
-   visit `http://localhost:3000`

Note: This app requires backend server to run. You can clone it from [GitHub](https://github.com/isSerge/game-of-life-websocket-server) and launch locally or use the one deployed on Heroku, providing `REACT_APP_WEB_SOCKET=wss://game-of-life-web-socket.herokuapp.com/` environmental variable

### Scripts

Note: Commands should run inside app folder

-   `yarn start` - start dev server
-   `yarn test` - run tests
-   `yarn build` - create production build

For more details check Create-React-App [docs](https://facebook.github.io/create-react-app/docs/getting-started)

### Deployment

[Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack) was used to deploy app to Heroku. Check [these steps](https://github.com/mars/create-react-app-buildpack#quick-start) for more details

### Technical choices and trade-offs

-   As mentioned above the app is built using [Create-React-App](https://facebook.github.io/create-react-app/), which is the most convinient way to start React app and at the same time can be later extended. I also utilized [React Hooks](https://reactjs.org/docs/hooks-intro.html), which were recently introduced.
-   For styling I used [Styled components](http://styled-components.com/). However I didn't want to focus on styles too much as it would require more time, so current implementation is quite simple.
-   Most of the app logic is located in App.js, which is a smart (stateful) component. All the rest components are dumb - they just render data received as props.
-   Some very basic testing was implemented, in order to fully cover functionality with unit tests it would require mocking web-socket connection

UX improvements that could be done in the future:

-   add more patterns
-   animate patterns
-   if particular pattern is chosen - show pattern dots when hovering on board
-   show list of online users, including their colors
-   send notification if other user disconnects
-   send notification if new user connects
-   game starts when all users click 'start' (currently user single click starts the game )
-   add night mode
