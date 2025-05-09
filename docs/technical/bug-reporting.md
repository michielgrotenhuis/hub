---
id: bug-reporting
title: Bug Reporting
sidebar_label: Bug Reporting
---

# Bug Reporting

## Reporting and Tracking Platform Issues

Effective bug reporting is essential for maintaining the quality and reliability of the Store.icu platform. This guide outlines the processes, best practices, and tools available to partners for reporting and tracking issues.

## Bug Reporting Process

### When to Report a Bug

Report an issue when you encounter:

- Unexpected behavior that differs from documentation
- System errors or crash scenarios
- Performance degradation
- Security vulnerabilities
- UI inconsistencies or rendering problems
- Functionality that doesn't work as described
- API responses that don't match specifications

### Before Submitting a Report

To ensure efficient resolution, complete these pre-reporting steps:

1. **Verify the issue**:
   - Confirm it's reproducible in a clean environment
   - Test in multiple browsers or devices if interface-related
   - Check if the issue occurs in both sandbox and production

2. **Check known issues**:
   - Review the [Known Issues Dashboard](https://partners.store.icu/known-issues)
   - Check the [System Status Page](https://status.store.icu)
   - Search existing bug reports in the Partner Portal

3. **Gather information**:
   - Document steps to reproduce
   - Capture screenshots or screen recordings
   - Note error messages and codes
   - Record affected browsers/devices
   - Document affected store URLs

## Reporting Channels

### Standard Bug Reporting

For most issues, use the Partner Portal bug reporting system:

1. Log in to the [Partner Portal](https://partners.store.icu)
2. Navigate to "Support" → "Bug Reports"
3. Click "New Bug Report"
4. Complete the bug report form
5. Attach supporting files (screenshots, logs, etc.)
6. Submit the report

### Critical Issues

For urgent issues impacting client operations:

1. Submit through the Partner Portal with "Critical" priority
2. Call the Partner Support Hotline: +1-800-PARTNER
3. Email urgent-support@store.icu with "CRITICAL BUG" in the subject line

**Critical Issue Criteria**:
- Store checkout is non-functional
- Payment processing failures
- Complete site outage
- Data loss scenarios
- Security breaches

### Security Vulnerabilities

For potential security issues, use our responsible disclosure process:

1. Email security@store.icu with details
2. Use PGP encryption with our [public key](https://partners.store.icu/security-key)
3. Do not disclose the vulnerability publicly
4. Allow 24 hours for initial response

## Bug Report Components

### Required Information

Every bug report must include:

| Component | Description | Example |
|-----------|-------------|---------|
| Summary | Brief description of the issue | "Product variants not displaying on mobile devices" |
| Environment | Where the issue occurs | "Production store, Chrome 98.0, macOS 12.3" |
| Steps to Reproduce | Numbered steps to trigger the bug | "1. Navigate to any product page, 2. Select a color variant..." |
| Expected Result | What should happen | "Variant selection should update the product image" |
| Actual Result | What actually happens | "No image update occurs when variant is selected" |
| Impact | Effect on merchants or customers | "Customers cannot see product variations, affecting purchasing decisions" |
| Frequency | How often the issue occurs | "100% reproducible" or "Intermittent - 30% of attempts" |

### Helpful Additional Information

Including these details expedites resolution:

- Store URL where issue occurs
- Affected user accounts (for user-specific issues)
- Browser console logs
- Network request/response data
- Video recording of the issue
- Date and time when first observed
- Any recent changes that might relate to the issue

## Bug Priority Levels

We categorize bugs by impact and urgency:

### P1: Critical

- Complete loss of critical functionality
- Security vulnerabilities
- Data integrity issues
- Payment processing failures
- Response time: 1 hour
- Resolution target: 24 hours

### P2: High

- Major feature partially non-functional
- Significant performance degradation
- Checkout process impaired but functional
- Incorrect calculations affecting orders
- Response time: 4 hours
- Resolution target: 3 business days

### P3: Medium

- Minor feature non-functional
- UI issues affecting usability
- Non-critical data inconsistencies
- Moderate performance issues
- Response time: 1 business day
- Resolution target: 5-10 business days

### P4: Low

- Cosmetic issues
- Minor usability concerns
- Documentation discrepancies
- Feature enhancement requests
- Response time: 2 business days
- Resolution target: Next release cycle

## Bug Tracking Lifecycle

Each reported bug follows this workflow:

1. **Submitted**: Initial report received
2. **Triage**: Bug verified and prioritized
3. **Assigned**: Allocated to development team
4. **In Progress**: Active development work
5. **Fixed**: Solution implemented
6. **Verification**: QA testing of fix
7. **Closed**: Resolution confirmed
8. **Released**: Fix deployed to production

Partners receive notifications at each stage through their preferred communication channel.

## Bug Tracking Dashboard

Monitor all submitted issues in the Partner Portal:

- **My Reports**: Bugs you've submitted
- **Client Impact**: Issues affecting your clients
- **Release Notes**: Upcoming fixes in future releases
- **Subscriptions**: Issues you're following
- **History**: Previously resolved bugs

Access the [Bug Tracking Dashboard](https://partners.store.icu/support/bug-tracker) to manage your reports.

## Communicating with Clients

### When to Inform Clients

Guidelines for client communication:

- **Always Inform**: For issues directly impacting their operations
- **Selective Communication**: For issues with workarounds
- **Development Discretion**: For minor issues being rapidly addressed

### Client Communication Templates

Access our [Client Communication Templates](https://partners.store.icu/resources/client-templates) for:

- Initial issue acknowledgment
- Progress updates
- Resolution notification
- Preventative measures

### Managing Client Expectations

Best practices:

- Provide realistic timeframes based on bug priority
- Explain technical limitations without placing blame
- Offer workarounds when available
- Set clear follow-up schedules

## Bug Bounty Program

Partners can participate in our Bug Bounty program:

- Report previously unknown issues
- Earn credits based on issue severity
- Receive recognition in our security hall of fame
- Access advanced security documentation

[Bug Bounty Program Details](https://partners.store.icu/bug-bounty)

## Feature Requests vs. Bugs

Understanding the difference:

### Bug Characteristics

- Existing functionality not working as designed
- Documented feature behaving incorrectly
- Platform error or crash
- Security vulnerability

### Feature Request Characteristics

- New functionality not currently offered
- Enhancement to existing functionality
- Alternative approach to current design
- Integration with new third-party services

For feature requests, use the [Feature Request Portal](https://partners.store.icu/feature-requests) instead of bug reporting.

## Common Bug Categories

### Checkout Issues

- Payment gateway integration failures
- Discount calculation errors
- Tax computation discrepancies
- Shipping option display problems

### Catalog Management

- Product import/export errors
- Variant management issues
- Category hierarchy problems
- Search functionality failures

### Order Processing

- Order status update failures
- Notification delivery issues
- Fulfillment integration problems
- Return processing errors

### User Experience

- Mobile responsiveness issues
- Accessibility violations
- Performance bottlenecks
- Cross-browser compatibility

## Testing Before Reporting

### Sandbox Testing

Use sandbox environments to validate issues:

1. Create a clean test store
2. Reproduce the issue step-by-step
3. Document exact conditions
4. Test with multiple user roles

### Browser Testing

For interface issues, test in multiple environments:

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Android Chrome)
- Different viewport sizes

### Network Environment Testing

Eliminate connectivity variables:

- Test on multiple networks
- Check with and without VPN
- Verify DNS resolution

## Effective Bug Documentation

### Screenshot Best Practices

- Capture the entire screen with browser URL visible
- Highlight the issue area
- Show before/after states if applicable
- Include developer console when relevant

### Video Recording Guidelines

- Keep recordings under 2 minutes
- Narrate steps if possible
- Focus on the specific issue
- Use screen annotation tools to highlight problems

### Code Sample Formatting

When including code:

- Use formatted code blocks
- Identify the file or component
- Highlight relevant lines
- Include console output

## Bug Report Examples

### Example: Well-Formatted Bug Report

```
Title: Product variant images not updating on mobile Safari

Environment: 
- Production store: client-store.store.icu
- iOS 15.4, Safari
- iPhone 13 Pro
- Issue not present on desktop browsers

Steps to Reproduce:
1. Navigate to any product with color variants (example: /products/summer-t-shirt)
2. Scroll to variant selection
3. Tap on a different color option (e.g., from "Blue" to "Red")

Expected Result:
Product image should update to show the selected color variant

Actual Result:
Image remains unchanged, still showing the default variant

Impact:
Customers cannot see how different variants look, potentially reducing conversions

Frequency:
100% reproducible on iOS Safari, not occurring on Chrome iOS

Additional Information:
- Console shows error: "Unable to update product image: undefined"
- Issue began after the May 15 platform update
- Attached: screen recording demonstrating the issue
```

### Example: Poorly Formatted Bug Report

```
Title: Images broken

Description:
Images don't work right when clicking. Please fix ASAP as customer is angry.
```

## Support for Bug Identification

### Diagnostic Tools

Partners have access to:

- [Store.icu Inspector](https://partners.store.icu/tools/inspector): Browser extension for technical analysis
- [API Tester](https://partners.store.icu/tools/api-tester): Test API endpoints and responses
- [Theme Debugger](https://partners.store.icu/tools/theme-debugger): Identify theme-specific issues
- [Performance Analyzer](https://partners.store.icu/tools/performance): Identify bottlenecks and slow components

### Logs and Diagnostics

Access to system logs:

- Store Error Logs: `/admin/logs/errors`
- API Request Logs: `/admin/logs/api`
- Admin Action Logs: `/admin/logs/actions`
- Customer Journey Logs: `/admin/logs/customers`

## Bug Reporting Etiquette

### Do's and Don'ts

**Do:**
- Report each distinct issue separately
- Provide objective, factual information
- Update the report with new findings
- Test thoroughly before reporting
- Respect confidentiality of client data

**Don't:**
- Combine multiple issues in one report
- Use subjective or emotional language
- Assign blame or criticize development
- Share confidential client information
- Publicly disclose bugs before resolution

## Bug Resolution and Verification

### Verification Process

After a fix is implemented:

1. You'll receive a notification that the bug is ready for verification
2. Test the fix in the environment specified (sandbox or production)
3. Provide feedback through the bug report interface
4. Confirm if the issue is resolved or still present

### Regression Testing

After major fixes:

1. Test related functionality to ensure no new issues
2. Verify on all affected platforms and devices
3. Check with different user permission levels
4. Report any new issues as separate bug reports

## Additional Resources

- [Bug Reporting Video Tutorial](https://partners.store.icu/training/bug-reporting)
- [Technical Troubleshooting Guide](https://partners.store.icu/troubleshooting)
- [Common Issues and Solutions](https://partners.store.icu/known-issues/solutions)
- [Upcoming Fixes and Releases](https://partners.store.icu/roadmap/fixes)

## Bug Reporting Q&A

**Q: How long should it take to receive a response to my bug report?**  
A: Initial response times vary by priority level, from 1 hour for critical issues to 2 business days for low-priority items.

**Q: Can I update a bug report after submission?**  
A: Yes, you can add comments and attachments to existing reports through the Partner Portal.

**Q: What if I discover my reported "bug" is actually user error?**  
A: Simply update the report with your findings and request it be closed as "Not a Bug."

**Q: How are bugs prioritized for fixing?**  
A: We prioritize based on impact severity, number of affected stores, availability of workarounds, and technical complexity.

For additional questions about bug reporting, contact partner-support@store.icu.
