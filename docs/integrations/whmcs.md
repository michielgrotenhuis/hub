---
id: whmcs-integration
title: WHMCS Integration
sidebar_position: 8
description: Installation, configuration, and support for the Store.icu WHMCS plugin.
---

# 🔌 WHMCS Integration Plugin

Easily integrate Store.icu’s ecommerce services into your WHMCS instance using our official plugin. This guide walks you through setup, configuration, and usage.

---

## ⚙️ Overview

The WHMCS integration allows you to:

- Provision Store.icu storefronts automatically upon purchase
- Sync billing and customer details
- Manage subscriptions and orders from WHMCS
- Whitelabel the experience under your own brand

---

## 📥 Download the Plugin

📦 [Download WHMCS Plugin (ZIP)](https://store.icu/assets/integrations/storeicu-whmcs-plugin.zip)  
Version: `v1.3.2`  
Compatibility: WHMCS `8.x+`

---

## 🛠️ Installation Steps

1. **Unzip the Plugin**
   ```bash
   unzip storeicu-whmcs-plugin.zip
Upload to WHMCS Modules Directory
Upload the unzipped folder to:

swift
Copy
Edit
/modules/servers/storeicu/
Set File Permissions
Ensure the following permissions:

PHP files: 644

Folders: 755

Activate the Module in WHMCS

Go to WHMCS Admin > Setup > Products/Services > Servers

Click Add New Server

Choose Store.icu as the module

Enter API Credentials
You’ll need your Store.icu partner API key and secret:
➡️ Generate API Keys

🔧 Configuration
Set the following parameters in the module settings:

Field	Value / Description
API Key	Your partner-issued key
API Secret	Keep this private
Default Plan	e.g. basic-store, pro-store
Auto Provisioning	Enable for automatic storefront setup

🧪 Testing the Integration
Create a test product in WHMCS with the Store.icu module

Place a test order

Confirm the storefront is provisioned in your Store.icu dashboard

If needed, enable logging:
WHMCS > Utilities > Logs > Module Debug Log

🧰 Resources
WHMCS Product Docs

Store.icu API Reference

Troubleshooting Guide (PDF)

🛟 Support
Have questions or need help?

📧 integration-support@store.icu
Or join our Partner Slack Channel

💡 Tip: Keep your plugin updated to access new features and security improvements.







