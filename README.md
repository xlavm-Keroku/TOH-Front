# Angular-TourOfHeroes-Front
Contain the web app Tour Of Hero of Angular with connection to backend en NodeJS

* [Angular Basic Tutorial](https://angular.io/tutorial) 

## Arquetipo de API de Angular Generado Automaticamente

## App Deploy in Heroku

https://angular-tourofhero-frontapi.herokuapp.com/

>The deploy is automatic from a pipeline.

### Flow of Deploy

![Angular Deploy](screen/angulardeploy.jpg)


## DevEnv Version

* Angular CLI: 9.0.7
* Node: 12.16.1
* OS: win10 x64

## Initial Config

Clone and run `npm install` inside of angular project folder 

## Run project 

Run `npm start` command and navigate to `http://localhost:4200/`

## Run unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Bugs

In case of this error: 

```
Could not find module "@angular-devkit/build-angular" from "/home/Projects/myProjectName".
Error: Could not find module "@angular-devkit/build-angular" from "/home/Projects/myProjectName".
    at Object.resolve (/home/Projects/myProjectName/node_modules/@angular-devkit/core/node/resolve.js:141:11)
    at Observable.rxjs_1.Observable [as _subscribe] (/home/Projects/myProjectName/node_modules/@angular-devkit/architect/src/architect.js:132:40)
``` 

then execute the command `npm uninstall @angular-devkit/build-angular` Next, execute the command `npm install @angular-devkit/build-angular@0.13.0` for install the version corresponding.



