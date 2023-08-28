# Movies App

This is a movies app created with TypeScript, Express, and MySQL. The app allows users to view, add, edit, and delete movies.

## Features

- Authentication: Users can register using their email and password, and login using JSON Web Tokens (JWT).
- Authorization: Users can only perform CRUD operations on movies if they are logged in and have the appropriate permissions.
- Viewing Movies: Users can view all the available movies.
- Adding Movies: Admin users can add new movies to the database.
- Editing Movies: Admin users can edit existing movies in the database.
- Deleting Movies: Admin users can delete movies from the database.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file and set the following environment variables for production mode:
   - `DB_NAME_PROD`: The name of the database to use.
   - `DB_USER_PROD`: The username to use for the database connection.
   - `DB_PASS_PROD`: The password to use for the database connection.
   - `DB_HOST_PROD`: The hostname of the MySQL server.
   - `DB_PORT_PROD`: The port number to use for the database connection.
   - `PORT_PROD`: The port number to use for the server.
   - `JWT_PRIVATE_KEY`: A private key used by JWT to sign the tokens.
4. Run `npm run build` to compile the source code.
5. Run `npm start` to start the server in production mode.
## Docker
1. Build the Docker image using the`Dockerfile`:

```sh
docker build -t app:1.0 .
```

2. Run the Docker container using the `docker-compose.yml`:

```sh
docker-compose -f ./compose.yml up
```

Please make sure you run these commands in the directory that contains the `Dockerfile` and the `docker-compose.yml` file.
Alternatively, you can use the included Dockerfile and Docker Compose configuration to run the app in a containerized environment.

## Dependencies

The app uses the following dependencies:

- bcryptjs: to hash and compare passwords securely.
- cors: to enable cross-origin resource sharing (CORS).
- dotenv: to load environment variables from a `.env` file.
- express: to handle HTTP requests and responses.
- joi: to validate request payloads.
- jsonwebtoken: to sign and verify JSON Web Tokens.
- morgan: to log HTTP requests and responses.
- mysql2: to connect to the MySQL database.
- sequelize: to define and manipulate the database schema.

## Development

To run the app in development mode, use `npm run dev`. This will start the app with `ts-node`, which will compile the TypeScript code on the fly. You can also use `npm test` to run the unit tests.

## Production

To run the app in production mode, use `npm run build` to compile the TypeScript code and then `npm start` to start the server. The server will listen on the port specified in the `.env` file. You can run the app in a containerized environment using the included Dockerfile and Docker Compose configuration.

## License

This project is licensed under the ISC License.
