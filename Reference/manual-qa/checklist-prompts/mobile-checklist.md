# Mobile App Testing Checklist Prompts

## 1. General Mobile App Testing Checklist

```
Generate a comprehensive mobile app testing checklist for:

App Name: [APP_NAME]
Platform: [iOS/ANDROID/BOTH]
App Type: [NATIVE/HYBRID/REACT_NATIVE/FLUTTER]
Target OS Versions: [VERSIONS]
Key Features: [LIST_FEATURES]

Create checklist covering:
- Installation and uninstallation
- App permissions
- Functionality across devices
- Offline functionality
- Performance and battery usage
- Push notifications
- App updates
- Platform-specific features
```

## 2. iOS App Testing Checklist

```
Create an iOS-specific testing checklist for:

App: [APP_NAME]
iOS Versions: [SUPPORTED_VERSIONS]
Devices: [IPHONE/IPAD/BOTH]
App Store Category: [CATEGORY]

Include checks for:
- App Store guidelines compliance
- Face ID / Touch ID integration
- 3D Touch / Haptic Touch
- Dark mode support
- iPad multitasking
- Apple Watch integration (if applicable)
- Siri shortcuts
- Widget functionality
- App Clips (if applicable)
```

## 3. Android App Testing Checklist

```
Generate an Android-specific testing checklist for:

App: [APP_NAME]
Android Versions: [SUPPORTED_VERSIONS]
Devices: [PHONE/TABLET/BOTH]
Google Play Category: [CATEGORY]

Cover:
- Google Play guidelines compliance
- Material Design compliance
- Fingerprint authentication
- Picture-in-picture mode
- Split-screen multitasking
- Android Auto (if applicable)
- Wear OS integration (if applicable)
- App widgets
- Adaptive icons
```

## 4. Mobile App Functional Testing Checklist

```
Create a functional testing checklist for:

App: [APP_NAME]
Core Features: [LIST_FEATURES]
User Flows: [DESCRIBE_FLOWS]

Test:
- Login/logout functionality
- Registration process
- Navigation between screens
- Form submissions
- Data synchronization
- Search functionality
- Filtering and sorting
- Settings and preferences
- Profile management
- Content sharing
```

## 5. Mobile App Performance Checklist

```
Generate a performance testing checklist for:

App: [APP_NAME]
Performance Goals: [TARGETS]
Critical Screens: [LIST_SCREENS]

Include checks for:
- App launch time (cold start)
- App launch time (warm start)
- Screen transition speed
- API response handling
- Image loading performance
- Scroll performance
- Animation smoothness
- Memory usage
- CPU usage
- Battery consumption
- Network data usage
```

## 6. Mobile App Offline Functionality Checklist

```
Create an offline functionality testing checklist for:

App: [APP_NAME]
Offline Features: [DESCRIBE_FEATURES]
Sync Strategy: [DESCRIBE_STRATEGY]

Test:
- App behavior with no network
- Offline data access
- Offline data creation
- Offline data modification
- Data sync when online
- Conflict resolution
- Cached content display
- Offline error messages
- Airplane mode behavior
```

## 7. Mobile App Push Notification Checklist

```
Generate a push notification testing checklist for:

App: [APP_NAME]
Notification Types: [LIST_TYPES]
Notification Providers: [FCM/APNS/etc.]

Cover:
- Notification delivery
- Notification display
- Notification sound
- Notification badge count
- Notification actions
- Deep linking from notifications
- Notification permissions
- Notification settings
- Silent notifications
- Scheduled notifications
```

## 8. Mobile App Security Checklist

```
Create a security testing checklist for:

App: [APP_NAME]
Authentication: [METHOD]
Sensitive Data: [TYPES]
Compliance: [STANDARDS]

Test:
- Secure data storage
- Data encryption
- SSL/TLS implementation
- Certificate pinning
- Authentication security
- Session management
- Biometric authentication
- Jailbreak/root detection
- Code obfuscation
- API key protection
```

## 9. Mobile App Accessibility Checklist

```
Generate an accessibility testing checklist for:

App: [APP_NAME]
Platform: [iOS/ANDROID]
Accessibility Features: [DESCRIBE_FEATURES]

Include checks for:
- VoiceOver/TalkBack support
- Dynamic text sizing
- Color contrast
- Touch target sizes
- Accessibility labels
- Accessibility hints
- Screen reader navigation
- Reduce motion support
- Closed captions (for video)
```

## 10. Mobile App Update Testing Checklist

```
Create an app update testing checklist for:

App: [APP_NAME]
Current Version: [VERSION]
New Version: [VERSION]
Update Type: [MAJOR/MINOR/PATCH]

Test:
- Update installation
- Data migration
- Settings preservation
- User data integrity
- Backward compatibility
- Force update mechanism
- Optional update flow
- Update notifications
- Rollback scenarios
```

## Comprehensive Mobile App Testing Checklist

