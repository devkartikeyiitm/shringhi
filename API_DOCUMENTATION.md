# API Documentation

## Base URL
`https://api.shringhi.com/v1`

## Authentication
All requests require Bearer token in Authorization header:
```
Authorization: Bearer {token}
```

## Endpoints

### Users
- `GET /users` - List all users
- `POST /users` - Create new user
- `GET /users/{id}` - Get user details
- `PUT /users/{id}` - Update user

### Projects
- `GET /projects` - List projects
- `POST /projects` - Create project
- `DELETE /projects/{id}` - Delete project

## Response Format
```json
{
  "status": "success",
  "data": {},
  "timestamp": "2024-01-10T23:00:00Z"
}
```
