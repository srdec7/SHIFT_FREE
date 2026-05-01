# iOS App Store Submission Guide (for MacBook/Xcode)

This project is a hybrid app built with **Next.js** and **Capacitor**. Since you are on a MacBook, you can handle the iOS build and App Store submission.

## 1. Prerequisites
Ensure you have the following installed on your MacBook:
- **Node.js** (v18 or higher recommended)
- **Xcode** (Latest version)
- **CocoaPods** (Run `sudo gem install cocoapods` if not installed)

## 2. Setup
1. Clone the repository (or pull the latest `main` branch if you already have it):
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd SHIFT_FREE
   
   # If you already have it cloned:
   # git checkout main
   # git pull origin main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## 3. Build & Sync
1. Build the Next.js web project to generate static assets:
   ```bash
   npm run build
   ```
2. Sync the assets to the iOS project:
   ```bash
   npx cap sync ios
   ```
*(Note: If CocoaPods asks to install dependencies, it will do so automatically during the sync process).*

## 4. Open in Xcode
Open the iOS project in Xcode:
```bash
npx cap open ios
```

## 5. App Store Submission
In Xcode:
1. Select the **App** target on the left sidebar.
2. Under **Signing & Capabilities**, ensure the correct Apple Developer Team is selected.
3. Verify the **Bundle Identifier** is `com.shiftapp.free`.
4. Select **Any iOS Device (arm64)** as the build destination at the top.
5. Go to the top menu: **Product** -> **Archive**.
6. Follow the prompts in the Organizer to **Distribute App** to the App Store.

## Notes
- Unlike the Saju app, this application does **not** rely on a `.env` file for database connections, so you do not need to configure any environment variables locally.
- Background audio policies have been correctly configured for iOS WebKit.
- If you need any specific certificates or keys from your father, please ask him for the `.p12` or `.mobileprovision` files if they aren't already in your Keychain.

Good luck!
