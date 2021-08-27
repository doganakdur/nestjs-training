# nestjs-training

**!!! READ THIS FIRST !!!**

Nestjs is a awesome tool that you can use to develop, maintain and deploy web app easy and fast. I can explain how it is make you life easier, but I will do that in code.

If you are a beginner on web app development, if you didn't develop any API from scratch, using languages libraries only;

**PLEASE DO NOT USE NESTJS**.

If you don't know;

    1. Typescript
    2. How HTTP works
    3. What the RESTful API means
    4. How the Dependency Injection handles all things behind the scenes
    5. How Decorators works in Typescript

**PLEASE DO NOT USE NESTJS**

Nestjs is not suitable for beginners. It hides so many features from developers. It heavily uses Dependency Injection design pattern and Decorators. You need to know them, at least read some articles or watch some videos about them. [You can read Nestjs Documentation by clicking here.](https://docs.nestjs.com)

On the other hand, if you have some experience, and if you are Nodejs/Typescript developer, you should try Nestjs to develop, maintain well-structured web apps, APIs or microservices.

**Let's code.**

# Before Starting
This repo is created after watching [Stephen Grider's Udemy Course](https://www.udemy.com/course/nestjs-the-complete-developers-guide/) to learn more about Nestjs by myself. He is stunning teacher, you should check his courses.

## Nest CLI
### We will use nest cli(command line interface) tool to create project and some of the files. To install nest cli;
---

```
npm install -g @nestjs/cli
```

### Then to create an project;
```
nest new your_project_name
```

### CLI will ask you "which package manager do you want to use ?" I chose npm. After process is finished, you actually have an web app that is ready. You can run it with;

```
npm run start
```

### If you want to change port number you need to modify it in src/main.ts
Otherwise, The App will run on [localhost:3000](localhost:3000)

## To Create Users Module, Controller and Service
```
nest g module users
```
```
nest g controller users
```
```
nest g service users
```

### These commands will create files listed below
    1. src/users/users.module.ts
    2. src/users/users.controller.ts
    3. src/users/users.service.ts

### Files are not just created they are wired up with app.module.ts file with line;
>imports: [UsersModule]

### I will not explain what those lines are doing detailly. You should search Dependency Injection design pattern.

### Also you will heavily see;
    1. @Module
    2. @Controller
    3. @Injectable

### For these you need to also read about Typescript Decorators.

## Rest Client Extension for VSCode Users

### There is an extension called "REST Client" for VSCode. If you install it, run the code, then you can send requests through the src/users/request.http file. You just need to click "Send Request" buttons for each individual request section.

### We will use sqlite to store data. To install it;
```
npm i @nestjs/typeorm typeorm sqlite3
```

### Configured the sqlite db with db.sqlite name. When you run the code, you will see db.sqlite file in the root directory. After that, created the User entity and connect it to the app module. I leave comments on some lines to explain the hidden processes.

## User signup routes and validations
```
npm i class-validator class-transformer
```

### class-validator will used to check and validate DTO(Data Transfer Object) fields are valid.

## At this point if you use user-routes branch code, after you run the app, send request using request.http file. After that check the console, if email and password fields are valid you can see them on vs-code terminal.

### Also to check whitelist: true option in main.ts file, you can send another field in body. You will not see it in terminal.

### To learn more about Data Transfer Object please check out [Nestjs Official Docs here](https://docs.nestjs.com/controllers#request-payloads)