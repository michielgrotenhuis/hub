---
id: system-availability
title: System Availability
sidebar_label: System Availability
---

# System Availability

## Platform Reliability & Performance

Store.icu is committed to providing your clients with a highly available, reliable, and performant ecommerce platform. This page outlines our availability standards, maintenance procedures, and performance metrics to help you set appropriate expectations with your clients.

## Service Level Agreement (SLA)

### Uptime Commitment

Store.icu guarantees the following uptime percentages based on partner tier:

| Partner Tier | Guaranteed Uptime | Maximum Monthly Downtime |
|--------------|-------------------|-----------------------|
| Platinum     | 99.99%            | 4.3 minutes           |
| Gold         | 99.95%            | 21.9 minutes          |
| Silver       | 99.9%             | 43.8 minutes          |

**Note:** Scheduled maintenance windows are excluded from these calculations.

### Definition of Downtime

Downtime is defined as periods when the core shopping functionality (product browsing, cart, checkout) is unavailable to all users. Individual feature unavailability does not constitute downtime.

### Monitoring and Reporting

- Our systems are monitored 24/7/365 by automated tools and our operations team
- Current system status is always available at [status.store.icu](https://status.store.icu)
- Partners can subscribe to real-time status notifications via email, SMS, or Slack

## Scheduled Maintenance

To ensure optimal performance and security, Store.icu conducts regular maintenance:

### Standard Maintenance Windows

| Region | Primary Window | Secondary Window |
|--------|---------------|------------------|
| North America | Wednesdays, 2:00-4:00 AM ET | Sundays, 1:00-3:00 AM ET |
| Europe | Tuesdays, 2:00-4:00 AM CET | Saturdays, 1:00-3:00 AM CET |
| Asia-Pacific | Thursdays, 2:00-4:00 AM JST | Sundays, 1:00-3:00 AM JST |

### Maintenance Communication

- Routine maintenance is announced at least 7 days in advance
- Emergency maintenance may be performed with shorter notice for critical security patches
- All maintenance notifications are sent via email and posted in the Partner Portal

### Maintenance Impact

Most maintenance operations are performed without any system downtime. When downtime is necessary:

- Maintenance is conducted during low-traffic periods
- Average maintenance downtime is less than 30 minutes
- Checkout functions implement a grace period to prevent transaction interruptions

## Disaster Recovery

Store.icu maintains comprehensive disaster recovery procedures:

- All data is backed up in real-time to multiple geographically distributed locations
- Recovery Point Objective (RPO): 5 minutes
- Recovery Time Objective (RTO): 1 hour
- Disaster recovery drills are conducted quarterly
- Full disaster recovery documentation is available to Platinum partners

## Performance Metrics

### Global Response Times

Store.icu's infrastructure is distributed across global data centers to ensure fast loading times worldwide:

| Region | Average Page Load | 95th Percentile |
|--------|------------------|----------------|
| North America | < 1.2 seconds | < 2.0 seconds |
| Europe | < 1.3 seconds | < 2.1 seconds |
| Asia | < 1.5 seconds | < 2.3 seconds |
| Australia | < 1.4 seconds | < 2.2 seconds |
| South America | < 1.6 seconds | < 2.5 seconds |
| Africa | < 1.8 seconds | < 2.7 seconds |

### Traffic Capacity

The platform is designed to handle varying traffic levels:

- Standard stores: Up to 10,000 concurrent users
- Enterprise stores: Up to 100,000 concurrent users
- Black Friday readiness: Annual stress testing to 5x normal peak traffic
- Auto-scaling infrastructure to handle unexpected traffic spikes

## Security and Compliance

Our availability standards are complemented by rigorous security measures:

- PCI DSS Level 1 certified
- SOC 2 Type II compliant
- 99.999% protection rate against DDoS attacks
- Web Application Firewall (WAF) with real-time threat intelligence

## Platform Status Communication

### Status Dashboard

The [status.store.icu](https://status.store.icu) dashboard provides:

- Real-time system status for all platform components
- Incident history and resolution details
- Scheduled maintenance announcements
- Performance metrics and trends

### Incident Response

During service incidents:

1. Initial notification within 15 minutes of confirmed incidents
2. Status updates at minimum 30-minute intervals
3. Post-incident reports within 24 hours of resolution
4. Root cause analysis shared with partners within 72 hours

## Setting Client Expectations

As a partner, it's important to communicate these availability standards to your clients:

- Include SLA information in your client contracts
- Set realistic expectations regarding maintenance windows
- Provide clients with access to status.store.icu
- Establish your own communication protocol for platform incidents

## High-Traffic Event Planning

For clients expecting high-traffic events (product launches, major sales, etc.):

1. Notify Store.icu at least 14 days in advance through the Partner Portal
2. Complete the High-Traffic Event Checklist
3. Schedule a pre-event review with our platform engineers
4. Implement recommended caching and performance optimizations

## Client-Specific Performance Monitoring

Gold and Platinum partners can access:

- Store-specific performance dashboards
- Custom alerting thresholds
- Monthly performance reports
- Performance optimization recommendations

Access these features in the Partner Portal under "Client Performance."

## Support During Incidents

During system incidents, our support channels are prioritized:

- Emergency hotline: +1-888-STORE-911
- Priority support tickets tagged with "System Incident"
- Partner-specific Slack channel for real-time updates

## Historical Availability

Our platform has maintained the following availability over recent periods:

| Period | Actual Uptime | Excluding Maintenance |
|--------|---------------|----------------------|
| Last 30 days | 99.97% | 100% |
| Last 90 days | 99.96% | 99.99% |
| Last 12 months | 99.95% | 99.98% |

For a detailed availability history, visit the [Performance History](https://partners.store.icu/availability) section in the Partner Portal.

## Questions and Concerns

For any questions regarding system availability or to report suspected issues:

- Contact your Partner Success Manager
- Email operations@store.icu
- Call the partner support line: +1-800-PARTNER

For emergency support, always use the emergency hotline.
