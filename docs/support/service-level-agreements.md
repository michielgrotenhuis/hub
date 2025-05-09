---
id: service-level-agreements
title: Service Level Agreements
sidebar_label: Service Level Agreements
---

# Service Level Agreements

## Our Commitment to Partners and Clients

Store.icu's Service Level Agreements (SLAs) define our commitments to platform reliability, performance, and support responsiveness. These SLAs ensure that partners can confidently set expectations with clients and deliver dependable ecommerce solutions.

## Partner SLA Structure

Our SLAs are structured by partner tier, with enhanced service levels available as you progress through the partnership program:

| Partner Tier | Standard | Gold | Platinum |
|--------------|----------|------|----------|
| Monthly Fee | $0 | $299 | $799 |
| Uptime Guarantee | 99.9% | 99.95% | 99.99% |
| Support Response | Next business day | 4 business hours | 1 hour 24/7/365 |
| Dedicated Support | No | Yes | Yes + Dedicated TAM |
| Release Preview | No | 14 days | 30 days |

## System Availability

### Uptime Commitments

Store.icu guarantees the following minimum availability for production environments:

| Component | Standard | Gold | Platinum |
|-----------|----------|------|----------|
| Storefront | 99.9% | 99.95% | 99.99% |
| Checkout | 99.95% | 99.97% | 99.99% |
| Admin Dashboard | 99.8% | 99.9% | 99.95% |
| API | 99.9% | 99.95% | 99.99% |
| Payment Processing | 99.95% | 99.97% | 99.99% |

### Maintenance Windows

Scheduled maintenance is excluded from uptime calculations:

| Region | Primary Window | Secondary Window |
|--------|---------------|------------------|
| North America | Wednesdays, 2:00-4:00 AM ET | Sundays, 1:00-3:00 AM ET |
| Europe | Tuesdays, 2:00-4:00 AM CET | Saturdays, 1:00-3:00 AM CET |
| Asia-Pacific | Thursdays, 2:00-4:00 AM JST | Sundays, 1:00-3:00 AM JST |

**Notification Policy:**
- Standard partners: 3 days advance notice
- Gold partners: 5 days advance notice
- Platinum partners: 7 days advance notice

### Emergency Maintenance

For critical security patches or system-critical fixes:

- Platinum partners: Minimum 6 hours advance notice
- Gold partners: Minimum 4 hours advance notice
- Standard partners: Minimum 2 hours advance notice

Emergency maintenance is included in uptime calculations but excluded from financial remedies.

### SLA Exclusions

The following situations are excluded from SLA calculations:

- Force majeure events
- Internet connectivity issues outside our network
- Scheduled maintenance within announced windows
- Issues caused by partner or client customizations
- Client-initiated DDos protection activation
- Development and staging environments

## Performance Standards

### Page Load Times

Maximum server response times for optimized pages:

| Page Type | Standard | Gold | Platinum |
|-----------|----------|------|----------|
| Home Page | < 1.0s | < 0.8s | < 0.6s |
| Category Page | < 1.2s | < 1.0s | < 0.8s |
| Product Page | < 1.2s | < 1.0s | < 0.8s |
| Cart Page | < 1.0s | < 0.8s | < 0.6s |
| Checkout | < 0.8s | < 0.6s | < 0.5s |

Measurements based on:
- Server-side processing time
- Standard theme without custom modifications
- Default feature set
- 95th percentile of requests

### API Performance

API response time commitments:

| Request Type | Standard | Gold | Platinum |
|--------------|----------|------|----------|
| GET (single resource) | < 300ms | < 250ms | < 200ms |
| GET (collection) | < 600ms | < 500ms | < 400ms |
| POST | < 600ms | < 500ms | < 400ms |
| PUT | < 600ms | < 500ms | < 400ms |
| DELETE | < 300ms | < 250ms | < 200ms |

Based on 95th percentile of requests with:
- Valid authentication
- Proper API usage
- Within rate limits
- Standard data volume

### Resource Limits

