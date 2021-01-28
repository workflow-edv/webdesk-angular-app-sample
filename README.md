# Webdesk Websdk Angular App

This project is an Angular implementation for use of Webdesk's Websdks.

The user can login to an specific Webdesk's instance using `webdesk-tools-websdk` and then switch his booking status from Attendant/Absent with `webdesk-ta-websdk`. These cases represent a basic implementation of Webdesk's websdks on an third party application.

## How to run the app

Run `npm i` to install all dependencies.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will be hosted locally on a dev-server, there you can interact with the application.

The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Useful Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

The Webdesk instance's version is 4.20.0

Also tested on Node version 14.4

### Login

The login view is the default landing page of the app, it provides a formular for Webdesk Server, Username and Password. It uses BookingService from `webdesk-tools-websdk` to create a session on the browser.

### Booking

The booking page is the one which uses webdesk-ta-websdk, to request the current booking status and if requested, switch the TA booking for a logged user.

### Webdesk Websdks

Our websdks are bundled in two formats: a Web version and a Node version.

The web version provides a `webdesksdk` global variable which the application can access to.

The Node version provides ES6+ ESM modules with types support, exported as webdesk-[module]-websdk.umd.js format.

The current project uses both `webdesk-tools-websdk` and `webdesk-ta-websdk`, and uses the UMD/Node version for type suppport.

### Server Permissions 

In Webdesk it is necessary to configure specific `Access Rights` (under System -> Security -> Accessright Sets) to make the Webdesk instance allow any external application request specific endpoints.


As we are using TA features, it is needed to grant FULL privileges on `/rest/ta` endpoint selector.

#### CORS Configuration 
As of lately, it was noted on recent browser versions (Chrome based browsers tested so far) there is a problem with request headers with `SameSite` headers. 

So it is needed to add `Set-Cookie: SameSite=None; Secure` in your server configuration to avoid header problems. Otherwise all endpoints will return 401 error.