# Welcome to Flight_Service

## Project Setup 
    - clone the project on your local.
    - execute `npm install` on the same path as of your root directory of the downloaded project.
    - create a `.env` in the root directory and add the following environment variable.
        - `PORT = 3000`
    - inside the `src/config` create config.json and then add the following piece of json

    ```
    {
    "development": {
    "username": <your db login name>,
    "password": <your db password>,
    "database": "Flight_search__DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
    }

    ```