| Resource | Standard | Gold | Platinum |
|----------|----------|------|----------|
| API Requests per Minute | 60 | 120 | 240 |
| API Requests per Day | 20,000 | 50,000 | 100,000 |
| Maximum Products | 50,000 | 100,000 | Unlimited |
| Maximum Orders (stored) | 100,000 | 250,000 | Unlimited |
| Maximum File Storage | 100 GB | 250 GB | 1 TB |
| Maximum Media Files | 50,000 | 100,000 | Unlimited |

## Support Service Levels

### Support Channels

Available support channels by partner tier:

| Channel | Standard | Gold | Platinum |
|---------|----------|------|----------|
| Email Support | ✓ | ✓ | ✓ |
| Chat Support | ✓ | ✓ | ✓ |
| Phone Support | Limited | ✓ | ✓ |
| Partner Slack | × | ✓ | ✓ |
| Emergency Line | × | × | ✓ |
| On-site Support | × | × | Available* |

*Additional fees may apply

### Response Time Commitments

Maximum initial response time by priority:

| Priority | Definition | Standard | Gold | Platinum |
|----------|------------|----------|------|----------|
| P1 - Critical | Complete store outage; checkout unavailable; data loss | 4 business hours | 1 hour | 15 minutes |
| P2 - High | Significant feature unavailable; severe performance degradation | 8 business hours | 2 hours | 30 minutes |
| P3 - Medium | Non-critical feature unavailable; system performance issues | Next business day | 4 hours | 1 hour |
| P4 - Low | General questions; minor issues; cosmetic problems | 2 business days | Next business day | 4 hours |

Business hours: Monday-Friday, 9:00 AM - 6:00 PM in partner's local time zone

### Resolution Time Targets

Target resolution time by priority:

| Priority | Standard | Gold | Platinum |
|----------|----------|------|----------|
| P1 - Critical | 24 hours | 8 hours | 4 hours |
| P2 - High | 3 business days | 24 hours | 8 hours |
| P3 - Medium | 5 business days | 3 business days | 24 hours |
| P4 - Low | 10 business days | 5 business days | 3 business days |

Resolution time begins after initial response and represents the target for 90% of issues.

### Support Case Limitations

Maximum active support cases:

| Partner Tier | Concurrent Cases | Monthly Case Limit |
|--------------|------------------|-------------------|
| Standard | 5 | 15 |
| Gold | 15 | 50 |
| Platinum | Unlimited | Unlimited |

Additional cases available for purchase if limits are reached.

### Dedicated Support Resources

| Resource | Standard | Gold | Platinum |
|----------|----------|------|----------|
| Dedicated Support Agent | × | ✓ | ✓ |
| Technical Account Manager | × | × | ✓ |
| Solution Architect Hours | Available for purchase | 5 hours/month | 10 hours/month |
| Quarterly Business Review | × | × | ✓ |
| Implementation Consultation | × | 2 hours/quarter | 5 hours/quarter |

## Client Escalation Support

### Level 1 Support (Partner-Delivered)

Partners are expected to provide first-line support covering:

- Basic platform usage questions
- Simple configuration issues
- Template customization
- Content management
- Standard feature functionality

Store.icu provides partners with knowledge base access, training, and support materials to facilitate Level 1 support delivery.

### Level 2 Support (Store.icu-Assisted)

When partners escalate to Store.icu support:

- Complex technical issues
- Platform bugs or unexpected behavior
- Performance troubleshooting
- Integration challenges
- Advanced configuration problems

### Level 3 Support (Store.icu Engineering)

Highest level of technical support involving:

- Critical system issues
- Data recovery needs
- Security incidents
- Custom development review
- Platform architecture consultation

## Release Management

### Release Preview Access

| Release Type | Standard | Gold | Platinum |
|--------------|----------|------|----------|
| Major Releases | No preview | 14-day preview | 30-day preview |
| Minor Releases | No preview | 7-day preview | 14-day preview |
| Patch Releases | No preview | 48-hour preview | 72-hour preview |
| Security Patches | No preview | Same day | Same day |

Preview environments allow partners to test compatibility and prepare clients for upcoming changes.

### Release Notes Timing

| Release Type | Standard | Gold | Platinum |
|--------------|----------|------|----------|
| Major Releases | On release | 14 days before | 30 days before |
| Minor Releases | On release | 7 days before | 14 days before |
| Patch Releases | On release | 48 hours before | 72 hours before |
| Security Patches | After release | Same day | Same day |

