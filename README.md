# This is our cooliest back-end project writen in TypeScript 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>





[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Steps

1. npm i tslint -D 
2. Module`s generation command: nest g module Auth
2. 1.  AuthModule
2. 2.  ProductModule
2. 3.  ReviewModule
2. 4.  TopPageModule
3. Generation of model as a class for each Module command: nest g class product/product.model --no-spec
3. 1.  auth.model > nest g class auth/auth.model --no-spec
3. 2.  product.model > nest g class product/product.model --no-spec
3. 3.  review.model > nest g class review/review.model --no-spec
3. 4.  top-page.model > nest g class top-page/top-page.model --no-spec
4. Set Global prefix for api 
5. Generation of controlers command: nest g controller 
5. 1.  auth > nest g controller auth --no-spec
5. 2.  product > nest g controller product --no-spec
5. 3.  review > nest g controller review --no-spec
5. 4.  top-page > nest g controller top-page --no-spec
6. Varaibles of enviroment set up 
6. 1. npm i --save @nestjs/config
6. 2. How create CRUD >  nest g resource test
7. Typegoose set up (MONGO DB in TypeScript)
7. 0. https://github.com/kpfromer/nestjs-typegoose
7. 1. npm install --save @typegoose/typegoose mongoose nestjs-typegoose 
7. 2. DEV DEPENDANCIS  dev dependencies > npm install  -D @types/mongoose
7. 3. Adaptin model for Typegoose 
8. Creating services  > nest g service SerName
8. 1.  auth > nest g service auth 
8. 2.  product > nest g service product 
8. 3.  review > nest g service review 
8. 4.  top-page > nest g service top-page 
9. npm i --save-dev @types/mongoose

