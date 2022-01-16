# MERN-CRUD application

This is a pre-assignment project for the Netum Summer Trainee 2022 program. It is a full-stack web app, built on React, TypeScript and Node.js. The app communicates with a [MongoDB Atlas database](https://www.mongodb.com/) to retrieve, edit and delete entries within a table.

## How to Install and Run the Project

Make sure you have [Node.js](https://nodejs.org/en/) and installed, any newer version should work fine.

1. Clone this repository

```bash
git clone https://github.com/Alzuu/mern-crud.git
```

2. Go to repository and install dependencies

```bash
cd mern-crud
npm --prefix client install
npm --prefix server install
```

3. In the server directory, you can run:

#### `npm start`

Starts server in production mode.\
Server runs on [http://localhost:3001](http://localhost:3001).

#### `npm run dev`

Runs the server in the development mode.\
Server runs on [http://localhost:3001](http://localhost:3001).

The server will restart when you make changes.

4. In the client directory, you can run:

#### `npm start`

Starts client in production mode.\
Make sure you have an npm package called [**serve**](https://www.npmjs.com/package/serve) installed in order to serve the client once it has finished building.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run dev`

Runs the client in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
