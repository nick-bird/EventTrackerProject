# EventTrackerProject

# Overview



## How to Run

## REST API
| HTTP Method | Resource URI | Request Body | Returns |
|-------------|--------------|--------------|---------|
| GET         | `api/logs` |                | List<PracticeLog>;|
| GET         | 'api/logs/{logId}'|         | PracticeLog |
| POST        | 'api/logs'   | {PracticeLog}| PracticeLog |
| PUT         | 'api/logs/{logId}' | {PracticeLog} | PracticeLog |
| DELETE      | 'api/logs/{logId}' |        | 204 or 404 status code |
