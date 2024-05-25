Building a simple Voting Applicatiom on a blockchain usiing solidity!.

1. **contracts/**
    - **Voting.sol**: This is the Solidity file where your voting contract is defined.
    - **Migrations.sol**: This is a standard Solidity file used by Truffle to handle migrations. It keeps track of which migrations have been run on the blockchain.

 2. **migrations/**
    - **1_initial_migration.js**: This migration script deploys the Migrations contract.
    - **2_deploy_contracts.js**: This migration script deploys your Voting contract.
  
 3. **src/**
    - **index.html**: The main HTML file for your front-end application.
    - **app.js**: JavaScript file to handle the interaction between the front-end and the smart contract.
    - **styles.css**: CSS file for styling your front-end application.  

4. **test/**
    - **Voting.test.js**: JavaScript test file for your Voting smart contract. This uses a framework like Mocha to 
                          run tests.
5. **truffle-config.js**: Configuration file for Truffle, specifying network settings, compilers, and other project settings.

6. **package.json**: Lists your project's dependencies and scripts. This is used by npm (Node Package Manager).

