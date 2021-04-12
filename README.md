# EventTrackerProject

# Overview

This is a full-stack REST microservice with the purpose of tracking information about your practice sessions for musicians. The API's send and receive serialized data in the form of JSON, and a user can perform full CRUD operations on a MySQL database. REST controllers are configured within a Spring Boot app, which is integrated with Spring Data JPA repositories.

## How to Run

Use the following URI's to access the REST API's at http//:18.221.86.16:8080/PracticeLog/(URI)

## REST API
| HTTP Method | Resource URI | Request Body | Returns |
|-------------|--------------|--------------|---------|
| GET         | `api/logs` |                | List<PracticeLog>;|
| GET         | 'api/logs/{logId}'|         | PracticeLog |
| POST        | 'api/logs'   | {PracticeLog}| PracticeLog |
| PUT         | 'api/logs/{logId}' | {PracticeLog} | PracticeLog |
| DELETE      | 'api/logs/{logId}' |        | 204 or 404 status code |
