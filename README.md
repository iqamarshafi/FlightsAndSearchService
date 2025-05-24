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
    - once you've added the db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`.
    and then 

    `npx sequelize db:migrate`
    
    ```

## DB Design

    - Airplane Table
    - Flight
    - Airport
    - City 

    - A flight belongs to an airplane but one airplane can used in multiple flights.
    - A city has many airports but one airport belongs to a city.
    - One airport can have many flights, but a flight belongs to one airport.
