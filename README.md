# Context

[Lemonade Day](https://lemonadeday.org/) is a US NGO whose mission to encourage and educate young entrepreneurs. 
This is achieved through an educational program that guides learners through planning and executing a lemonade stand. 
The program aims to teach young entrepreneurs the concepts of income, expenses and profit as well as budgeting, 
customer research and service.

[My Lemonade Day](https://lemonadeday.org/mylemonadeday) is the application which the learners use to complete the program 
and mentors use to guide and monitor their learners throughout the program.

The learning program is broken down into a number of modules and lessons to enable young entrepreneurs 
to incrementally learn and complete lessons to reinforce their learnings.

This project is a web application that enables mentors (parents and teachers) to 
manage, monitor and support their young entrepreneurs through their learning journey.

# What you need to do

Complete and integrate the API specified below into the associated views in order for the acceptance scenarios below to pass.

# Acceptance Scenarios

In order to support my Learners, as a Mentor, I want to be able to view a Learners progress.

Scenario: Mentor views Learner progress page with no progress  

Given a logged on Mentor, Fred  
Given a Learner, George  
Given Fred is mentoring George  
Given George has not started the program  
When Fred views George's progress page  
Then Fred can cannot see any progress for any module or lesson  

Scenario: Mentor views Learner progress page with partial progress

Given a logged on Mentor, Fred  
Given a Learner, George  
Given Fred is mentoring George  
Given George has partially completed the program  
When Fred views George's progress page  
Then Fred can see the progress of each module and lesson  

Scenario: Mentor views Learner progress page with complete progress

Given a logged on Mentor, Fred  
Given a Learner, George  
Given Fred is mentoring George  
Given George has completed the program  
When Fred views George's progress page  
Then Fred can see that each module and lesson is complete

In order to manage my Learners, as a Mentor, I would like to delete a Learner, and their associated progress.

Scenario: Mentor Deletes a Learner

Given a logged on Mentor, Fred
Given a Learner, George
Given Fred is mentoring George
When Fred deletes George
Then George's progress is deleted
Then George is deleted
Then Fred is notified that George was successfully deleted

In order for my Mentor to support and monitor me, as Learner, I need to update my progress.
P.S. Although there is no associated user interface for this scenario we would you to complete the end point to support it.

Scenario: Learners successfully progresses a Lesson for the first time

Given a Learner George
Given a Module 1
Given a Lesson 2
Given George has made no previous progress on Lesson 1.2
When George completes 50% of Lesson 1.2
Then George's progress of 50% is stored
Then the date on which George started Lesson 1.2 is stored
Then George is notified that his progress was successfully updated

Scenario: Learner successfully progresses a Lesson again

Given a Learner George
Given a Module 1
Given a Lesson 2
Given George has 25% progress on Lesson 1.2
When George completes 50% of Lesson 1.2
Then George's progress for Lesson 1.2 of 50% is stored
Then George is notified that his progress was successfully updated

Scenario: Learner successfully completes Lesson

Given a Learner George
Given a Module 1
Given a Lesson 2
Given George has 50% progress on Lesson 1.2
When George completes 100% of Lesson 1.2
Then George's progress for Lesson 1.2 of 100% is stored
Then the date on which George completed Lesson 1.2 is stored
Then George is notified that his progress was successfully updated

Scenario: Learner attempts to reduce progress

Given a Learner George
Given a Module 1
Given a Lesson 2
Given George has 50% progress on Lesson 1.2
When George completes 25% of Lesson 1.2
Then George's progress for Lesson 1.2 of 50% is stored
Then George is notified that his progress was not updated

# Standard of code

Although this is a simplified version of the problem, we expect you to write code of production standard,
to demonstrate both your understanding of production code and your coding ability.

# API Spec

## GET Learners

Get a list of all learners.

```http request
GET /learners
Accept: application/json
Status: 200
Content-Type: application/json
[
  {
    "id": string (UUID),
    "name": string,
    "username": string,
    "lastSync": string (ISO8601 date)
  }
]
Status: 500 Internal Server Error
Content-Type: application/json
{
  "errorCode: number,
  "errorDescription": string
}
```

## DELETE Learner

Delete a Learner

```http request
DELETE /learners/:learnerId
Status: 204 No Content
Status: 500 Internal Server Error
Content-Type: application/json
{
  "errorCode: number,
  "errorDescription": string
}
```

## GET Learner Progress

Get a list of Learner's progress for each Lesson

```http request
GET /learners/:learnerId/progress
Accept: application/json
Status: 200 Ok
Content-Type: application/json
[
  {
    "learnerId": string (UUID),
    "moduleId": number (1, 2, 3),
    "lessonId": number (1, 2, 3, 4, 5),
    "progress": number [0-1],
    "startDate": string (ISO 8601)
    "completionDate": string (ISO 8601)
  }
]
Status: 409 Conflict
Content-Type: application/json
{
  "errorCode": number,
  "errorDescription": string
}
Status: 500 Internal Server Error
Content-Type: application/json
{
  "errorCode: number,
  "errorDescription": string
}
```

## PUT Learner Progress

Update a Learners progress.

```http request
PUT /learners/:learnerId/progress
Content-Type: application/json
{
  "learnerId": string (UUID),
  "moduleId": number (1, 2, 3),
  "lessonId": number (1, 2, 3, 4, 5),
  "progress": number [0-1]
}
Status: 200 Ok
Status: 400 Bad Request
Content-Type: application/json
{
  "errorCode": number,
  "errorDescription": string
}
Status: 409 Conflict
Content-Type: application/json
{
  "errorCode": number,
  "errorDescription": string
}
Status: 500 Internal Server Error
Content-Type: application/json
{
  "errorCode: number,
  "errorDescription": string
}
```

# Run

The easiest way to run this server is with [Docker](https://docs.docker.com/engine/install/) and the provided [Docker Compose](https://docs.docker.com/compose/install/) script.
Be sure to consider the [Docker post install instructions](https://docs.docker.com/engine/install/linux-postinstall/) should you be working on a linux machine.
Once you have Docker and Docker compose installed you can run the server with the following command.

```bash
docker-compose up --build
```

Should you wish not to use docker you can run the server with:
Bear in mind you may need to configure `pg` with your database credentials.

```bash
yarn start
```