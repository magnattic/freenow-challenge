# FREE NOW Frontend Test 🖼

Welcome to the FREE NOW Frontend take-home challenge. The aim of this test is to show off your skills!

What do we want to see:

- Clean, elegant, and DRY solutions.
- A maintainable, extendable, and reliable app. (tests, separation of concerns/layers, error and loading states)
- Attention to the details.
- Documentation of your decisions and how to run your app.

Long story short, it should be like a real-world project!

## Task Description 🤓

The app should contain the following features:

- A **map** and a **table**, both showing the vehicles from the FREE NOW and SHARE NOW lists. You can load the vehicles from the server that you'll start (info on starting it in the "Server Setup" section). The vehicles in the table and in the map should be the same.
- **Sort** the results by “Licence plate”
- **Paginate** the results from the APIs to show just up to 10 vehicles in the table and in the map
- If we click on a row in the table, we should **highlight** the corresponding marker in the map
- If we click on a marker on the map, we should **highlight** the corresponding row in the table

The table should display the following information about each vehicle:
- **Coordinates**: “12.234543 52.834729”
- **Licence plate**: “HHZ 234 1259”
- **Address**: “Kroogblöcke 32, 22119 Hamburg”
- **Type**: “FREE NOW” | “SHARE NOW”
- **State**: “Active” | “Inactive”
- **Conditions**: “Bad conditions” | “Good conditions” & “Low fuel” | “Medium fuel” | “Full fuel”

In case of missing information, you can render an empty state

We’ve made a sample [layout](https://www.figma.com/file/qhCx4LIedUMYjmSd2MAulk/React-applicant-test-mock?node-id=0%3A1) using our design system called Wave, but feel free to come up with your own custom solution, as long as it meets the requirements.

## Tech stack 🛠

You can use Vite or any other maintained CLI to scaffold your React application.
So that you get the sense of how we work in FREENOW and also one library that you'd be using daily we suggest using our [Design System: Wave](https://wave.free-now.com/), to help you build your layout!

At FREE NOW, we use Typescript for type-checking, and React testing library and Vitest for the tests, but as long as you keep the codebase scalable and maintainable, you can pick the technologies you feel more comfortable with.

```bash
npm create vite@latest free-now-test-frontend -- --template react-swc-ts
cd free-now-test-frontend
npm install
npm run dev
```

## Server Setup ⚙️

Run `npm install` in the `Server` folder to install the server dependencies.
Run `npm start` in the `Server` folder to start the server.
You should see something like: `Listening on Port: 5001`
Now you can start building your application in the `FE` folder.
API Routes:

#### Get a list of all FREE NOW vehicles:

/free-now/vehicles

#### Get a list of all SHARE NOW vehicles:

/share-now/vehicles

For example, to get the SHARE NOW vehicles, you can call: http://localhost:5001/share-now/vehicles

## How to send the solution 📨

What do you need to do when you are done?

- When you’ve finished your work, please delete the **“node_modules”** folders.
- We will download the files and run **`npm i`** in the Server folder and follow your guidelines for the Frontend folder.
- With all the dependencies installed we will run the test to see if all of the pass
- We will run the server and the application with the **`npm start`** command and we will check if all requirements have been implemented
- At last, we will go over your amazing code and see what you were able to do
- Please send us the result as a .zip-file to **[career@free-now.com](mailto:career@free-now.com)**.
