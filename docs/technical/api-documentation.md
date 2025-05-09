---
id: api-documentation
title: API Documentation
sidebar_label: API Documentation
---

# API Documentation

## Overview of Store.icu API Platform

The Store.icu API platform provides partners and developers with programmatic access to store data, business logic, and platform functionality. This comprehensive API allows you to build integrations, automate processes, and create custom solutions for your clients.

## API Access

### Authentication

All API requests require authentication using OAuth 2.0:

1. Register your application in the [Partner Dashboard](https://partners.store.icu/apps)
2. Obtain client credentials (client ID and secret)
3. Implement the OAuth 2.0 authorization flow
4. Use the resulting access token in the Authorization header

```
Authorization: Bearer {access_token}
```

### Access Scopes

Request only the permissions your integration needs:

| Scope | Access Level | Description |
|-------|-------------|-------------|
| `read_products` | Read-only | View product data |
| `write_products` | Read-write | Create and modify products |
| `read_orders` | Read-only | View order information |
| `write_orders` | Read-write | Create and update orders |
| `read_customers` | Read-only | Access customer data |
| `write_customers` | Read-write | Create and update customers |
| `read_inventory` | Read-only | View inventory levels |
| `write_inventory` | Read-write | Adjust inventory |
| `read_content` | Read-only | Access content pages |
| `write_content` | Read-write | Modify store content |
| `read_themes` | Read-only | View theme data |
| `write_themes` | Read-write | Modify store theme |
| `read_reports` | Read-only | Access analytics data |
| `admin` | Full access | Complete store management |

Detailed information on scope implementation is available in the [Scope Documentation](https://developers.store.icu/api/scopes).

### Rate Limits

API usage is subject to the following rate limits:

| Partner Tier | Requests per Minute | Burst Capacity | Daily Limit |
|--------------|---------------------|----------------|-------------|
| Standard | 60 | 120 | 20,000 |
| Gold | 120 | 240 | 50,000 |
| Platinum | 240 | 480 | 100,000 |

Rate limit information is included in response headers:

```
X-Rate-Limit-Limit: 60
X-Rate-Limit-Remaining: 58
X-Rate-Limit-Reset: 1620000000
```

## API Versions

Store.icu uses API versioning to ensure compatibility:

| Version | Status | End-of-Life Date |
|---------|--------|------------------|
| v3 | Current | Active |
| v2 | Deprecated | January 1, 2026 |
| v1 | Legacy | June 30, 2025 |

Specify the API version in the URL:

```
https://api.store.icu/v3/products
```

Version migration guides are available in the [API Changelog](https://developers.store.icu/api/changelog).

## Core API Resources

### Products

Manage product catalog:

```http
GET /api/v3/products
POST /api/v3/products
GET /api/v3/products/{id}
PUT /api/v3/products/{id}
DELETE /api/v3/products/{id}
```

Product resource features:
- Comprehensive product attributes
- Variant management
- Custom field support
- Bulk operations
- Image handling
- Inventory synchronization

[Products API Documentation](https://developers.store.icu/api/products)

### Orders

Handle customer orders:

```http
GET /api/v3/orders
POST /api/v3/orders
GET /api/v3/orders/{id}
PUT /api/v3/orders/{id}
```

Order management capabilities:
- Complete order lifecycle
- Status updates
- Fulfillment tracking
- Payment processing
- Refund handling
- Order notes
- Custom metadata

[Orders API Documentation](https://developers.store.icu/api/orders)

### Customers

Manage customer data:

```http
GET /api/v3/customers
POST /api/v3/customers
GET /api/v3/customers/{id}
PUT /api/v3/customers/{id}
DELETE /api/v3/customers/{id}
```

Customer resource features:
- Profile management
- Address book
- Order history
- Groups and segmentation
- Consent tracking
- Account status

[Customers API Documentation](https://developers.store.icu/api/customers)

### Inventory

Track and manage stock:

```http
GET /api/v3/inventory
GET /api/v3/inventory/{product_id}
POST /api/v3/inventory/adjustments
```

Inventory capabilities:
- Real-time stock levels
- Allocation management
- Multi-location support
- Movement history
- Low stock alerts
- Batch updates

[Inventory API Documentation](https://developers.store.icu/api/inventory)

### Cart & Checkout

Manage shopping carts:

```http
POST /api/v3/carts
GET /api/v3/carts/{id}
PUT /api/v3/carts/{id}
POST /api/v3/carts/{id}/checkout
```

Cart features:
- Item management
- Price calculation
- Promotion application
- Checkout initiation
- Abandoned cart recovery
- Guest cart handling

[Cart API Documentation](https://developers.store.icu/api/cart)

### Content

Manage store content:

```http
GET /api/v3/pages
POST /api/v3/pages
GET /api/v3/pages/{id}
PUT /api/v3/pages/{id}
DELETE /api/v3/pages/{id}
```

Content management features:
- Page creation and editing
- Blog post management
- Navigation menus
- Media library
- Metadata handling
- Content scheduling

[Content API Documentation](https://developers.store.icu/api/content)

## Advanced API Features

### GraphQL API

For complex data requirements, use our GraphQL endpoint:

```
POST https://api.store.icu/graphql
```

Benefits of GraphQL:
- Request exactly the data you need
- Combine multiple resources in a single request
- Reduce network overhead
- Strongly typed schema
- Interactive documentation

[GraphQL API Documentation](https://developers.store.icu/api/graphql)

### Bulk Operations

Efficiently manage large datasets:

```http
POST /api/v3/bulk/products/import
POST /api/v3/bulk/customers/export
```

Bulk operation capabilities:
- Asynchronous processing
- CSV and JSON format support
- Progress tracking
- Error handling
- Scheduled operations
- Delta updates

[Bulk Operations Documentation](https://developers.store.icu/api/bulk)

### Webhooks

Subscribe to real-time events:

```http
POST /api/v3/webhooks
GET /api/v3/webhooks
DELETE /api/v3/webhooks/{id}
```

Available event topics:
- `product/created`
- `product/updated`
- `order/created`
- `order/updated`
- `order/fulfilled`
- `customer/created`
- `customer/updated`
- `inventory/updated`

Webhook features:
- Custom HTTP headers
- Signature verification
- Retry configuration
- Event filtering
- Rate limiting
- Logging and debugging

[Webhooks Documentation](https://developers.store.icu/api/webhooks)

### Storefront API

Public-facing API for custom shopping experiences:

```http
GET /api/storefront/v3/products
POST /api/storefront/v3/cart
```

Storefront capabilities:
- Product discovery
- Cart management
- Checkout flow
- Customer authentication
- Order status
- Wishlists

[Storefront API Documentation](https://developers.store.icu/api/storefront)

## API Implementation Examples

### Common Integration Scenarios

Step-by-step guides for popular use cases:

- [Syncing Products with an External System](https://developers.store.icu/guides/product-sync)
- [Building a Custom Order Management System](https://developers.store.icu/guides/order-management)
- [Creating a Custom Reporting Dashboard](https://developers.store.icu/guides/custom-reporting)
- [Implementing Multi-channel Inventory](https://developers.store.icu/guides/multichannel-inventory)
- [Automating Customer Communications](https://developers.store.icu/guides/customer-communications)

### Code Examples

Sample implementations in popular languages:

#### Node.js

```javascript
const axios = require('axios');

async function getProducts() {
  try {
    const response = await axios.get('https://api.store.icu/v3/products', {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response.data);
    throw error;
  }
}
```

#### PHP

```php
<?php
function getProducts() {
  $curl = curl_init();
  curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.store.icu/v3/products",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
      "Authorization: Bearer " . $_ENV['API_TOKEN'],
      "Content-Type: application/json"
    ]
  ]);
  $response = curl_exec($curl);
  curl_close($curl);
  return json_decode($response, true);
}
?>
```

#### Python

```python
import requests

def get_products():
    headers = {
        'Authorization': f'Bearer {os.environ.get("API_TOKEN")}',
        'Content-Type': 'application/json'
    }
    response = requests.get('https://api.store.icu/v3/products', headers=headers)
    response.raise_for_status()
    return response.json()
```

More code examples are available in our [GitHub repository](https://github.com/storeicu/api-examples).

## API Development Tools

### SDKs and Libraries

Official client libraries:

| Language | Repository | Installation |
|----------|------------|-------------|
| JavaScript | [GitHub](https://github.com/storeicu/js-sdk) | `npm install storeicu-sdk` |
| PHP | [GitHub](https://github.com/storeicu/php-sdk) | `composer require storeicu/sdk` |
| Python | [GitHub](https://github.com/storeicu/python-sdk) | `pip install storeicu` |
| Ruby | [GitHub](https://github.com/storeicu/ruby-sdk) | `gem install storeicu` |
| Java | [GitHub](https://github.com/storeicu/java-sdk) | Maven/Gradle |
| C# | [GitHub](https://github.com/storeicu/dotnet-sdk) | NuGet |

### Testing Tools

Resources for API development:

- [API Playground](https://developers.store.icu/playground): Interactive API explorer
- [Postman Collection](https://developers.store.icu/postman): Ready-to-use request collection
- [Mock API Server](https://mock.api.store.icu): For development without live data
- [Webhook Tester](https://developers.store.icu/webhook-tester): Test webhook deliveries
- [Status Dashboard](https://status.api.store.icu): API service status monitoring

## API Best Practices

### Performance Optimization

Techniques to improve API efficiency:

- Use GraphQL for complex data requirements
- Implement resource expansion to reduce requests
- Employ sparse fieldsets to minimize payload size
- Utilize pagination for large collections
- Implement caching where appropriate
- Schedule bulk operations during off-peak hours

### Security Guidelines

Protect your API implementation:

- Store credentials securely
- Rotate access tokens regularly
- Request only necessary OAuth scopes
- Validate webhook signatures
- Implement transport layer security
- Audit API access regularly
- Follow the principle of least privilege

### Error Handling

Best practices for robust applications:

- Implement exponential backoff for rate limit errors
- Add proper exception handling
- Log API responses for troubleshooting
- Design for API unavailability
- Add monitoring and alerting
- Understand error response formats

Example error response:

```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested product could not be found",
    "details": {
      "resource": "product",
      "id": "123456"
    },
    "request_id": "f8dbf208-3a5d-4097-8b88-98e898c6d9d1"
  }
}
```

## Partner-Specific API Features

### White-Labeling

Customize the API experience:

- Custom API domain (api.yourcompany.com)
- Branded documentation
- Custom rate limits
- Partner-specific endpoints
- Dedicated support contacts

Available to Gold and Platinum partners.

### API Analytics

Monitoring tools for partners:

- Usage dashboards
- Client-specific metrics
- Performance analytics
- Error rate monitoring
- Feature adoption tracking
- Quota management

Access these in the [Partner API Dashboard](https://partners.store.icu/api-dashboard).

## API Support

### Troubleshooting Resources

When you encounter issues:

- [API Status Page](https://status.api.store.icu): Check for service disruptions
- [Error Code Reference](https://developers.store.icu/api/errors): Detailed explanation of error codes
- [Troubleshooting Guide](https://developers.store.icu/guides/troubleshooting): Common issues and solutions
- [Partner Forum](https://forum.store.icu): Community assistance
- [API Changelog](https://developers.store.icu/changelog): Recent updates and breaking changes

### Support Channels

Get help with your integration:

- **Email**: api-support@store.icu
- **Partner Portal**: Submit technical tickets
- **Developer Community**: Join discussions
- **Office Hours**: Weekly technical Q&A sessions
- **Integration Review**: Schedule a code review

## Advanced API Topics

### Multi-Store Management

For partners managing multiple client stores:

- Organization-level API access
- Multi-store data aggregation
- Cross-store operations
- Permission management
- Tenant isolation

[Multi-Store API Documentation](https://developers.store.icu/api/multi-store)

### Localization

Internationalization features:

- Multi-currency support
- Language-specific content
- Regional tax handling
- International address formatting
- Timezone-aware operations
- Translation management

[Localization API Documentation](https://developers.store.icu/api/localization)

### Extending the Platform

Build on top of Store.icu:

- Custom field definitions
- Metadata storage
- Workflow customization
- Event-driven programming
- Third-party service connectors
- Custom checkout flows

[Platform Extension Documentation](https://developers.store.icu/api/extensions)

## API Certification Program

Become a certified API integration partner:

1. Complete the API fundamentals course
2. Build a certification integration project
3. Pass the technical assessment
4. Submit integration for review
5. Receive API Specialist certification

[API Certification Details](https://partners.store.icu/certification/api)

## Resources for Clients

Materials to share with merchants:

- [API Overview for Merchants](https://partners.store.icu/resources/merchant-api-guide)
- [API Security FAQ](https://partners.store.icu/resources/api-security-faq)
- [Integration Benefits Guide](https://partners.store.icu/resources/integration-benefits)
- [Technical Requirements Checklist](https://partners.store.icu/resources/technical-requirements)

## Upcoming API Features

Stay informed about our API roadmap:

- Enhanced B2B capabilities (Q3 2025)
- Advanced personalization API (Q4 2025)
- Expanded analytics endpoints (Q1 2026)
- Machine learning product recommendations (Q2 2026)
- Real-time inventory synchronization enhancements (Q3 2025)

For detailed roadmap information, visit the [API Roadmap](https://developers.store.icu/roadmap).