### Backward Compatibility

| Release Type | Backward Compatibility Period |
|--------------|------------------------------|
| Major Releases | 12 months |
| Minor Releases | 6 months |
| API Versions | 24 months minimum |
| Deprecated Features | 6 months notice |

## Incident Management

### Incident Communication

| Incident Severity | Communication Method | Update Frequency |
|-------------------|----------------------|------------------|
| Critical | Email, SMS, Status Page, Partner Portal | Every 30 minutes |
| Major | Email, Status Page, Partner Portal | Every 60 minutes |
| Minor | Status Page, Partner Portal | Every 2 hours |
| Maintenance | Status Page, Partner Portal | Start/End of window |

### Incident Retrospectives

| Partner Tier | Retrospective Access | Timing |
|--------------|----------------------|--------|
| Standard | Summary only | Within 7 days |
| Gold | Full report | Within 5 days |
| Platinum | Full report + review call | Within 3 days |

## Disaster Recovery

### Recovery Objectives

| Metric | Standard | Gold | Platinum |
|--------|----------|------|----------|
| Recovery Point Objective (RPO) | 24 hours | 1 hour | 5 minutes |
| Recovery Time Objective (RTO) | 24 hours | 4 hours | 1 hour |

### Backup Frequency

| Store Component | Standard | Gold | Platinum |
|-----------------|----------|------|----------|
| Database | Daily | Hourly | Real-time |
| Media Files | Daily | Daily | Hourly |
| Theme Files | Daily | Hourly | Real-time |
| Configuration | Daily | Hourly | Real-time |

### Backup Retention

| Backup Type | Standard | Gold | Platinum |
|-------------|----------|------|----------|
| Daily Backups | 7 days | 14 days | 30 days |
| Weekly Backups | 4 weeks | 8 weeks | 12 weeks |
| Monthly Backups | 3 months | 6 months | 12 months |
| Annual Backups | None | 1 year | 7 years |

## Security Response

### Security Incident Response Times

| Severity | Definition | Standard | Gold | Platinum |
|----------|------------|----------|------|----------|
| Critical | Active breach; data exposure | 1 hour | 30 minutes | 15 minutes |
| High | Vulnerabilities with exploit risk | 4 hours | 2 hours | 1 hour |
| Medium | Limited exposure vulnerabilities | 24 hours | 8 hours | 4 hours |
| Low | Theoretical vulnerabilities | 72 hours | 48 hours | 24 hours |

### Security Patch Deployment

| Severity | Standard | Gold | Platinum |
|----------|----------|------|----------|
| Critical | Within 24 hours | Within 12 hours | Within 4 hours |
| High | Within 7 days | Within 72 hours | Within 24 hours |
| Medium | Next release | Within 7 days | Within 72 hours |
| Low | Within 90 days | Within 60 days | Within 30 days |

## Financial Remedies

### Service Credits

Credits issued for confirmed SLA violations:

| Violation Type | Standard | Gold | Platinum |
|----------------|----------|------|----------|
| Uptime | 1-5% credit | 5-10% credit | 10-20% credit |
| Response Time | Not eligible | 5% credit | 10% credit |
| Resolution Time | Not eligible | Not eligible | 5% credit |
| Performance | Not eligible | Not eligible | 5% credit |

Credit percentages based on monthly fees and severity of violation.

### Credit Request Process

To request service credits for SLA violations:

1. Submit request within 30 days of incident
2. Provide documentation of the violation
3. Include affected client information
4. Reference incident/ticket numbers
5. Specify requested remedy

