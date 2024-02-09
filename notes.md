# Node.js

## INTRODUCTION

### What is it
- <strong style="color:red">runtime environment</strong> for exectuting JavaScript code
- Node is NOT a programming language or a framework

### Uses
- creating backend services and APIs
- building fast and highly scalable apps

### Pros
- great for prototyping and agile development
- super fast and scalable
- JavaScript is everywhere (FE + BE)
- cleaner and more consistent codebase
- large ecosysyem of open source libraries

### Details
- JS code is translated in JS engine and made into machine code
- different browsers will use different translators 
    - this is why JS can act differently based on browser
- up to 2009 the only way to execute JS was in a browser
- v8 from CHrome was used to create node to execute JS to run
    - there is no document object
    - can work with file system though (can't do in browser)
        - gives some capabilites that don't have in the browser

### How it works
- asynchronous / non-blocking architechture 
    - like a thread used to handle multiple requests 
        - do not have to wait for process to finish before starting another request
        - think of like the waiter in restaurant serving different tables metaphor
- the problem with synchronous architechture is that processes have to wait for others to finish
- async by default
- while the thread is waiting for a result from the query it will go to another request
    - works in a queue where it is waiting for an event to finish
- do not use node for CPU intensive apps
    - node will have to wait for the calculations to finish so it isn't efficient

## Installation
- $ npm init -y
    - initializes the package.json
- $ yarn add -D typescript
    - adds typescript to the project
- $ npx tsc --init
    - creates tsconfig.json file
    - stores options for compiler

## Running 
- in package.json edit "scripts"
    ```json
    "scripts": {
        "start": "ts-node-dev --respawn src/index.ts",
        "build": "tsc",
    }
    ```
- $ tsc
    - creates an equivalent JS file
- $ yarn add -D ts-node-dev
    - package
    - whenever make a change it restarts the server
- $ yarn start
    - runs the script "start" in the package.json
    - when changes are made it will <strong style="color:red">transpile</strong> to JS