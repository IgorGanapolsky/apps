# React Native Expo App Template

A modern, production-ready template for React Native apps built with Expo. This template provides a solid foundation for building cross-platform mobile applications with best practices and essential configurations pre-configured.

## 🚀 Features

### Core Setup
- ✅ **React Native with Expo SDK** - Latest stable versions
- ✅ **TypeScript** - Type-safe development experience
- ✅ **Material Design** - Clean, modern UI components
- ✅ **Navigation** - React Navigation pre-configured
- ✅ **State Management** - Ready for your preferred solution
- ✅ **Dark Mode Support** - System preference detection

### Development Tools
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🔧 **Husky** - Git hooks for automated checks
- 🔧 **TypeScript** - Full type safety
- 🔧 **Automated Scripts** - Linting, formatting, and testing

### Production Ready
- 📱 **EAS Build** - Configured for easy deployment
- 📱 **App Store Ready** - iOS and Android configurations
- 📱 **Environment Variables** - Secure configuration management
- 📱 **Error Tracking** - Sentry integration ready
- 📱 **Analytics** - Firebase Analytics ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI for builds (`npm install -g eas-cli`)
- iOS Simulator (Mac only) or Android emulator

## 🛠️ Getting Started

### 1. Create Your App from Template

```bash
# Clone this template
git clone https://github.com/IgorGanapolsky/apps.git my-app
cd my-app

# Remove template git history
rm -rf .git
git init

# Install dependencies
npm install
```

### 2. Configure Your App

1. Update `app.json` with your app details:
   - `name`: Your app's display name
   - `slug`: URL-safe version of your app name
   - `bundleIdentifier` (iOS) and `package` (Android)
   
2. Update `package.json` with your project details

3. Replace app icons and splash screens in `assets/`

### 3. Development

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator  
npm run android

# Run linting and formatting
npm run lint
npm run format
```

## 📁 Project Structure

```
.
├── src/                  # Source code
│   ├── components/       # Reusable components
│   ├── screens/          # Screen components
│   ├── services/         # Business logic and API calls
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── assets/              # Images, fonts, and other assets
├── scripts/             # Build and automation scripts
├── App.tsx              # Root component
├── app.json            # Expo configuration
├── eas.json            # EAS Build configuration
└── package.json        # Dependencies and scripts
```

## 🚢 Deployment

### Build for Testing

```bash
# Configure EAS (first time only)
eas build:configure

# Build for iOS simulator
eas build --platform ios --profile preview

# Build for Android APK
eas build --platform android --profile preview
```

### Build for Production

```bash
# iOS App Store
eas build --platform ios --profile production

# Android Play Store
eas build --platform android --profile production

# Submit to stores
eas submit
```

## 🔧 Configuration

### Environment Variables

Create `.env` files for different environments:
- `.env.development`
- `.env.staging`
- `.env.production`

Key environment variables:
- `APP_NAME` - Your app display name
- `APP_SLUG` - URL-safe app name
- `IOS_BUNDLE_ID` - iOS bundle identifier
- `ANDROID_PACKAGE` - Android package name
- `EAS_PROJECT_ID` - EAS project identifier
- `SENTRY_DSN` - Error tracking (optional)
- `FIREBASE_CONFIG` - Analytics config (optional)

### EAS Configuration

Update `eas.json` for your build profiles and requirements.

## 📚 Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript checks
- `npm run test` - Run tests (when configured)

## 🔄 CI/CD & Automation

### GitHub Actions Workflows
- **CI Checks** - Automated linting, type-checking, and tests on PRs
- **Auto-fix** - Scheduled formatting and linting with auto-commits
- **Build & Deploy** - Automated EAS builds on release tags

### Local Development Automation
- Pre-commit hooks via Husky for code quality
- Automated formatting scripts in `scripts/` directory

## 🎨 Customization Guide

### Theming
- Update theme colors in `src/constants/theme.ts`
- Material Design components via React Native Paper
- Dark/light mode configurations

### Adding Features
1. Create feature components in `src/components/`
2. Add new screens to `src/screens/`
3. Update navigation in `src/navigation/`
4. Add business logic to `src/services/`

## 🤝 Contributing

This is a template repository. To contribute:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT - Feel free to use this template for any purpose.

## 🙏 Acknowledgments

Built with:
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)

---

**Need help?** Check out the [Expo documentation](https://docs.expo.dev/) or [React Native documentation](https://reactnative.dev/docs/getting-started)
