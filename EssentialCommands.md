# Cheat Sheet 📑 for all Commands For Backend

## DataBase MongoDB

```sh

> show dbs                               # Show all available databases
> use <database_name>                    # Switch to a specific database
> show collections                       # Show all collections in the current database
> db.<collection_name>.find()            # Retrieve data from a collection
> db.<collection_name>.insertOne({...})  # Insert a document into a collection
> db.<collection_name>.updateOne({...})  # Update a document in a collection
> db.<collection_name>.deleteOne({...})  # Delete a document from a collection

```

Please note that you need to be connected to a MongoDB instance via the shell to execute these commands.

# Node.js

```sh
$ npm init                           # Initialize a new Node.js project
$ npm install <package_name>        # Install a package
$ npm install --save <package_name> # Install a package and save it as a dependency
$ npm install --save-dev <package_name> # Install a package as a development dependency
$ node <file_name>.js               # Run a Node.js file
$ npm start                         # Start the server (if defined in package.json)
$ npm run <script_name>             # Run a script defined in package.json

```

# Some error resolving commands

## For Node.js

```shell
$ npm cache clean --force
$ npm install <package_name> --save
$ npm audit
$ npm audit fix
$ npm update

```

- **npm cache clean --force**: This command will clean the npm cache.
- **npm install <package_name> --save** : This command will reinstall the package and update the package.json file.
- **npm audit** : This command will check for any vulnerabilities in the packages.
- **npm audit fix**: This command will try to fix any vulnerabilities found by the npm audit command.
- **npm update** : This command will update all the packages to their latest version.

## For MongoDB

```sh
$ mongod --repair
$ mongod --repair --dbpath <path_to_data_directory>
$ mongod --dbpath <path_to_data_directory> --repair
$ mongo --eval "db.runCommand({repairDatabase:1})"
$ mongod --repair --repairpath <path_to_repair_directory>

```

- **mongod --repair** : This command will repair a MongoDB database.
- **mongod --repair --dbpath <path_to_data_directory>**: This command will repair a MongoDB database located in a specific path.
- **mongod --dbpath <path_to_data_directory> --repair**: This command will repair a MongoDB database located in a specific path.
- **mongo --eval "db.runCommand({repairDatabase:1})"**: This command will repair a MongoDB database using the mongo shell.
- **mongod --repair --repairpath <path_to_repair_directory>**: This command will repair a MongoDB database and store the repair files in a specific path.
