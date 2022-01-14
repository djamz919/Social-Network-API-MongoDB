# Social-Network-API-MongoDB

## Description
This application is a collection of APIs that can be used for a social networking platform and leverages MongoDB. Users can add and remove other users as friends. Users can also share their thoughts. Additionally, users can react to each other's thoughts.

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [API Documentation](#documentation)
  * [Questions](#questions)

## Installation
To install any dependencies run: npm install. 

Be sure to also have MongoDB installed on your machine.

## Usage
After cloning the repository and installing any dependencies, run `npm start`. This should create a localhost to send API calls to. Using an API platform like Postman or Insomnia, these APIs can be accessed.

To watch a sample walkthrough video:
https://drive.google.com/file/d/1rrukDmDymMTkV9cJqbvYOvTbv-Bi_Ts9/view

## Documentation

`POST` : Create User
- Endpoint: `/api/users`
- Sample Body: 
```
{
  "username": "johndoe001",
  "email": "johndoe001@gmail.com"
}
```

`GET` : Get All Users
- Endpoint: `/api/users`

`GET` : Get User by ID
- Endpoint: `/api/users/{id}`

`PUT` : Update User Details
- Endpoint: `/api/users/{id}`
- Sample Body: 
```
{
  "username": "jdoe010",
  "email": "johndoe001@gmail.com"
}
```

`DEL` : Delete User
- Endpoint: `/api/users/{id}`

`POST` : Add Friend
- Endpoint: `/api/users/{userId}/friends/{friendId}`

`DEL` : Remove Friend
- Endpoint: `/api/users/{userId}/friends/{friendId}`

`POST` : Create a Thought
- Endpoint: `/api/thoughts`
- Sample Body: 

```
{
  "thoughtText": "Here's a new cool thought...",
  "username": "johndoe001",
  "userId": "61de18d73b878b229ce9bce9"
}
```

`GET` : Get All Thoughts
- Endpoint: `/api/thoughts`

`GET` : Get Thought by ID
- Endpoint: `/api/thoughts/{id}`

`PUT` : Update Thought
- Endpoint: `/api/thoughts/{id}`

`DEL` : Delete Thought
- Endpoint: `/api/thoughts/{id}`

`POST` : React to a Thought
- Endpoint: `/api/thoughts/{id}/reactions`
- Sample Body: 
```
{
  "reactionBody": "Interesting thoughts!",
  "username": "johndoe001"
}
```

`DEL` : Remove Reaction
- Endpoint: `/api/thoughts/{id}/reactions/{reactionId}`

## Questions
For any questions, reach out to github.com/djamz919 via the following email address: djtm97@gmail.com.