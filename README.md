# Angular Toolbox & Reference Project 

[!Angular](https://angular.io/assets/images/logos/angular/angular.svg)

This project is a reference and a toolbox project for *Angular 5.1.0.*  The project could be used as a reference and toolbox for new or existing internal projects.
The most used modules, component and libaries has been implemented into this project. 

The project is following *John Papas Angular Styleguide*: https://angular.io/guide/styleguide

The project is using the CSS-framework Bootsrap 4.

The following boilerplate was mainly created using Angular Cli. It is suggested to use the CLI when creating a new project and use this project more as an reference.
If you decide to clone this project and make changes, it is suggested to use the commands integrated in the cli to create new components, modules, services etc.
The relevant files will then be imported, created and imported in the correct modules etc. 

## Content

* [Installation](#installation)
* [Contribution](#contribution)
* [Elements](#elements)
* [External Modules](#externalModules)
* [Testing](#Testing)
* [External References](#externalReferences)

## Installation

Start by cloning the project:

```
git clone https://github.com/evry-bergen/reference-angular.git
```

When the project is cloned, install the npm packages:

```
npm install
```

You can now run the project, and the angular project should be visible at localhost:4200

```
npm start
```

To save 95 % build time, you can use the new Angular 5 feature

```
ng serve --aot
```

--aot will be standard when running npm start in future Angular versions.

## Contribution

If you want to contribute to this project, please read the [Contribution guidelines for this project](CONTRIBUTING.md)

## Elements

### Components

In this refernce project there has been created a few components, mainly to describe the best pratice folder structure.
The folder structure is based on John Papa's style guide: https://angular.io/guide/styleguide. This is also the official
Angular 2 styleguide. 

If we start with the priamry component, the ```app.component.html|ts|scss|spec``` we can see that it is using router outlet
to control routing. The routes are defined in the ```app.routes.ts``` file. 

The ```home.component``` is the main page of the website, defined by the ```app.rotes.ts``` file. It contains a sub component,
```greeter.component.html|scss|ts|spec```. This components takes an input value to show the end users a kind greeting. 
All components that is a part of the "main page" (home.component) is in the same module. 

The next, and last component in this project is the ```navigation-destination.component.ts|html|spec|scss```. This project only
describes a navigation route, as we can see in the ```app.routes.ts``` file. As this is a new routing destination, and not a part
of the home.component, it has its own module. 

An ```error.component.ts|html|scss|spec``` has also been provided to descibe how to handle 404 errors in Angular.

### Services

A simple ```example.service.ts``` has been included in the project to show the usage of services in Angular.
It only returns a Observable that returns true value. An Obsevable is used to display how to handle them.

The service is injected in the greeter component. It should only show the greeting if the service works as expected, and 
the ```h1``` elements contains an *ngIf.

### HTTP Interceptor

A HTTP Interceptor is created as an reference. If you ever need to log based on status, or have to handle HTTP requests/response etc.
somehow. This is the way to go. 


## External Modules

In the project a few external modules that we use frequently has been imported into the project, to show how to use them. 
A detailed description of each of the modules will not be given. But a link to the GitHub repository is given as a reference.

They are all implemented and used in the project. 

### @ngx-translate

https://github.com/ngx-translate

### Bootstrap 4

The project is using Bootstrap 4, which is still in test phase but is considered pretty stable by the community. 

https://v4-alpha.getbootstrap.com/

## Testing 

End-to-end testing and Unit Testing are both supported in this project and can be used as followed:
    
    npm test // run unit tests
        
    ng e2e // run end to end tests
    
    
## External References

### Hook up with backend

The following project by @salilsaini868 is a good reference project on how to combine a donet project with an Angular 5 project.
In the following project a swagger generation tool has been used to hook up the front end to the webapi: 

[Example project](https://github.com/salilsaini868/Recruitment-System/tree/develop/web)
