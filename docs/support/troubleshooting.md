---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

## Resolving Common Platform Issues

This comprehensive troubleshooting guide helps partners diagnose and resolve common issues with the Store.icu platform. Use this resource to efficiently address client problems and minimize disruption to their businesses.

## General Troubleshooting Approach

### Systematic Diagnosis Process

Follow these steps for efficient problem-solving:

1. **Identify the exact issue**:
   - Clarify symptoms with specific examples
   - Document when the problem started
   - Note any recent changes or updates

2. **Isolate the problem**:
   - Test in different browsers/devices
   - Check if the issue occurs in sandbox and production
   - Identify specific conditions that trigger the issue

3. **Check known issues**:
   - Review the [Known Issues Dashboard](https://partners.store.icu/known-issues)
   - Check the [System Status Page](https://status.store.icu)
   - Search existing bug reports

4. **Apply standard fixes**:
   - Clear cache and cookies
   - Try private/incognito browsing
   - Test with extensions disabled
   - Verify network connectivity

5. **Document findings**:
   - Record all troubleshooting steps
   - Capture screenshots or videos
   - Note error messages and codes

### Diagnostic Tools

Leverage these tools for troubleshooting:

- **[Store Inspector](https://partners.store.icu/tools/inspector)**: Browser extension for technical analysis
- **[Health Check Tool](https://partners.store.icu/tools/health-check)**: System-wide diagnostics
- **[Log Analyzer](https://partners.store.icu/tools/logs)**: Identifies patterns in error logs
- **[Configuration Validator](https://partners.store.icu/tools/validator)**: Detects configuration issues
- **[Compatibility Checker](https://partners.store.icu/tools/compatibility)**: Identifies browser/device issues

## Storefront Issues

### Page Loading Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Blank white screen | JavaScript error, theme issue | Check browser console, disable custom code, restore default theme |
| Slow page loading | Image size, apps, hosting issues | Run performance audit, optimize images, disable non-essential apps |
| 404 errors | Missing pages, URL changes | Check URL structure, verify redirects, restore from backup |
| Internal server errors (500) | Server-side issues, PHP errors | Check error logs, disable recently added features, contact support |
| Partial page loading | CSS or JavaScript failures | Inspect browser console, reload, clear cache, check CDN status |

**Advanced Diagnostics**:

```javascript
// Browser Console Tool - Copy and paste into browser console
(function() {
  console.log('--- Store.icu Diagnostics ---');
  console.log('Page Load Time: ' + (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) + 'ms');
  console.log('JS Errors: ' + window.storeicu.diagnostics.errors.length);
  console.log('Active Plugins: ' + Object.keys(window.storeicu.plugins).join(', '));
  console.log('Theme Version: ' + window.storeicu.theme.version);
  console.log('CDN Status: ' + (window.storeicu.cdn.active ? 'Active' : 'Inactive'));
})();
```

### Product Display Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Missing product images | Image upload errors, CDN issues | Re-upload images, check media storage settings, verify CDN status |
| Variant selection not working | Theme JavaScript errors, app conflicts | Check browser console, temporarily disable apps, update theme |
| Incorrect prices | Cache issues, sync problems, tax configuration | Clear cache, verify price settings, check tax rules |
| Out-of-stock products appearing | Inventory settings, cache issues | Verify inventory settings, update stock status, refresh cache |
| Search not returning results | Indexing issues, search configuration | Rebuild search index, check search settings, verify product visibility |

**Inventory Troubleshooting Commands:**

```bash
# Run this in the Store.icu CLI tool
storeicu inventory:verify --store=STOREID --product=PRODUCTID
storeicu search:reindex --store=STOREID
storeicu cache:flush --store=STOREID --type=products
```

### Checkout Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Payment processing failures | Gateway issues, configuration errors | Verify payment credentials, check gateway status, test in sandbox |
| Shipping calculation errors | API issues, rate configuration | Verify shipping zone settings, test in checkout sandbox, check carrier API status |
| Discount codes not applying | Code restrictions, configuration errors | Verify discount conditions, check cart contents, ensure code is active |
| Tax calculation issues | Wrong tax rates, location detection problems | Verify tax settings, check customer address, ensure tax provider is working |
| Order completion hangs | Session issues, database problems | Check server response times, verify transaction logs, inspect checkout process |

**Payment Gateway Test:**

```javascript
// Sandbox Payment Testing - Run in Partner Tools
async function testPaymentGateway(storeId, gatewayId) {
  const response = await fetch('/api/partner/payment-test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ storeId, gatewayId, amount: '1.00', currency: 'USD' })
  });
  return await response.json();
}
```

## Admin Dashboard Issues

### Login Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Unable to login | Incorrect credentials, account issues | Reset password, check user status, verify email address |
| Two-factor authentication failures | Time synchronization, device issues | Verify time settings, regenerate 2FA codes, use backup codes |
| Session timeouts | Cookie settings, server configuration | Check session timeout settings, verify browser cookie settings |
| "Access Denied" errors | Permission issues, role configuration | Verify user permissions, check role assignments, review recent changes |
| Redirect loops | Configuration errors, server issues | Clear cookies, use incognito mode, check server logs |

### Content Management Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Unable to save changes | Permission issues, validation errors | Check error messages, verify permissions, ensure required fields are complete |
| Media upload failures | File size limits, format issues | Check file size and format, verify storage limits, test with smaller files |
| Editor not loading | JavaScript errors, plugin conflicts | Check browser console, disable extensions, try alternative browser |
| Missing content | Caching issues, publication status | Verify content status, check visibility settings, rebuild content cache |
| Layout builder errors | Theme compatibility, module conflicts | Update theme, disable conflicting modules, restore default layout |

**Content Validation Command:**

```bash
# Run this in the Store.icu CLI tool
storeicu content:validate --store=STOREID --all
storeicu media:check --store=STOREID
storeicu content:reindex --store=STOREID
```

### Order Management Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Orders not appearing | View filters, processing delays | Check filter settings, verify order status, confirm payment completion |
| Unable to process refunds | Gateway issues, permission problems | Verify gateway refund settings, check user permissions, confirm order status |
| Order status not updating | Automation issues, integration problems | Check automation workflows, verify integration connections, manually update status |
| Invoice generation failures | Template issues, tax configuration | Verify invoice template, check tax settings, rebuild invoice |
| Fulfillment errors | Shipping integration issues, API problems | Check shipping provider status, verify integration credentials, test connection |

## Integration Issues

### API Connection Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Authentication failures | Expired tokens, incorrect credentials | Regenerate API tokens, verify credentials, check API permissions |
| Rate limit exceeded | Too many requests, inefficient code | Optimize request frequency, implement caching, review code efficiency |
| API timeouts | Server load, complex queries | Simplify requests, implement pagination, check network connectivity |
| Data synchronization errors | Schema mismatch, validation failures | Verify data structure, check required fields, validate input data |
| Webhook delivery failures | Endpoint issues, configuration problems | Verify endpoint availability, check webhook settings, review delivery logs |

**API Diagnostic Tool:**

```javascript
// API Connection Test - Use in API debugging tool
async function testApiEndpoint(endpoint, token) {
  console.log(`Testing endpoint: ${endpoint}`);
  try {
    const start = performance.now();
    const response = await fetch(`https://api.store.icu/v3/${endpoint}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log(`Response time: ${(performance.now() - start).toFixed(2)}ms`);
    console.log(`Rate limits: ${response.headers.get('X-Rate-Limit-Remaining')}/${response.headers.get('X-Rate-Limit-Limit')}`);
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}
```

### Third-Party App Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| App installation failures | Compatibility issues, permission problems | Verify store compatibility, check user permissions, contact app developer |
| App not functioning | Configuration errors, conflicts with other apps | Verify app settings, disable potentially conflicting apps, check error logs |
| Data import/export problems | Format issues, validation errors | Check data format, verify field mappings, validate import data |
| App performance impact | Resource usage, inefficient code | Monitor performance metrics, isolate app impact, optimize settings |
| Billing issues | Payment method problems, subscription status | Verify payment method, check subscription status, contact app provider |

### Payment Gateway Integration

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Gateway connection failures | API credentials, configuration errors | Verify API keys, check gateway settings, test in sandbox mode |
| Payment declined errors | Card issues, fraud filters | Check error codes, verify customer information, adjust fraud settings |
| Currency conversion problems | Exchange rate issues, configuration errors | Verify currency settings, check exchange rates, test with default currency |
| Recurring payment failures | Subscription configuration, card expiration | Check subscription settings, verify card validity, update payment method |
| Refund processing issues | Gateway limitations, timing restrictions | Verify refund policy, check time limits, process manually if needed |

**Payment Test Transactions:**

For testing specific payment scenarios, use these test card numbers:

| Card Type | Number | Expiry | CVV | Purpose |
|-----------|--------|--------|-----|---------|
| Visa (Success) | 4242 4242 4242 4242 | Any future date | Any 3 digits | Successful charge |
| Visa (Decline) | 4000 0000 0000 0002 | Any future date | Any 3 digits | Declined charge |
| Visa (No Funds) | 4000 0000 0000 9995 | Any future date | Any 3 digits | Insufficient funds |
| Mastercard (3DS) | 5200 0000 0000 0007 | Any future date | Any 3 digits | 3D Secure required |

## Theme and Design Issues

### Display Inconsistencies

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Mobile responsiveness problems | CSS issues, viewport configuration | Test on multiple devices, check media queries, validate responsive design |
| Font rendering issues | Custom font loading, CSS conflicts | Verify font files, check CSS specificity, test with system fonts |
| Color discrepancies | Theme settings, CSS overrides | Check theme color settings, verify CSS variables, inspect element styles |
| Layout breakage | CSS conflicts, theme updates | Compare with default theme, check recently changed files, restore from backup |
| Image sizing problems | Missing image dimensions, responsive issues | Verify image markup, check responsive image settings, add explicit dimensions |

**Theme Debugging CSS:**

Add this CSS to your theme's custom CSS section for debugging layout issues:

```css
/* Layout Debugging - Add to Custom CSS for troubleshooting */
.debug-layout * {
  outline: 1px solid rgba(255, 0, 0, 0.2);
}
.debug-layout div {
  outline: 1px solid rgba(0, 0, 255, 0.2);
}
.debug-layout section {
  outline: 1px solid rgba(0, 255, 0, 0.2);
}
```

### Custom Code Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| JavaScript errors | Syntax problems, conflicts | Check browser console, validate JS syntax, isolate conflicting scripts |
| CSS not applying | Specificity issues, loading order | Inspect element styles, check CSS specificity, verify stylesheet loading |
| Template rendering errors | Syntax issues, variable problems | Check error logs, verify template syntax, validate template variables |
| Custom function failures | Code errors, dependency issues | Review function code, check dependencies, test in isolation |
| Performance impact | Inefficient code, resource loading | Profile code execution, optimize resource loading, implement lazy loading |

**JavaScript Performance Analysis:**

```javascript
// Performance Testing - Add to custom JavaScript
(function() {
  const functions = {
    'productGallery': window.storeicu.theme.productGallery,
    'quickView': window.storeicu.theme.quickView,
    'cartUpdater': window.storeicu.theme.cartUpdater,
    'searchSuggestions': window.storeicu.theme.searchSuggestions
  };
  
  for (const [name, func] of Object.entries(functions)) {
    if (typeof func === 'function') {
      console.log(`Testing performance of ${name}...`);
      const start = performance.now();
      try {
        func();
        console.log(`${name}: ${(performance.now() - start).toFixed(2)}ms`);
      } catch (e) {
        console.error(`${name} error: ${e.message}`);
      }
    }
  }
})();
```

## Performance Issues

### Slow Loading Times

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| High server response time | Server resources, database queries | Check server metrics, optimize database queries, upgrade hosting plan |
| Large page size | Unoptimized images, excessive code | Compress images, minify CSS and JS, implement lazy loading |
| Render-blocking resources | CSS/JS loading order, third-party scripts | Defer non-critical resources, optimize loading order, remove unnecessary scripts |
| Excessive HTTP requests | Multiple small files, unmerged resources | Combine CSS/JS files, implement sprite sheets, use HTTP/2 |
| Slow third-party services | External script performance, API delays | Audit third-party services, implement timeouts, consider alternatives |

**Performance Audit Command:**

```bash
# Run this in the Store.icu CLI tool
storeicu performance:audit --store=STOREID --url=https://example.store.icu
storeicu assets:optimize --store=STOREID
storeicu cache:status --store=STOREID
```

### Database Performance

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Slow catalog browsing | Large product database, inefficient queries | Optimize database indexes, implement pagination, improve query efficiency |
| Search performance issues | Indexing problems, complex search logic | Rebuild search index, optimize search configuration, implement caching |
| Cart calculation delays | Complex pricing rules, discount calculations | Simplify pricing structure, optimize calculation logic, implement caching |
| Order history slowness | Large order volume, inefficient queries | Archive old orders, implement pagination, optimize database queries |
| Admin dashboard lag | Data volume, reporting queries | Optimize report queries, implement data summarization, add caching layers |

## Security Issues

### Suspicious Activity

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Unauthorized login attempts | Credential stuffing, brute force attacks | Enable login protection, implement CAPTCHA, strengthen password policy |
| Unusual order patterns | Payment fraud, automated bots | Review suspicious orders, implement fraud detection, adjust risk settings |
| Unexpected content changes | Compromised accounts, malicious apps | Audit user activity, review recent changes, scan for malware |
| API abuse | Stolen credentials, inadequate rate limiting | Rotate API keys, implement IP restrictions, strengthen rate limits |
| File uploads to unexpected locations | Vulnerability exploitation, misconfiguration | Scan for malicious files, verify upload permissions, strengthen validation |

**Security Scan Command:**

```bash
# Run this in the Store.icu CLI tool
storeicu security:scan --store=STOREID --level=deep
storeicu users:audit --store=STOREID --period=30days
storeicu files:verify --store=STOREID
```

### SSL/HTTPS Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| SSL certificate errors | Expiration, configuration problems | Check certificate status, renew if needed, verify certificate installation |
| Mixed content warnings | HTTP resources on HTTPS pages | Identify mixed content, update resource URLs, implement content security policy |
| HTTPS redirect loops | Misconfiguration, caching issues | Check redirect settings, verify SSL configuration, clear cache |
| TLS handshake failures | Protocol incompatibility, cipher issues | Update TLS version, check cipher configuration, verify server settings |
| Certificate name mismatch | Wrong domain, subdomain issues | Verify certificate domain coverage, update certificate if needed |

## Email and Notification Issues

### Delivery Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Emails not being sent | SMTP configuration, sending limits | Verify SMTP settings, check sending limits, test email delivery |
| Emails going to spam | Content issues, sender reputation | Review email content, verify SPF/DKIM, improve sender reputation |
| Template rendering problems | Variable errors, formatting issues | Check template syntax, verify variables, test in multiple clients |
| Missing order confirmations | Automation triggers, filter settings | Verify automation rules, check notification settings, test order flow |
| Notification delays | Queue processing, server load | Check notification queue, verify processing capacity, optimize sending schedule |

**Email Diagnostic Command:**

```bash
# Run this in the Store.icu CLI tool
storeicu email:test --store=STOREID --template=order_confirmation
storeicu email:verify-setup --store=STOREID
storeicu notifications:status --store=STOREID
```

## Localization and Multi-currency Issues

### Translation Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Missing translations | Incomplete language files, custom content | Verify language completeness, check custom content translations, update language packs |
| Wrong language displaying | Browser settings, store configuration | Check language detection settings, verify browser preferences, test language switching |
| Translation inconsistencies | Multiple translation sources, updates | Audit translations for consistency, verify integration between systems, update all sources |
| Special character display issues | Encoding problems, font limitations | Verify UTF-8 encoding, check font character support, test with special characters |
| RTL display problems | Theme compatibility, CSS issues | Verify RTL support, check directional CSS, test with RTL languages |

### Currency and Pricing Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Incorrect currency conversion | Exchange rate issues, configuration errors | Verify exchange rates, check currency settings, test with manual calculations |
| Price format problems | Locale settings, theme display | Check price format settings, verify locale configuration, test in multiple currencies |
| Tax calculation differences | Regional tax rules, rounding issues | Verify tax rules by region, check rounding settings, test with sample calculations |
| Shipping cost discrepancies | Currency-specific rates, conversion issues | Verify shipping rates per currency, check conversion settings, test shipping calculations |
| Checkout currency mismatches | Session issues, cache problems | Verify checkout flow, check currency persistence, test complete purchase process |

## Mobile App Issues

### Connection Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| App unable to connect | API configuration, network issues | Verify API settings, check network connectivity, test API endpoints |
| Authentication failures | Token expiration, credential issues | Refresh authentication tokens, verify credentials, check permission settings |
| Sync failures | Data structure changes, version compatibility | Check app version compatibility, verify data schema, update to latest version |
| Intermittent connectivity | Network stability, timeout settings | Adjust timeout settings, implement retry logic, verify network stability |
| Offline mode not working | Cache configuration, storage issues | Verify offline mode settings, check device storage, test offline functionality |

### User Interface Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Display rendering issues | Device compatibility, resolution problems | Test on multiple devices, verify responsive design, check resolution support |
| Touch interaction failures | JavaScript issues, event handling | Verify touch event handling, check interaction elements, test on various devices |
| Navigation problems | Routing issues, deep link configuration | Check navigation configuration, verify deep links, test navigation paths |
| Push notification issues | Permission problems, configuration errors | Verify notification permissions, check configuration, test notification delivery |
| Form submission failures | Validation issues, submission handling | Verify form validation, check submission process, test with various inputs |

## Analytics and Reporting Issues

### Data Collection Problems

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Missing analytics data | Tracking code issues, blocker extensions | Verify tracking code installation, check for blockers, test data collection |
| Inaccurate conversion tracking | Event configuration, multi-device issues | Verify conversion events, check cross-device tracking, test purchase flow |
| Traffic source discrepancies | Attribution issues, referrer problems | Check attribution settings, verify referrer passing, test various traffic sources |
| Real-time data delays | Processing issues, caching problems | Verify real-time settings, check processing delays, test with live events |
| Campaign tracking failures | UTM parameter issues, integration problems | Verify UTM parameter handling, check campaign settings, test campaign links |

### Report Generation Issues

| Issue | Possible Causes | Resolution Steps |
|-------|----------------|------------------|
| Reports not generating | Processing errors, data volume | Check report logs, verify data availability, test with smaller date ranges |
| Incorrect report data | Calculation errors, filter issues | Verify calculation methods, check report filters, compare with raw data |
| Scheduled reports not sending | Automation issues, email problems | Check report schedule, verify email delivery, test manual generation |
| Export failures | Format issues, size limitations | Verify export format, check size limits, test with smaller data sets |
| Dashboard discrepancies | Cache issues, refresh problems | Check dashboard refresh settings, verify data sources, test manual refresh |

## Client-Specific Troubleshooting

### Managing Client Expectations

Effective communication during troubleshooting:

1. **Acknowledge the issue promptly**:
   - Confirm receipt of the problem report
   - Express understanding of the business impact
   - Provide an initial assessment timeframe

2. **Set realistic expectations**:
   - Explain the troubleshooting process
   - Provide estimated resolution times
   - Communicate potential limitations

3. **Maintain regular updates**:
   - Provide progress reports every 2-4 hours for critical issues
   - Document all steps taken
   - Explain technical concepts in accessible language

4. **Document the resolution**:
   - Explain what caused the issue
   - Detail how it was resolved
   - Outline preventative measures

### Creating Client Troubleshooting Resources

Develop client-facing materials:

- **Custom troubleshooting guides**: Store-specific issue resolution steps
- **Video tutorials**: Visual demonstrations of common fixes
- **Preventative checklists**: Regular maintenance procedures
- **Emergency contact protocol**: Clear escalation procedures
- **Self-help knowledge base**: Searchable resolution database

## Contacting Partner Support

When to escalate to Store.icu support:

- Critical issues affecting store functionality
- Security incidents
- Data integrity problems
- Issues persisting after exhausting troubleshooting steps
- Platform bugs requiring developer intervention

### Support Channels

| Support Type | Contact Method | Response Time |
|--------------|----------------|---------------|
| Standard Partner Support | partner-support@store.icu | 1 business day |
| Priority Technical Support | partner-priority@store.icu | 4 hours |
| Emergency Support | +1-800-PARTNER | 1 hour |
| Security Incidents | security@store.icu | 1 hour |
| Bug Reports | [Bug Report Form](https://partners.store.icu/bugs) | 2 business days |

### Information to Include

When contacting support, provide:

1. Partner ID and store URL
2. Detailed issue description
3. Steps to reproduce
4. Screenshots or videos
5. Error messages and codes
6. Troubleshooting steps already taken
7. Recent changes to the store
8. Impact severity and affected users

## Preventative Maintenance

Regular checks to prevent issues:

### Weekly Checks

- Review error logs for warning signs
- Verify backup integrity
- Check for available updates
- Monitor performance metrics
- Scan for security issues

### Monthly Reviews

- Audit user accounts and permissions
- Review integration connections
- Check SSL certificate expiration
- Analyze performance trends
- Verify compliance requirements

### Pre-Launch Checklist

Before major store updates:

1. Perform full backup
2. Test in staging environment
3. Verify mobile compatibility
4. Run performance benchmarks
5. Check third-party integrations
6. Conduct security assessment
7. Verify payment processing

## Advanced Troubleshooting Resources

For complex issues:

- [Technical Documentation Library](https://developers.store.icu)
- [Partner Community Forum](https://forum.store.icu)
- [Monthly Technical Webinars](https://partners.store.icu/webinars)
- [Platform Architecture Guide](https://partners.store.icu/architecture)
- [Advanced Diagnostics Tools](https://partners.store.icu/diagnostics)
