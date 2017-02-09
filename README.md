# Spring-Boot / Angular2 Quickstart

## About

The project was made using AngularJS 2.4.4 and Spring-boot 1.4.3. I used [angular-cli](https://github.com/angular/angular-cli) to generate the Angular 2 front-end of the application and spring [spring initialzr](http://start.spring.io/) to generate the back-end spring-boot of the application

## Requirements

- [node.js and npm](https://nodejs.org/)
- [Java SDK](https://www.oracle.com/downloads/index.html)

### Optional

- [AngularJS command line interface](https://github.com/angular/angular-cli)
- [Gradle](https://gradle.org/)

## Project file structure

- Exactly the same as Spring-boot or AngularJS, except the files for AngularJS are located in `src/webapp`
- Folder `src/webapp/` contains the sources AngularJS app
- Folder `src/main/` contains the sources for the Spring-boot app
- Folder `src/test/` contains the sources for the Spring-boot app JUnit testing

- The compiled AngularJS 2 javascript files are put into the folder `src/main/resources/static/`. Once the Spring-boot server is launched they are available at `http://localhost:8080`.

### Example modules
- There are 2 example modules in the project, "To do list" and "Hello world", each example has a Spring-boot controller for the back-end and its own folder for the front-end.
- The hello world module allows you to enter a name and submit, to which the server replies with a message.
- The to do list is a CRUD module, the data is temporarily stored in the back-end.

## Commands

### Launching

- Run `./gradlew` in root directory to do all the install tasks and compiling
- Run  `ng build` in root directory to build the angular app
- Run `./gradlew build` in root directory to build the spring-boot application. Make sure to have done an `ng build` before or you won't have a front end
- Change the working directory to `build/libs/` and run `java -jar project-0.0.1-SNAPSHOT.jar` to launch the server
- Once the project is launched, go to `http://localhost:8080` in your web browser and test the app

### CORS error with chrome
- Make a shortcut to chrome web browser on the desktop, edit the properties of the shortcut and under "target" add the following `--disable-web-security --user-data-dir="c:/chromeUserData"`

### Testing

- Run `./gradlew test` to run the Spring-boot JUnit tests
- Run `ng test` to run Angularjs 2 tests

### Live Reload

- Run `ng serve --proxy-config proxy.conf.json` in root directory. To change the port (default : 8080), edit the proxy.conf.json file.

## User authentication

The application uses Cross Site Request Forgery protection using csrf tokens.

- Users can obtain a token by doing a Http GET request on `/api/token` with BASIC auth
- The token must then be placed inside a header called X-XSRF-TOKEN
- As long as it is valid the user is logged in
- If the user calls a resource that requires authentication and does not possess the X-CSRF-TOKEN header, the user session is destroyed

### TODO

- Add user management on the front-end
- Add an authentication service which encapsulates http requests to the front-end
- Add user crud controller on the back-end