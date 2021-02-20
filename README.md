# Luca Edu API

## Prerequisite

* [MySQL](https://www.mysql.com) (required)
* Create luca_edu database (`CREATE DATABASE luca_edu`)
* Update username and password in ormconfig.json with your DB credentials

## Installation

```bash
$ npm install
$ npm run build
$ npm run migration
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Disclaimer

Based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
