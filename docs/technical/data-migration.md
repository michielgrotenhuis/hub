---
id: data-migration
title: Data Migration
sidebar_label: Data Migration
---

# Data Migration

## Moving Client Data to Store.icu

Migrating clients from existing ecommerce platforms to Store.icu requires careful planning and execution. This guide provides partners with the tools, methodologies, and best practices to ensure successful migrations with minimal business disruption.

## Migration Overview

### Supported Source Platforms

Store.icu supports migration from major ecommerce platforms including:

| Platform | Migration Support Level | Technical Requirements |
|----------|-------------------------|------------------------|
| Shopify | Full native support | API credentials |
| WooCommerce | Full native support | Database access |
| Magento 1 & 2 | Full native support | API or database access |
| BigCommerce | Full native support | API credentials |
| PrestaShop | Full native support | Database access |
| OpenCart | Partial native support | Database access |
| Custom/Other | CSV migration support | Data export capabilities |

### Migrated Data Elements

The following data can be migrated to Store.icu:

| Data Type | Support Level | Notes |
|-----------|---------------|-------|
| Products | Full | Including variants, images, inventory, SEO metadata |
| Categories | Full | Including hierarchy, descriptions, images |
| Customers | Full | Includes addresses and account details |
| Orders | Full | Complete order history with line items |
| Discount Rules | Partial | Basic rules migrate fully, complex rules may need review |
| Content Pages | Full | Including blogs, about pages, policy pages |
| Reviews | Full | Product reviews and ratings |
| URL Structure | Full | Preserves SEO with automatic redirects |
| Media Library | Full | All product and content images |
| Custom Fields | Partial | Platform-specific mapping required |

## Migration Process

### 1. Pre-Migration Assessment

Before beginning any migration, complete these critical steps:

- **Store Evaluation**: Analyze the client's existing store structure and complexity
- **Data Audit**: Identify all data to be migrated and assess quality
- **Custom Element Review**: Catalog any custom functionality or integrations
- **Migration Complexity Score**: Generate a complexity rating to estimate effort and cost
- **Timeline Planning**: Create a realistic timeline based on store size and complexity

