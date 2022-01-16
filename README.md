# MERN-CRUD application

This is a pre-assignment project for the Netum Summer Trainee 2022 program. It is a full-stack web app, built on React, TypeScript, MongoDB, Express and Node.js . The app communicates with a [MongoDB Atlas database](https://www.mongodb.com/) to retrieve, edit and delete entries within a table.

## How to Install and Run the Project

Make sure you have [Node.js](https://nodejs.org/en/) and installed, any newer version should work fine.

1. Clone this repository

```bash
git clone https://github.com/Alzuu/mern-crud.git
```

2. Go to repository and install dependencies

```bash
cd mern-crud
npm install
npm --prefix client install
npm --prefix server install
```

3. Add .env file with credentials in the server directory (DB_USER, DB_PASS, DB_NAME)

```bash
touch server/.env
```

4. Once credentials have been added to .env file, go to the root directory of the project to build and run the application.

```bash
npm start
```

5. Open application on [localhost:3000](http://localhost:3000/)
## License

[MIT](https://choosealicense.com/licenses/mit/)
