# Demo Site 

This project is a react, redux, node.js demo site.

## Setup
1. change .env.example to .env
2. run npm setup to install dependencies

## Database
This site is partially set up to use mongoDB, however that is not complete. There are a lot of 
changes that would have to be made. However, it is set up to use json-server as an alternative. My end goal is 
to check if prod or dev and modify based on that.

## Demo Users

1. admin@demosite.com admin12345
2. user@demosite.com  user12345

## Available Scripts

In the root project directory, you can run:

### `npm run setup`

Installs dependencies in both root and frontend.  Backend doesn't need it ran.

### `npm start`

Runs backend only for prod.

### `npm run server`

Runs backend only for dev.

### `npm run client`
dd
Runs backend only for dev.

### `npm run dev`

Runs backend, frontend, and json-server simultaneously.

## Ports

Backend:     3100
Front:       3000
json-server: 3200

## JWT Secret
I left the JWT secret in the .env.example because it's needed to use the demo users.  So ya know if you change it, take it out, 
don't rename the .env.example then the demo users will not work.  Registering a user would also be fruitless.
