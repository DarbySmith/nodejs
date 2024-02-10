# Node.js

## INTRODUCTION

### What is it
- <strong style="color:red">runtime environment</strong> for exectuting JavaScript code
    - runtime environment is a JS engine that executes the JS code
        - no document object in node
        - does have fs and http objects though (not in browser)
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
        - node monitors the queue in the background
- do not use node for CPU intensive apps
    - node will have to wait for the calculations to finish so it isn't efficient
- DO use for data intensive and real time applications

## INSTALL
- $ npm init -y
    - initializes the package.json
- $ yarn add -D typescript
    - adds typescript to the project
- $ npx tsc --init
    - creates tsconfig.json file
    - stores options for TS compiler

## RUNNING 
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
- $ yarn add express
    - JS library 
- $ yarn add -D @types/express
    - know what the values are (types) in 
- $ yarn add -D @types/node
    - give access to types definitions for node js packages
        - helpful with importing functions and seeing what the types are for the args


## TIPS
- if want to add a package also add the types for it - for example
    - express
    - @types/express
- some JS libraries do not have types 
    - there's no info for fxn that is imported
    - create a dir `@types` and file `shortid.d.ts`
    - `shortid.d.ts`
    ```ts
    // makes so TS will stop yelling at you about the import without types
    declare module "shortid";
    ```
- trick for if your IDE is behind giving errors
    - cmd + shift + p `Typescript restart server`


## GLOBAL OBJECTS
- these all belong to the window object
    - setTimeout()
    - clearTimeout()
    - setInterval()
    - clearInterval()
- there is no window object in node though - global object in node
    - global.setTimeout() // this is automatically prefixed with "global"
        - global is implied and can just write setTimeout()
- avoid creating var and functions in the global scope
    - create in modules (scoped to module)

## MODULES
- when define functions it is added to the global scope
    - accessible by window object 
    - if you have another file with the same function name you can override a function in another file
        - since they are in global scope
- use a module to scope functions and variables
    - encapsulated inside the module
- you can import modules into different files
- every file is a module in node
    - everything in the file is scoped to the file
    - private to the file
    - in order to use a function in another file it must be imported
- every app has a main module
- node modules:
    - os
    - fs
    - events
    - http

### Creating new module
- add new file
- write code 
- module.exports.`<export name>` = `<function name>`
    ```js
    module.exports.log = log;
    ```
- load into another file
    - require(`<path of target module>`)
    ```js
    require('./logger');
    ```

### Module wrapper function
- the code in file is wrapped inside of a function at runtime
    ```js
    (function (exports, require, module, __filename, __dirname) {
        // code in file
    })
    ```