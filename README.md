# Angular16NewFeatures by cretara

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Test and code coverage
Script npm
```shell
ng test --watch=false --code-coverage
```

Install http-server
```shell
npm install -g http-server
```

Launch http-server without browser cache to local dir /dist 
of the project after build Angular application in production mode 
```shell
ng build --prod
cd ./dist
http-server -c-1 .
```
