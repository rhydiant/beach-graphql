# beach-graphql

A GraphQL server running on Node.js, backed by mongoDB.

## Setup

### Pre-reqs

- [HomeBrew](https://brew.sh/)
- [Node.js](https://nodejs.org/en/)
- [mongoDB](https://www.mongodb.com/) - `brew install mongodb`

Install dependencies with `npm install`.

## Usage

Run a local mongoDB instance with `mongod` (ensure write permissions with `chmod 777 /data/db`).

Start the server with `npm start` then goto `http://localhost:8080/graphql` to view GraphiQL.