```
# Mobile App Testing Checklist for [APP_NAME]

## Installation & Setup
- [ ] App downloads successfully
- [ ] App installs successfully
- [ ] First launch experience smooth
- [ ] Onboarding screens display correctly
- [ ] Permissions requested appropriately
- [ ] App icon displays correctly
- [ ] App name correct
- [ ] Splash screen displays

## Device Compatibility
- [ ] Works on minimum OS version
- [ ] Works on latest OS version
- [ ] Works on small screens (phones)
- [ ] Works on large screens (tablets)
- [ ] Works on different screen resolutions
- [ ] Works on different aspect ratios
- [ ] Notch/cutout handled correctly

## Orientation & Display
- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] Orientation lock works (if applicable)
- [ ] Rotation transitions smooth
- [ ] Layout adapts to orientation
- [ ] Status bar displays correctly
- [ ] Navigation bar displays correctly

## Functionality
- [ ] All features work as expected
- [ ] Navigation flows correctly
- [ ] Forms submit successfully
- [ ] Data loads correctly
- [ ] Search works accurately
- [ ] Filters apply correctly
- [ ] Sorting works properly
- [ ] Pagination works
- [ ] Refresh/pull-to-refresh works

## Authentication
- [ ] Login works with valid credentials
- [ ] Login fails with invalid credentials
- [ ] Registration works
- [ ] Password reset works
- [ ] Social login works (if applicable)
- [ ] Biometric login works (if applicable)
- [ ] Remember me works
- [ ] Logout works
- [ ] Session timeout works

## Network Handling
- [ ] Works on WiFi
- [ ] Works on cellular (4G/5G)
- [ ] Handles slow network gracefully
- [ ] Handles network loss gracefully
- [ ] Reconnection works automatically
- [ ] Offline mode works (if applicable)
- [ ] Airplane mode handled
- [ ] Network error messages clear

## Performance
- [ ] Cold start time acceptable (<3s)
- [ ] Warm start time acceptable (<1s)
- [ ] Screen transitions smooth
- [ ] Scrolling smooth (60fps)
- [ ] Animations smooth
- [ ] Images load quickly
- [ ] No memory leaks
- [ ] Battery drain acceptable
- [ ] App size reasonable
- [ ] Data usage reasonable

## Push Notifications
- [ ] Notifications received
- [ ] Notifications display correctly
- [ ] Notification sound plays
- [ ] Badge count updates
- [ ] Tapping notification opens app
- [ ] Deep linking works
- [ ] Notification actions work
- [ ] Notification settings work
- [ ] Can disable notifications

## Data Management
- [ ] Data saves correctly
- [ ] Data loads correctly
- [ ] Data syncs correctly
- [ ] Cache works properly
- [ ] Data persists after app close
- [ ] Data clears when expected
- [ ] Large datasets handled
- [ ] Data export works (if applicable)

## Media Handling
- [ ] Images display correctly
- [ ] Image upload works
- [ ] Videos play correctly
- [ ] Video upload works
- [ ] Audio plays correctly
- [ ] Camera integration works
- [ ] Photo library access works
- [ ] File picker works

## Permissions
- [ ] Location permission requested
- [ ] Camera permission requested
- [ ] Photo library permission requested
- [ ] Microphone permission requested
- [ ] Notifications permission requested
- [ ] Contacts permission requested
- [ ] App works when permission denied
- [ ] Can change permissions in settings

## Platform-Specific (iOS)
- [ ] Face ID works
- [ ] Touch ID works
- [ ] 3D Touch works (older devices)
- [ ] Haptic feedback works
- [ ] Dark mode supported
- [ ] iPad multitasking works
- [ ] Handoff works (if applicable)
- [ ] Siri integration works (if applicable)
- [ ] Widgets work (if applicable)

## Platform-Specific (Android)
- [ ] Fingerprint authentication works
- [ ] Material Design followed
- [ ] Back button behavior correct
- [ ] App widgets work (if applicable)
- [ ] Picture-in-picture works (if applicable)
- [ ] Split-screen works
- [ ] Adaptive icons display
- [ ] Android Auto works (if applicable)

## Interruptions
- [ ] Handles incoming call
- [ ] Handles incoming SMS
- [ ] Handles low battery
- [ ] Handles low storage
- [ ] Handles app switching
- [ ] Handles lock screen
- [ ] Handles alarm/timer
- [ ] Resumes correctly after interruption

## Updates
- [ ] App update installs successfully
- [ ] Data preserved after update
- [ ] Settings preserved after update
- [ ] No crashes after update
- [ ] New features work
- [ ] Deprecated features removed cleanly

## Accessibility
- [ ] Screen reader works
- [ ] Text scales properly
- [ ] Color contrast sufficient
- [ ] Touch targets large enough (44x44pt)
- [ ] Accessibility labels present
- [ ] Reduce motion respected
- [ ] Voice control works

## Security
- [ ] Data encrypted at rest
- [ ] Data encrypted in transit
- [ ] Sensitive data not logged
- [ ] Screenshots disabled for sensitive screens
- [ ] Biometric data secure
- [ ] API keys not exposed
- [ ] Jailbreak/root detection (if required)

## Error Handling
- [ ] Error messages clear
- [ ] Errors don't crash app
- [ ] Network errors handled
- [ ] Server errors handled
- [ ] Validation errors shown
- [ ] Retry options available
- [ ] Graceful degradation

## Uninstallation
- [ ] App uninstalls cleanly
- [ ] User data removed (if expected)
- [ ] No orphaned files
- [ ] Notifications stop
```

## Best Practices

1. **Test on Real Devices**: Emulators can't catch everything
2. **Test Multiple OS Versions**: Don't just test latest
3. **Test Different Networks**: WiFi, 4G, 5G, slow connections
4. **Test Interruptions**: Calls, notifications, low battery
5. **Test Edge Cases**: Low storage, airplane mode, etc.
6. **Monitor Performance**: Use profiling tools
7. **Check Battery Impact**: Long-running tests
8. **Test Accessibility**: Use screen readers

## Common Mobile App Issues

- Poor performance on older devices
- Battery drain
- Crashes on specific OS versions
- Network handling issues
- Memory leaks
- Poor offline experience
- Notification problems
- Permission handling issues
- Orientation bugs
- Keyboard covering inputs

## Recommended Tools

- **Appium**: Cross-platform automation
- **XCUITest**: iOS automation
- **Espresso**: Android automation
- **Firebase Test Lab**: Cloud testing
- **BrowserStack/Sauce Labs**: Device cloud
- **Charles Proxy**: Network debugging
- **Android Studio Profiler**: Performance
- **Xcode Instruments**: Performance