Submit requests through the [Partner Portal](https://partners.store.icu/support/sla).

### Maximum Credits

Maximum monthly credit limits:

| Partner Tier | Maximum Monthly Credit |
|--------------|------------------------|
| Standard | 10% of monthly fees |
| Gold | 20% of monthly fees |
| Platinum | 30% of monthly fees |

## Client-Specific SLAs

### Partner-Client Agreements

Partners are responsible for establishing their own SLAs with clients, but must not exceed Store.icu's commitments to partners.

### White-labeled SLA Templates

We provide customizable SLA templates for partners to use with clients:

- [Basic Client SLA Template](https://partners.store.icu/resources/basic-sla-template)
- [Standard Client SLA Template](https://partners.store.icu/resources/standard-sla-template)
- [Premium Client SLA Template](https://partners.store.icu/resources/premium-sla-template)

### Enterprise Client Exceptions

For enterprise clients with custom requirements:

- Joint SLA development available for Platinum partners
- Custom performance benchmarks
- Dedicated infrastructure options
- Enhanced security measures
- Custom compliance requirements

Contact your Partner Success Manager to discuss enterprise exceptions.

## SLA Verification and Reporting

### Monitoring Tools

Partners can access performance and uptime metrics:

| Tool | Standard | Gold | Platinum |
|------|----------|------|----------|
| System Status Dashboard | ✓ | ✓ | ✓ |
| Uptime Reports | Monthly | Weekly | Daily |
| Performance Metrics | Basic | Advanced | Comprehensive |
| Client-specific Monitoring | × | Basic | Advanced |
| Historical Analytics | 30 days | 90 days | 365 days |

Access monitoring tools through the [Partner Portal](https://partners.store.icu/monitoring).

### Regular Reporting

Automated reports delivered to partners:

| Report Type | Standard | Gold | Platinum |
|-------------|----------|------|----------|
| Uptime Summary | Monthly | Weekly | Daily |
| Performance Metrics | Monthly | Weekly | Daily |
| Support Activity | Monthly | Weekly | Daily |
| SLA Compliance | Quarterly | Monthly | Weekly |
| Security Status | × | Monthly | Weekly |

## SLA Updates and Changes

### Notice Periods

| Change Type | Notice Period |
|-------------|---------------|
| Improved SLAs | Immediate |
| Minor Changes | 30 days |
| Major Changes | 90 days |
| SLA Reductions | Next renewal date |

### Feedback Process

Partners can provide input on SLA changes:

- Preview of proposed changes
- Feedback collection period
- Partner advisory board review
- Transition assistance when applicable

Submit feedback through the [SLA Feedback Form](https://partners.store.icu/feedback/sla).

## Partner Support Resources

### Support Documentation

Comprehensive resources to assist partners:

- [Support Knowledge Base](https://partners.store.icu/knowledge)
- [Troubleshooting Guides](https://partners.store.icu/troubleshooting)
- [Common Issues Database](https://partners.store.icu/common-issues)
- [Video Tutorial Library](https://partners.store.icu/videos)
- [Configuration Best Practices](https://partners.store.icu/best-practices)

### Support Training

Resources to improve support capabilities:

- [Support Delivery Certification](https://partners.store.icu/certification/support)
- [Technical Support Workshops](https://partners.store.icu/workshops)
- [Client Communication Templates](https://partners.store.icu/templates)
- [Escalation Process Training](https://partners.store.icu/escalation)

### Support Tools

Tools available to partners:

- [Partner Support Portal](https://partners.store.icu/support)
- [Diagnostic Utilities](https://partners.store.icu/diagnostics)
- [Status Monitoring Dashboard](https://partners.store.icu/status)
- [Support Case Management](https://partners.store.icu/cases)
- [Client Communication Tools](https://partners.store.icu/communication)

## Contact Information

### Standard Support

- **Email**: partner-support@store.icu
- **Chat**: Available in Partner Portal
- **Hours**: Monday-Friday, 9:00 AM - 6:00 PM (partner's local time)

### Gold & Platinum Support

- **Email**: priority-support@store.icu
- **Chat**: Available in Partner Portal
- **Phone**: +1-800-PARTNER
- **Hours**: 
  - Gold: Monday-Friday, 8:00 AM - 8:00 PM (partner's local time)
  - Platinum: 24/7/365

### Emergency Support (Platinum Only)

- **Emergency Line**: +1-888-STOREICU
- **Email**: emergency@store.icu
- **Available**: 24/7/365
- **Response**: 15 minutes guaranteed

For questions about your Service Level Agreement, contact your Partner Success Manager or email partner-success@store.icu.
