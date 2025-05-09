---
sidebar_position: 2
---

# API Documentation & SDKs

This comprehensive documentation covers our REST and SOAP APIs, including endpoints, request/response formats, authentication methods, and usage examples. You'll also find information about available Software Development Kits (SDKs) for various programming languages.

## API Overview

Our APIs provide programmatic access to our platform's functionality, allowing you to integrate our services with your applications, automate workflows, and extend the platform's capabilities.

### Available APIs

| API Name | Purpose | Protocol | Formats | Version |
|----------|---------|----------|---------|---------|
| Core API | Primary platform functionality | REST | JSON | v3.5 |
| Workflow API | Process automation | REST | JSON | v2.1 |
| Data API | Data access and management | REST/GraphQL | JSON | v2.0 |
| Admin API | Administrative functions | REST | JSON | v1.8 |
| Legacy API | Backward compatibility | SOAP | XML | v1.0 (Deprecated) |

### API Versioning

We use semantic versioning (MAJOR.MINOR.PATCH) for our APIs:
- MAJOR: Breaking changes that require client updates
- MINOR: New features, backward compatible
- PATCH: Bug fixes, backward compatible

All APIs are versioned in the URL path, e.g., `/api/v3/resources`.

## Authentication

### OAuth 2.0

Our preferred authentication method is OAuth 2.0 with the following grant types:

- Authorization Code (for web applications)
- Client Credentials (for server-to-server integrations)
- Resource Owner Password (for trusted applications)

#### Example OAuth 2.0 Flow (Authorization Code)

1. **Redirect to Authorization Server**

```
GET https://auth.yourdomain.com/oauth/authorize
?client_id=YOUR_CLIENT_ID
&redirect_uri=YOUR_REDIRECT_URI
&response_type=code
&scope=read write
&state=RANDOM_STATE_STRING
```

2. **Exchange Code for Token**

```
POST https://auth.yourdomain.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTHORIZATION_CODE
&redirect_uri=YOUR_REDIRECT_URI
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
```

3. **Use Access Token**

```
GET https://api.yourdomain.com/v3/resources
Authorization: Bearer ACCESS_TOKEN
```

### API Keys

For simpler integrations, we also support API key authentication.

```
GET https://api.yourdomain.com/v3/resources
X-API-Key: YOUR_API_KEY
```

### Token Lifetimes

| Token Type | Lifetime | Renewal |
|------------|----------|---------|
| Access Token | 1 hour | Use refresh token |
| Refresh Token | 30 days | Re-authenticate |
| API Key | Until revoked | N/A |

## Core API

The Core API provides access to the main functionality of our platform.

### Base URL

```
https://api.yourdomain.com/v3
```

### Resources

#### Users

| Endpoint | Method | Description |
|----------|--------|-------------|
| /users | GET | List users |
| /users | POST | Create user |
| /users/{id} | GET | Get user details |
| /users/{id} | PUT | Update user |
| /users/{id} | DELETE | Delete user |

**Example Request: Create User**

```json
POST /v3/users
Content-Type: application/json
Authorization: Bearer ACCESS_TOKEN

{
  "firstName": "
