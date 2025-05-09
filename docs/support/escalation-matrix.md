---
id: escalation-matrix
title: Escalation Matrix
sidebar_label: Escalation Matrix
---

# Escalation Matrix

## Streamlined Issue Resolution Pathways

The Store.icu Escalation Matrix provides partners with clear guidelines for efficiently routing and elevating issues based on their nature, urgency, and complexity. Following these structured pathways ensures the fastest possible resolution and maintains clear communication throughout the process.

## General Escalation Principles

### Before Escalation

Prior to escalating any issue, partners should:

1. **Attempt initial troubleshooting** using the [Knowledge Base](./knowledge-base) and [Troubleshooting Guide](./troubleshooting)
2. **Document reproduction steps** with screenshots or recordings
3. **Verify the issue** in a clean environment when possible
4. **Collect relevant information** (store URL, error messages, affected users)
5. **Check system status** at [status.store.icu](https://status.store.icu) to confirm no known outages

### Escalation Levels

The Store.icu support structure consists of three tiers:

| Level | Handled By | Scope |
|-------|------------|-------|
| L1 - First Response | Partner Support Team | Common issues, configuration assistance, general inquiries |
| L2 - Technical Support | Senior Technical Specialists | Complex technical issues, advanced configuration, integration problems |
| L3 - Engineering | Product Development Team | Platform bugs, architectural issues, security incidents, data recovery |

### Partner Tier Considerations

Escalation paths and response times vary based on partner tier:

| Partner Tier | Support Channels | Priority Levels | Direct Escalation Rights |
|--------------|------------------|----------------|--------------------------|
| Standard | Email, Portal | Standard | L1 → L2 only |
| Gold | Email, Portal, Chat, Phone | Standard, High | L1 → L2 → L3 |
| Platinum | Email, Portal, Chat, Phone, Dedicated Line | Standard, High, Critical | Direct access to any level |

## Issue-Specific Escalation Paths

### Technical Issues

#### Platform Functionality

For problems with core platform features:

| Severity | Initial Contact | Escalation Pathway | Response Time |
|----------|----------------|-------------------|---------------|
| Critical - Store Down | L1: Emergency Line +1-800-PARTNER | L1 → L3 (immediate) | 15 min - 1 hour |
| High - Major Feature Unavailable | L1: Partner Portal (High Priority) | L1 → L2 (4 hours) → L3 (8 hours) | 1-4 hours |
| Medium - Feature Partially Working | L1: Partner Portal (Medium Priority) | L1 → L2 (24 hours) → L3 (48 hours) | 4-8 hours |
| Low - Minor Issues | L1: Partner Portal (Low Priority) | L1 → L2 (if needed) | 1-2 business days |

**Required Information:**
- Detailed issue description
- Steps to reproduce
- Error messages and screenshots
- Browser/device information
- Recent changes to the store

**Example Escalation:**
```
Issue: Checkout process fails at payment step
Severity: Critical (revenue impact)
Initial Contact: Emergency Support Line
Information Provided: Store URL, error screenshot, affected payment methods
Escalation Trigger: No resolution within 30 minutes
Secondary Contact: Partner Success Manager + L3 Engineering (via Partner Portal)
```

#### Integration Issues

For problems with third-party integrations:

| Integration Type | Initial Contact | Escalation Pathway | Response Time |
|------------------|----------------|-------------------|---------------|
| Payment Gateways | L1: Partner Portal (High Priority) | L1 → L2 (4 hours) → Payment Specialist (8 hours) | 1-4 hours |
| Shipping Providers | L1: Partner Portal (Medium Priority) | L1 → L2 (8 hours) → Integration Team (24 hours) | 4-8 hours |
| Marketing Tools | L1: Partner Portal (Medium Priority) | L1 → Marketing Specialist (24 hours) | 8-24 hours |
| ERP/Accounting | L1: Partner Portal (Medium Priority) | L1 → L2 (24 hours) → Integration Team (48 hours) | 8-24 hours |
| Custom Integrations | L1: Partner Portal (Standard Priority) | L1 → L2 (24 hours) → Developer Relations (48 hours) | 24-48 hours |

**Required Information:**
- Integration name and version
- Authentication method
- Error responses
- API request/response logs
- Integration configuration details

**Example Escalation:**
```
Issue: Stripe payment gateway returning error code 9002
Severity: High (blocking transactions)
Initial Contact: Partner Portal (High Priority)
Information Provided: API logs, error responses, configuration screenshot
Escalation Trigger: No resolution within 4 hours
Secondary Contact: L2 Technical Support + Payment Integrations Team
```

#### Performance Issues

For store speed and resource problems:

| Issue Type | Initial Contact | Escalation Pathway | Response Time |
|------------|----------------|-------------------|---------------|
| Site-wide Slowdowns | L1: Partner Portal (High Priority) | L1 → L2 (4 hours) → Performance Team (8 hours) | 2-6 hours |
| Specific Page Performance | L1: Partner Portal (Medium Priority) | L1 → L2 (24 hours) → L3 (if needed) | 8-24 hours |
| API Response Time | L1: Partner Portal (Medium Priority) | L1 → L2 (8 hours) → API Team (24 hours) | 4-12 hours |
| Resource Limitations | L1: Partner Portal (Medium Priority) | L1 → L2 (8 hours) → Architecture Team (48 hours) | 8-24 hours |
| Database Performance | L1: Partner Portal (High Priority) | L1 → L2 (4 hours) → Database Team (8 hours) | 4-8 hours |

**Required Information:**
- Performance metrics
- Server response times
- Browser network timeline
- Steps to reproduce slowdowns
- Recent changes or traffic patterns

**Example Escalation:**
```
Issue: Admin dashboard taking >15 seconds to load
Severity: Medium (affecting merchant operations)
Initial Contact: Partner Portal (Medium Priority)
Information Provided: Performance timeline, browser console output
Escalation Trigger: No improvement within 24 hours
Secondary Contact: L2 Technical Support with performance team cc'd
```

### Account and Billing Issues

#### Partner Account Management

For partner program-related issues:

| Issue Type | Initial Contact | Escalation Pathway | Response Time |
|------------|----------------|-------------------|---------------|
| Account Access | Partner Success Manager | PSM → Account Security (4 hours) | 1-4 hours |
| Billing Discrepancies | Partner Portal (Billing Section) | Billing Team → Finance Manager (48 hours) | 24-48 hours |
| Contract Questions | Partner Success Manager | PSM → Legal Team (if needed) | 24-48 hours |
| Commission Issues | Partner Portal (Revenue Section) | Revenue Team → Finance Manager (48 hours) | 24-48 hours |
| Partner Tier Changes | Partner Success Manager | PSM → Partner Program Director (if needed) | 24-48 hours |

**Required Information:**
- Partner ID
- Invoice numbers
- Transaction details
- Contract references
- Specific account access issues

**Example Escalation:**
```
Issue: Missing commission payment for Q2
Severity: Medium (financial impact)
Initial Contact: Partner Portal (Revenue Section)
Information Provided: Client list, expected vs. received amount
Escalation Trigger: No response within 48 hours
Secondary Contact: Partner Success Manager + Finance Department
```

#### Client Account Management

For merchant account issues:

| Issue Type | Initial Contact | Escalation Pathway | Response Time |
|------------|----------------|-------------------|---------------|
| Store Creation Problems | L1: Partner Portal (Medium Priority) | L1 → Provisioning Team (8 hours) | 4-8 hours |
| User Access Issues | L1: Partner Portal (Medium Priority) | L1 → L2 (8 hours) → Security Team (if needed) | 4-8 hours |
| Subscription Changes | Partner Success Manager | PSM → Account Management (24 hours) | 24 hours |
| Client Transfer | Partner Success Manager | PSM → Account Management (48 hours) | 48-72 hours |
| Account Termination | Partner Success Manager | PSM → Account Management (24 hours) | 24-48 hours |

**Required Information:**
- Store URL
- Account details
- User information
- Subscription specifics
- Requested changes

**Example Escalation:**
```
Issue: Unable to create admin user for new client store
Severity: Medium (delaying implementation)
Initial Contact: Partner Portal (Medium Priority)
Information Provided: Store URL, error messages, steps taken
Escalation Trigger: No resolution within 8 hours
Secondary Contact: L2 Technical Support
```

### Security and Compliance Issues

#### Security Incidents

For potential or confirmed security issues:

| Incident Type | Initial Contact | Escalation Pathway | Response Time |
|---------------|----------------|-------------------|---------------|
| Data Breach | Security Hotline: +1-888-SECURITY | Security Team → CISO (immediate) | 15-30 minutes |
| Account Compromise | Security Portal (Critical Priority) | Security Team → Account Security (immediate) | 30-60 minutes |
| Suspicious Activity | Security Portal (High Priority) | Security Team → Fraud Prevention (4 hours) | 1-4 hours |
| Vulnerability Report | Security Portal (Medium Priority) | Security Team → Engineering (8 hours) | 4-8 hours |
| PCI Compliance | Security Portal (Medium Priority) | Compliance Team → Security (if needed) | 24-48 hours |

**Required Information:**
- Detailed incident description
- Affected systems/accounts
- Observed suspicious activity
- Potential data exposure
- Actions taken so far

**Example Escalation:**
```
Issue: Suspected unauthorized admin account access
Severity: Critical (security incident)
Initial Contact: Security Hotline
Information Provided: Store URL, suspicious activity logs, IP addresses
Escalation Trigger: Immediate escalation to Security Team
Secondary Contact: CISO office if breach confirmed
```

#### Compliance Requests

For regulatory and compliance matters:

| Request Type | Initial Contact | Escalation Pathway | Response Time |
|--------------|----------------|-------------------|---------------|
| GDPR Requests | Compliance Portal | Privacy Team → Legal (if needed) | 24-48 hours |
| Data Processing Queries | Compliance Portal | Privacy Team → Data Protection Officer (if needed) | 24-48 hours |
| Security Questionnaires | Partner Success Manager | PSM → Compliance Team (48 hours) | 48-72 hours |
| Audit Requests | Partner Success Manager | PSM → Compliance Director (72 hours) | 72-96 hours |
| Legal Documentation | Partner Success Manager | PSM → Legal Department (72 hours) | 72-96 hours |

**Required Information:**
- Specific compliance requirement
- Relevant jurisdiction
- Client details
- Deadline requirements
- Documentation needed

**Example Escalation:**
```
Issue: Client requiring specific GDPR documentation
Severity: Medium (compliance requirement)
Initial Contact: Compliance Portal
Information Provided: Client details, specific requirements
Escalation Trigger: No response within 48 hours
Secondary Contact: Partner Success Manager + Privacy Team
```

### Partner Support Issues

#### Training and Enablement

For issues with partner training and resources:

| Issue Type | Initial Contact | Escalation Pathway | Response Time |
|------------|----------------|-------------------|---------------|
| Training Access | Partner Portal (Training Section) | Training Team → Enablement Manager (48 hours) | 24-48 hours |
| Certification Problems | Partner Portal (Certification Section) | Certification Team → Training Director (48 hours) | 24-48 hours |
| Resource Availability | Partner Portal (Resources Section) | Content Team → Knowledge Manager (48 hours) | 24-48 hours |
| Documentation Errors | Documentation Feedback Form | Documentation Team → Product Team (if needed) | 48-72 hours |
| Enablement Requests | Partner Success Manager | PSM → Enablement Team (72 hours) | 48-72 hours |

**Required Information:**
- Specific resource/training
- Access issue details
- Error messages
- Required materials
- Deadlines if applicable

**Example Escalation:**
```
Issue: Certification exam not recording completion
Severity: Medium (blocking partner progress)
Initial Contact: Partner Portal (Certification Section)
Information Provided: User details, course name, screenshots
Escalation Trigger: No resolution within 48 hours
Secondary Contact: Partner Success Manager + Training Director
```

#### Marketing and Co-Selling

For marketing collaboration issues:

| Issue Type | Initial Contact | Escalation Pathway | Response Time |
|------------|----------------|-------------------|---------------|
| Co-Marketing Approval | Partner Marketing Manager | PMM → Marketing Director (72 hours) | 48-72 hours |
| Lead Sharing Issues | Partner Portal (Leads Section) | Lead Management → Sales Operations (72 hours) | 48-72 hours |
| Brand Asset Access | Partner Portal (Marketing Section) | Brand Team → Marketing Manager (48 hours) | 24-48 hours |
| Event Collaboration | Partner Marketing Manager | PMM → Events Team (72 hours) | 48-72 hours |
| Case Study Approval | Partner Marketing Manager | PMM → Content Team (72 hours) | 48-72 hours |

**Required Information:**
- Marketing initiative details
- Specific materials needed
- Deadlines
- Client information (if applicable)
- Previous communications

**Example Escalation:**
```
Issue: Co-branded materials not approved before deadline
Severity: Medium (impacting marketing campaign)
Initial Contact: Partner Marketing Manager
Information Provided: Campaign details, submitted materials, timeline
Escalation Trigger: No approval within 72 hours
Secondary Contact: Marketing Director
```

## Critical Incident Escalation Process

For severe, business-impacting issues:

### Critical Incident Definition

An incident is considered critical when:
- Complete store functionality is unavailable
- Checkout process is non-functional
- Significant data integrity issues occur
- Security breach is suspected or confirmed
- System-wide performance degradation renders platform unusable

### Critical Escalation Procedure

1. **Initial Notification**
   - Call Emergency Support Line: +1-800-PARTNER
   - State "Critical Incident" at the beginning of the call
   - Provide store URL and brief issue description

2. **Immediate Actions**
   - Support creates Critical Incident ticket
   - Initial response within 15 minutes
   - Technical lead assigned immediately

3. **Escalation Triggers**
   - No acknowledgment within 15 minutes
   - No progress update within 30 minutes
   - No resolution plan within 1 hour
   - No significant progress within 2 hours

4. **Secondary Escalation**
   - Contact Partner Success Manager directly
   - Escalation email to incident@store.icu with ticket number
   - For Platinum partners: Call dedicated escalation line

5. **Executive Escalation**
   - If secondary escalation doesn't yield results within 1 hour
   - Partner Success Manager contacts Director of Support
   - Director of Support engages executive team if needed

6. **Communication Protocol**
   - Updates every 30 minutes until resolution
   - Clear timeline and action plan provided
   - Dedicated Slack channel or call established for major incidents

**Example Critical Escalation:**
```
Issue: All stores on Australian server cluster unreachable
Severity: Critical (complete outage)
Initial Contact: Emergency Support Line
Information Provided: Affected store URLs, error screenshots
First Escalation: After 30 minutes if no meaningful progress
Contact: Partner Success Manager + incident@store.icu
Executive Escalation: After 1 hour if still unresolved
Contact: Director of Support
```

## Non-Technical Escalation Paths

### Relationship Management

For partner relationship concerns:

| Issue Type | Initial Contact | Escalation Pathway |
|------------|----------------|-------------------|
| Partner Success Manager Concerns | Regional Partner Manager | Regional Manager → Head of Partners |
| Communication Problems | Regional Partner Manager | Regional Manager → Partner Operations |
| Strategic Alignment | Partner Success Manager | PSM → Head of Partners |
| Program Structure Feedback | Partner Advisory Board | Advisory Board → Partner Leadership |
| Conflict Resolution | Regional Partner Manager | Regional Manager → Partner Mediation Team |

**Required Information:**
- Specific concerns
- Previous communications
- Desired outcome
- Business impact
- Timeline of issues

**Example Escalation:**
```
Issue: Partner Success Manager unresponsive for 2+ weeks
Initial Contact: Regional Partner Manager
Information Provided: Communication attempts, business impact
Escalation Trigger: No resolution within 1 week
Secondary Contact: Head of Partner Program
```

### Business Disputes

For commercial disagreements:

| Issue Type | Initial Contact | Escalation Pathway |
|------------|----------------|-------------------|
| Contract Disputes | Partner Success Manager | PSM → Legal Department |
| Commission Discrepancies | Partner Portal (Revenue Section) | Finance Team → CFO Office |
| Service Level Violations | Partner Success Manager | PSM → Operations Director |
| Intellectual Property Concerns | Legal Contact Form | Legal Team → Chief Legal Officer |
| Client Ownership Disputes | Partner Success Manager | PSM → Partner Ethics Committee |

**Required Information:**
- Contract references
- Documentation of issue
- Financial impact
- Proposed resolution
- Prior communication history

**Example Escalation:**
```
Issue: Commission payments consistently 20% below agreement
Initial Contact: Partner Portal (Revenue Section)
Information Provided: Transaction records, agreement terms, calculations
Escalation Trigger: No resolution within 30 days
Secondary Contact: Partner Success Manager + Finance Director
```

## Escalation Contact Information

### Technical Support Contacts

| Priority | Channel | Contact Information | Hours |
|----------|---------|---------------------|-------|
| Critical | Emergency Line | +1-800-PARTNER | 24/7/365 |
| Critical | Email | critical@store.icu | 24/7/365 |
| High | Partner Portal | [Critical Ticket](https://partners.store.icu/support/critical) | 24/7/365 |
| Medium/Low | Partner Portal | [Support Ticket](https://partners.store.icu/support) | Business Hours |
| General | Email | partner-support@store.icu | Business Hours |

### Business Contacts

| Department | Primary Contact | Escalation Contact |
|------------|----------------|-------------------|
| Partner Program | Partner Success Manager | regional-partners@store.icu |
| Billing/Finance | finance@store.icu | partner-finance@store.icu |
| Legal | legal@store.icu | partner-legal@store.icu |
| Marketing | partner-marketing@store.icu | marketing-director@store.icu |
| Product Team | product-feedback@store.icu | partner-product@store.icu |

### Security Contacts

| Purpose | Contact Method | Information |
|---------|---------------|-------------|
| Security Emergencies | Security Hotline | +1-888-SECURITY |
| Vulnerability Reports | Security Portal | [Report Vulnerability](https://security.store.icu) |
| PCI Concerns | Email | pci@store.icu |
| GDPR Requests | Privacy Portal | [Privacy Requests](https://privacy.store.icu) |
| Security Questions | Email | security@store.icu |

## Escalation Templates

### Technical Escalation Template

```
Subject: [PRIORITY LEVEL] - Brief Issue Description - Store URL

Issue Summary:
[1-2 sentence description of the problem]

Business Impact:
[Description of how this affects merchants/customers]

Troubleshooting Completed:
[Steps already taken to resolve]

Reproduction Steps:
1. [Step by step instructions]
2. [To reproduce the issue]
3. [Be specific and detailed]

Error Messages:
[Exact error text or screenshots]

Environment Details:
- Store URL: [URL]
- Browser/App: [Details]
- User affected: [All/Admin/Specific users]
- First occurred: [Date/Time]
- Frequency: [Constant/Intermittent]

Requested Resolution Timeline:
[When you need this resolved by and why]
```

### Business Escalation Template

```
Subject: [DEPARTMENT] Escalation - Brief Description

Issue Summary:
[1-2 sentence description of the business issue]

Business Impact:
[Description of how this affects your partnership/clients]

Previous Communication:
[Summary of prior attempts to resolve]

Relevant Details:
- Partner ID: [Your ID]
- Contract Reference: [If applicable]
- Financial Impact: [If applicable]
- Client Impact: [If applicable]

Supporting Documentation:
[List any attachments or evidence]

Requested Resolution:
[Clear statement of desired outcome]

Requested Timeline:
[When you need this addressed by and why]
```

## Partner Responsibilities

Effective escalation requires partner participation:

1. **Issue Documentation**
   - Provide thorough, accurate information
   - Document all troubleshooting steps
   - Capture relevant screenshots and logs
   - Note exact error messages

2. **Process Adherence**
   - Follow the appropriate escalation path
   - Respect the defined escalation triggers
   - Use correct priority classifications
   - Provide updates as new information emerges

3. **Communication Clarity**
   - Be specific about issues and impact
   - Clearly state any deadlines or urgency
   - Keep client expectations realistic
   - Maintain professional communication

4. **Resolution Collaboration**
   - Remain available for troubleshooting
   - Implement suggested solutions promptly
   - Test thoroughly after resolution
   - Provide confirmation of issue resolution

## Tracking and Follow-up

### Issue Tracking System

All escalations are tracked in the Partner Portal:

1. **Dashboard View**
   - Active escalations by priority
   - Resolution timeline tracking
   - SLA compliance monitoring
   - Escalation history

2. **Communication Log**
   - All interactions recorded
   - File attachment history
   - Status change tracking
   - Resolution documentation

### Escalation Review Process

Monthly review of escalation patterns:

1. **Partner-level Review**
   - Escalation frequency analysis
   - Resolution time assessment
   - Pattern identification
   - Process improvement recommendations

2. **System-wide Review**
   - Common issue identification
   - Process effectiveness evaluation
   - SLA performance assessment
   - Support quality monitoring

### Satisfaction Tracking

Feedback collection on escalation handling:

1. **Post-Resolution Survey**
   - Resolution satisfaction rating
   - Process effectiveness feedback
   - Communication quality assessment
   - Improvement suggestions

2. **Quarterly Satisfaction Review**
   - Trend analysis
   - Comparative performance
   - Improvement implementation
   - Process refinement

## Escalation Prevention

Proactive measures to reduce escalation needs:

1. **Knowledge Enhancement**
   - Regular training participation
   - Documentation familiarity
   - Technical certification maintenance
   - Product update awareness

2. **Proactive Monitoring**
   - Regular store health checks
   - Performance monitoring implementation
   - Error log review
   - Client usage pattern analysis

3. **Preventative Maintenance**
   - Regular platform updates
   - Plugin compatibility verification
   - Security patch implementation
   - Database optimization

4. **Client Education**
   - Proper usage training
   - Self-service resource sharing
   - Common issue prevention guidance
   - Update preparation assistance

## Feedback and Improvement

Help us enhance the escalation process:

1. **Process Feedback**
   - Submit suggestions via Partner Portal
   - Participate in escalation process surveys
   - Join partner advisory discussions
   - Share escalation case studies

2. **Documentation Improvements**
   - Suggest escalation matrix updates
   - Report unclear procedures
   - Recommend additional templates
   - Contribute best practices

Contact the Partner Operations team at partner-ops@store.icu with process improvement suggestions.
