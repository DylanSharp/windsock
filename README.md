# Windsock

A mobile app built with React, Vite, and Capacitor for cross-platform deployment.

<a href="https://play.google.com/store/apps/details?id=com.dmsapps.windsock">
  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width="180"/>
</a>

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for improved developer experience
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Konsta UI**: Mobile UI components based on Tailwind CSS
- **Framework7**: Mobile app UI framework
- **React Router**: Routing library for React
- **React Query**: Data fetching and state management

### Backend
- **Supabase**: Open-source Firebase alternative with PostgreSQL database
- **Capacitor**: Cross-platform native runtime for web apps

### Deployment
- **Capacitor**: For native iOS and Android builds
- **CapGo**: For over-the-air updates

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Xcode (for iOS builds)
- Android Studio (for Android builds)
- Supabase CLI (for database management)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd windsock

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev

# Check current version
npm run check-version

# Update version
npm run update-version
```

## Building and Deployment

### Web Build

```bash
# Build for web
npm run build
```

### Mobile Deployment

```bash
# Build and deploy to mobile platforms with over-the-air updates
npm run deploy
```

This will:
1. Commit changes with the current version
2. Create a git tag with the version
3. Push tags to the repository
4. Build the app with Vite
5. Sync Capacitor (update native projects)
6. Upload the bundle to CapGo for OTA updates

### iOS Specific

```bash
# After syncing Capacitor
npx cap open ios
```

Then build and deploy using Xcode.

### Android Specific

```bash
# After syncing Capacitor
npx cap open android
```

Then build and deploy using Android Studio.

## Database Management

Supabase is used for the backend. To manage the database:

```bash
# Navigate to supabase directory
cd supabase

# Start local Supabase instance
npx supabase start

# Apply migrations
npx supabase db push
```
