# Environment Variables Configuration

## Overview
This document details the environment variables used in the Altoq PWA project and provides guidance for configuring them in Vercel or other deployment platforms.

## Required Environment Variables

### 1. NEXT_PUBLIC_VAPID_PUBLIC_KEY
- **Type**: Public (Client-side accessible)
- **Purpose**: Public VAPID key for Web Push notifications
- **Location**: Used in `app/actions.ts`
- **Required**: Yes (for push notification functionality)
- **Format**: Base64 URL-safe string

### 2. VAPID_PRIVATE_KEY
- **Type**: Secret (Server-side only)
- **Purpose**: Private VAPID key for Web Push notifications
- **Location**: Used in `app/actions.ts`
- **Required**: Yes (for push notification functionality)
- **Format**: Base64 URL-safe string
- **⚠️ Security**: Never expose this key in client-side code or commit it to version control

## Usage in Code

The environment variables are used in `app/actions.ts` for configuring web push notifications:

```typescript
webpush.setVapidDetails(
  'mailto:altoq@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)
```

## Generating VAPID Keys

To generate VAPID keys for your deployment, you can use the `web-push` library:

```bash
# Install web-push globally
npm install -g web-push

# Generate VAPID keys
web-push generate-vapid-keys
```

This will output something like:
```
=======================================

Public Key:
BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U

Private Key:
UUxI4O8-FbRouAevSmBQ6o18hgE4nSG3qwvJTfKc-ls

=======================================
```

## Vercel Configuration

### Option 1: Vercel Dashboard
1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - **Name**: `NEXT_PUBLIC_VAPID_PUBLIC_KEY`
     - **Value**: Your generated public key
     - **Environments**: Production, Preview, Development
   - **Name**: `VAPID_PRIVATE_KEY`
     - **Value**: Your generated private key
     - **Environments**: Production, Preview, Development

### Option 2: Vercel CLI
```bash
# Add public key
vercel env add NEXT_PUBLIC_VAPID_PUBLIC_KEY production

# Add private key
vercel env add VAPID_PRIVATE_KEY production
```

### Option 3: vercel.json (Not Recommended for Secrets)
**Note**: Do not add secret keys in `vercel.json` as it will be committed to version control.

## Local Development

Create a `.env.local` file in the root of the project (this file is already in `.gitignore`):

```bash
# .env.local
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_public_key_here
VAPID_PRIVATE_KEY=your_private_key_here
```

**Important**: Never commit `.env.local` or any file containing real keys to version control.

## Environment Variable Naming Convention

- **NEXT_PUBLIC_***: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser/client
- **No prefix**: Variables without this prefix are only available server-side

## Security Best Practices

1. ✅ **DO**: Keep private keys server-side only
2. ✅ **DO**: Use `.env.local` for local development
3. ✅ **DO**: Store secrets in Vercel's environment variable settings
4. ✅ **DO**: Use different keys for production and development
5. ❌ **DON'T**: Commit `.env` files to version control
6. ❌ **DON'T**: Expose private keys in client-side code
7. ❌ **DON'T**: Share keys in public repositories or documentation

## Current `.gitignore` Configuration

The project already has proper `.gitignore` entries to prevent committing environment files:

```gitignore
# Local env files
.env
.env*.local
.env.development.local
.env.test.local
.env.production.local
```

## Troubleshooting

### Issue: "No subscription available" error
- **Cause**: Environment variables not set correctly
- **Solution**: Verify both VAPID keys are configured in Vercel

### Issue: Push notifications not working
- **Cause**: Invalid VAPID keys or missing keys
- **Solution**: Regenerate VAPID keys and update environment variables

### Issue: Build fails with undefined environment variables
- **Cause**: Required environment variables not set in deployment environment
- **Solution**: Add all required environment variables in Vercel settings

## Additional Notes

- The current implementation uses `web-push` library version `^3.6.7`
- VAPID keys are part of the Web Push Protocol specification
- The email in `webpush.setVapidDetails` ('mailto:altoq@example.com') should be updated to a real contact email

## References

- [Web Push Protocol](https://datatracker.ietf.org/doc/html/rfc8030)
- [VAPID Specification](https://datatracker.ietf.org/doc/html/rfc8292)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
