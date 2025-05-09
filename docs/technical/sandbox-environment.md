---
id: sandbox-environment
title: Sandbox Environment
sidebar_label: Sandbox Environment
---

# Sandbox Environment

## Development and Testing Resources

Store.icu provides partners with fully functional sandbox environments to support development, testing, and client demonstrations. These environments mirror the production platform but operate in an isolated, safe space where you can experiment without affecting live stores.

## Sandbox Environment Types

### Partner Development Sandbox

Every certified partner receives a permanent development sandbox for internal use:

- Unlimited store creation within your sandbox
- Persistent environment that doesn't expire
- Automatically updated with new platform features
- Accessible to your entire team via your partner credentials
- Includes all features available in your partner tier

**Access URL:** https://sandbox.store.icu/partners/[your-partner-id]

### Client Demo Sandbox

Create temporary demonstration environments for prospective clients:

- Quickly spin up pre-configured stores for sales demos
- Choose from industry-specific templates (fashion, electronics, etc.)
- Populated with realistic sample products and orders
- Valid for 30 days (extendable upon request)
- White-labeled with client branding for a personalized experience

**Access URL:** https://sandbox.store.icu/demos/[demo-id]

### Implementation Sandbox

When a client signs up, you get an implementation sandbox:

- Exact replica of the future production environment
- Used during the build and configuration phase
- Simplified migration to production when ready to launch
- Shared access between your team and client stakeholders
- Connected to test endpoints for payment gateways and shipping providers

**Access URL:** https://sandbox.store.icu/implementation/[client-id]

### Training Sandbox

Dedicated environments for client training:

- Reset functionality to return to a clean state
- Simulated customer data for order processing practice
- Intentional error states for troubleshooting training
- Sample scenarios covering common workflows
- Ability to slow down processes for step-by-step instruction

**Access URL:** https://sandbox.store.icu/training/[training-id]

## Sandbox Capabilities

All sandbox environments include:

### Core Functionality

- Complete store setup and configuration
- Full product management
- Order processing simulation
- Customer management
- Marketing tools and promotions
- Content management
- Design customization

### Technical Features

- API access with sandbox credentials
- Webhook testing endpoints
- Integration with sandbox versions of common third-party services
- Custom theme development tools
- Database seeding options for testing with large datasets
- Performance testing tools (Gold and Platinum partners only)

### Testing Tools

- Simulated traffic generation
- Time manipulation (for testing scheduled events)
- Network condition simulation (latency, packet loss)
- Error injection for edge case testing
- Automated test script execution

## Sandbox Limitations

To maintain system integrity and security, sandbox environments have certain limitations:

- Email delivery is simulated (messages viewable in dashboard but not sent)
- Payment processing uses test credentials only
- External shipping APIs connect to carrier test environments
- Maximum of 10,000 test orders per sandbox
- Up to 50GB storage per partner across all sandboxes
- Rate limits at 5x production allowances

## Creating a Sandbox Environment

### Partner Development Sandbox

Your permanent development sandbox is automatically provisioned upon partner certification.

### Client Demo Sandbox

1. Log in to the [Partner Portal](https://partners.store.icu)
2. Navigate to "Resources" → "Demo Environments"
3. Click "Create New Demo"
4. Select industry template and initial configuration
5. Add client branding (optional)
6. Set expiration date (default 30 days)
7. Click "Generate Demo Environment"

### Implementation Sandbox

1. Create new client in the Partner Portal
2. Navigate to client profile
3. Click "Provision Implementation Sandbox"
4. Select client's subscription tier
5. Configure initial settings and modules
6. Click "Create Implementation Environment"

### Training Sandbox

1. Navigate to client profile in the Partner Portal
2. Click "Resources" → "Training"
3. Select "Create Training Environment"
4. Choose training modules to include
5. Set access permissions for client team members
6. Click "Provision Training Sandbox"

## Sandbox Management

### User Management

- Add unlimited team members to your development sandbox
- Assign specific roles and permissions to users
- Create temporary access links for stakeholders
- Monitor user activity and session history

### Data Management

- Import/export product data
- Generate test orders and customers
- Reset specific modules to default state
- Create and restore sandbox snapshots
- Clone environments for A/B testing

### Environment Controls

- Restart services
- Clear cache
- Update to latest platform version
- Roll back to previous versions (Platinum partners only)
- Schedule automatic refreshes

## Testing Payment Gateways

Each sandbox connects to test environments for popular payment providers:

| Payment Provider | Test Cards | Documentation |
|-----------------|------------|---------------|
| Stripe | 4242 4242 4242 4242 | [Stripe Test Docs](https://stripe.com/docs/testing) |
| PayPal | Sandbox accounts | [PayPal Sandbox](https://developer.paypal.com/docs/api-basics/sandbox/) |
| Square | Specific test cards | [Square Testing](https://developer.squareup.com/docs/testing/test-values) |
| Adyen | Test card generator | [Adyen Test Cards](https://docs.adyen.com/development-resources/test-cards/test-card-numbers) |
| Braintree | Test card numbers | [Braintree Testing](https://developer.paypal.com/braintree/docs/guides/credit-cards/testing-go-live) |

## Simulating Shipping Providers

Test shipping calculations and label generation with sandbox APIs:

- USPS, FedEx, UPS, DHL test environments
- Simulated tracking numbers and delivery events
- International shipping documentation testing
- Address validation in test mode

## Best Practices for Using Sandboxes

### Development

- Use version control to track customizations
- Implement CI/CD pipelines for testing
- Maintain a clean "golden" snapshot for baseline testing
- Document all customizations thoroughly
- Test across multiple devices and browsers

### Client Demonstrations

- Prepare specific demonstration flows in advance
- Create realistic scenarios relevant to the client's business
- Pre-populate with industry-appropriate test data
- Customize the theme to match client branding
- Rehearse demos thoroughly before client presentations

### Implementation

- Start with a documented configuration plan
- Use checklists to ensure all elements are implemented
- Include client stakeholders in testing phases
- Conduct UAT in the sandbox before migrating to production
- Create a detailed migration plan for go-live

## Sandbox Support

If you encounter issues with your sandbox environments:

- Check the [Sandbox FAQ](./sandbox-faq) for common issues
- Visit the Developer Forum for peer assistance
- Submit a support ticket tagged "Sandbox"
- Contact your Partner Success Manager

For urgent sandbox support, call the partner hotline at +1-800-PARTNER.

## Sandbox-to-Production Migration

When ready to go live with a client store:

1. Run the pre-launch validation check in the sandbox
2. Generate migration report
3. Schedule migration with Store.icu operations team
4. Prepare DNS and domain configuration
5. Complete final UAT after migration

The migration process typically takes 2-4 hours depending on store complexity.

## Additional Resources

- [Sandbox API Documentation](https://developers.store.icu/sandbox-api)
- [Testing Best Practices Guide](./testing-best-practices)
- [Client Demo Playbook](./client-demo-playbook)
- [Sample Test Scripts](./sample-test-scripts)
- [Sandbox Troubleshooting Guide](./sandbox-troubleshooting)

For any questions about sandbox environments, contact partner-support@store.icu.