Access the [Pre-Migration Assessment Tool](https://partners.store.icu/tools/migration-assessment) to generate a detailed report.

### 2. Migration Planning

Develop a comprehensive migration strategy:

- **Data Mapping**: Create detailed field mappings between platforms
- **Migration Sequence**: Determine the order of data migration
- **Testing Strategy**: Develop a testing plan for post-migration validation
- **Rollback Procedure**: Document steps for reverting if necessary
- **Client Communication Plan**: Create timeline for client updates and approvals

Download our [Migration Planning Template](https://partners.store.icu/resources/migration-template) to streamline this process.

### 3. Store Configuration

Prepare the new Store.icu environment:

- **Account Setup**: Configure client's Store.icu account
- **Theme Selection**: Choose and customize appropriate theme
- **Payment Gateways**: Set up payment providers
- **Shipping Methods**: Configure shipping options
- **Tax Settings**: Establish tax rules and rates
- **User Permissions**: Create staff accounts with appropriate access

Use our [Store Configuration Checklist](https://partners.store.icu/resources/configuration-checklist) to ensure nothing is missed.

### 4. Data Extraction

Extract data from the source platform:

#### Using Native Migration Tools

1. Access the Migration Hub in your partner dashboard
2. Select the source platform
3. Enter required credentials
4. Select data elements to migrate
5. Initiate extraction process

#### Using CSV Import

For platforms without native support:

1. Export data from source platform in CSV format
2. Format CSVs according to Store.icu templates
3. Clean and normalize data
4. Upload to Migration Hub

Download CSV templates for:
- [Products Template](https://partners.store.icu/resources/product-csv-template)
- [Customers Template](https://partners.store.icu/resources/customer-csv-template)
- [Orders Template](https://partners.store.icu/resources/order-csv-template)
- [Categories Template](https://partners.store.icu/resources/category-csv-template)

### 5. Data Transformation

Clean and optimize data during migration:

- **Data Cleaning**: Remove duplicate or obsolete data
- **Structure Optimization**: Improve category hierarchy and product organization
- **SEO Enhancement**: Update meta descriptions, ALT tags, and URLs
- **Inventory Reconciliation**: Verify stock levels across variants
- **Customer Segmentation**: Implement improved customer grouping

Use our [Data Transformation Tools](https://partners.store.icu/tools/data-transformation) to streamline this process.

### 6. Data Import

Load extracted data into Store.icu:

1. Access the Migration Hub in partner dashboard
2. Upload prepared CSV files or connect directly to extraction
3. Map fields if not using native migration tools
4. Review import settings
5. Schedule import (immediate or timed)
6. Monitor progress through the migration dashboard

### 7. Post-Migration Validation

Verify successful data transfer:

- **Data Completeness Check**: Ensure all selected data migrated correctly
- **Functional Testing**: Test critical store functions
- **Performance Assessment**: Evaluate store loading and operation speeds
- **Mobile Responsiveness**: Verify display across devices
- **Integration Verification**: Test all third-party connections
- **SEO Validation**: Confirm redirects and metadata integrity

Download the [Post-Migration Validation Checklist](https://partners.store.icu/resources/validation-checklist).

### 8. Go-Live Preparation

Prepare for the store launch:

- **DNS Configuration**: Document domain transfer process
- **SSL Certificate**: Ensure SSL is properly configured
- **Payment Gateway Production Credentials**: Switch from test to live
- **Final UAT**: Conduct user acceptance testing
- **Training**: Complete client staff training
- **Support Documentation**: Provide store operations documentation

### 9. Launch Execution

Execute store launch with minimal downtime:

1. Enable maintenance mode on old store
2. Perform final data sync for new orders/customers
3. Update DNS records to point to Store.icu
4. Verify domain propagation
5. Test live transactions
6. Disable maintenance mode
7. Monitor for issues

Follow our [Launch Day Checklist](https://partners.store.icu/resources/launch-checklist) for a smooth transition.

## Migration Tools

### Native Migration App

The Store.icu Migration App provides:

- Direct connections to major platforms
- Automated field mapping
- Delta migration for iterative transfers
- Migration job scheduling
- Comprehensive logging and error handling
- Automatic redirect generation

Access the [Migration App Documentation](https://developers.store.icu/migration-app).

### Data Manipulation Toolkit

Tools for complex data transformations:

- Custom field mapping utility
- Product data normalization
- Category restructuring tool
- Bulk image optimizer
- URL structure customization
- Customer password handling

### Migration API

For custom migration scripts:

- RESTful endpoints for data import
- Batch processing capabilities
- Webhooks for migration events
- Detailed error reporting
- Rate limit information

View the [Migration API Documentation](https://developers.store.icu/migration-api).

## Special Migration Scenarios

### High-Volume Product Catalogs

For stores with 10,000+ products:

- Use incremental migration approach
- Implement category-by-category migration
- Utilize scheduled overnight processes
- Consider dedicated migration server

### Custom Functionality Migration

Strategies for handling custom features:

- Feature parity assessment
- Native Store.icu alternatives
- App marketplace solutions
- Custom development requirements
- Client expectation management

### B2B Store Migration

Special considerations for B2B migrations:

- Customer group structures
- Tiered pricing migration
- Account permission hierarchy
- Credit limit settings
- Approval workflow configuration
- Company account structures

### Multi-Store Migration

Consolidating multiple stores:

- Catalog deduplication strategy
- Inventory aggregation
- Customer record merging
- Order history preservation
- Brand differentiation maintenance

## Migration Packages

Partners can offer clients these standardized migration packages:

### Essential Migration

- Products, categories, customers migration
- Basic theme setup
- Standard payment and shipping setup
- Suitable for small stores (under 1,000 products)

### Business Migration

- Full data migration including orders and reviews
- Theme customization to match current store
- SEO preservation with redirect mapping
- Integration of essential third-party services
- Suitable for medium stores (1,000-5,000 products)

### Enterprise Migration

- Complete data migration with custom fields
- Advanced theme development
- Complex discount rule recreation
- Custom functionality development
- Integration of all business systems
- Suitable for large stores (5,000+ products)

## Best Practices

### Client Communication

- Set realistic expectations about migration complexity
- Provide clear timelines with buffer for unexpected issues
- Schedule regular update meetings during the process
- Create a dedicated communication channel for migration questions
- Prepare clients for potential post-migration adjustments

### Technical Execution

- Always work with a backup of the original store data
- Migrate to a staging environment first, never directly to production
- Perform migration in logical phases rather than all at once
- Document all custom mappings and transformations
- Implement proper error handling and logging
- Test with real user scenarios, not just data completeness

### Post-Migration Optimization

- Analyze store performance and optimize as needed
- Review and enhance SEO elements
- Identify opportunities for new feature implementation
- Provide additional staff training
- Schedule follow-up review 30 days after migration

## Common Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| Missing product images | Implementation of image scraping tools |
| URL structure changes | Comprehensive redirect mapping |
| Custom field mapping | Data transformation scripts |
| Order status preservation | Status mapping configuration |
| Customer password migration | Password reset workflow |
| Integration differences | Pre-migration integration assessment |

## Training and Support

### Migration Certification

Partners can complete our Migration Specialist certification:

1. Take the online Migration Methodology course
2. Complete a test migration case study
3. Pass the certification examination
4. Submit a real-world migration portfolio

### Migration Support

Resources available to partners:

- Priority support queue for migration issues
- Migration specialist consulting hours
- Weekly migration clinic webinars
- Peer support in partner forum
- Advanced troubleshooting documentation

Contact migration-support@store.icu for assistance with complex migrations.

## Case Studies

Learn from successful migrations:

- [Case Study: Fashion Retailer Migration from Magento](https://partners.store.icu/case-studies/fashion-magento-migration)
- [Case Study: High-volume B2B Migration from Custom Platform](https://partners.store.icu/case-studies/b2b-custom-migration)
- [Case Study: Multi-store Consolidation from Shopify](https://partners.store.icu/case-studies/multi-store-shopify-migration)
