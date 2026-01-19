# Mobile Test Scenarios Prompts

This document contains AI prompts for generating comprehensive mobile test scenarios across various categories.

## 1. App Lifecycle Test Scenarios

### Prompt:
```
Generate comprehensive test scenarios for mobile app lifecycle management including:
- App installation and first launch
- App updates and data migration
- Background/foreground transitions
- App termination and recovery
- Low memory scenarios
- System interruptions (calls, SMS, notifications)

For each scenario, include:
- Preconditions
- Test steps
- Expected results
- Platform-specific considerations (iOS/Android)
```

### Example Output Format:
```gherkin
Scenario: App recovers state after system interruption
  Given the user is on the checkout page with 3 items in cart
  When an incoming phone call is received
  And the user answers the call for 2 minutes
  And the user returns to the app
  Then the checkout page should still be displayed
  And all 3 items should remain in the cart
  And the payment form data should be preserved
```

---

## 2. Network Connectivity Test Scenarios

### Prompt:
```
Create test scenarios for mobile app behavior under various network conditions:
- WiFi to cellular switching
- Online to offline transitions
- Poor network conditions (2G, 3G)
- Network interruption during critical operations
- Airplane mode scenarios
- VPN connectivity

Include scenarios for:
- Data synchronization
- Media uploads/downloads
- Real-time features
- Cached content access
```

---

## 3. Permission Handling Test Scenarios

### Prompt:
```
Generate test scenarios for mobile permission handling:
- Camera access
- Photo library access
- Location services (Always, While Using, Never)
- Microphone access
- Contacts access
- Notifications
- Biometric authentication

For each permission type, cover:
- First-time permission request
- Permission granted flow
- Permission denied flow
- Permission revoked after initial grant
- Settings navigation for permission changes
```

---

## 4. Device-Specific Test Scenarios

### Prompt:
```
Create test scenarios covering device-specific behaviors:
- Screen orientation changes (portrait/landscape)
- Different screen sizes (small phones, large phones, tablets)
- Foldable devices (folded/unfolded states)
- Notch and dynamic island handling
- Split-screen multitasking
- Picture-in-picture mode
- Dark mode and light mode switching
- Accessibility features (VoiceOver, TalkBack, large text)
```

---

## 5. Mobile Gesture Test Scenarios

### Prompt:
```
Generate test scenarios for mobile gesture interactions:
- Single tap, double tap, long press
- Swipe (up, down, left, right)
- Pinch to zoom in/out
- Pull to refresh
- Drag and drop
- Multi-finger gestures
- Edge swipes for navigation
- 3D Touch / Haptic Touch (iOS)

Include edge cases like:
- Rapid consecutive gestures
- Interrupted gestures
- Gestures near screen edges
- Gestures on scrollable content
```

---

## 6. Push Notification Test Scenarios

### Prompt:
```
Create comprehensive test scenarios for push notifications:
- Notification delivery when app is foreground/background/terminated
- Notification tap actions
- Deep linking from notifications
- Rich notifications (images, actions, replies)
- Notification grouping and stacking
- Notification badges
- Silent notifications
- Scheduled notifications
- Notification permissions

Include scenarios for:
- Different notification priorities
- Notification sound and vibration
- Notification center interactions
- Lock screen notifications
```

---

## 7. Authentication & Security Test Scenarios

### Prompt:
```
Generate test scenarios for mobile authentication and security:
- Biometric authentication (Face ID, Touch ID, Fingerprint)
- PIN/Password authentication
- Session management and timeout
- Multi-factor authentication
- Social login (Google, Facebook, Apple)
- Password reset flows
- Account lockout after failed attempts
- Secure data storage
- Certificate pinning
- Jailbreak/root detection

Consider scenarios for:
- Biometric enrollment changes
- Multiple biometric identities
- Failed biometric attempts
- Fallback authentication methods
```

---

## 8. In-App Purchase Test Scenarios

### Prompt:
```
Create test scenarios for in-app purchases:
- One-time purchases
- Subscription purchases (monthly, yearly)
- Consumable vs non-consumable items
- Purchase restoration
- Subscription renewal and cancellation
- Free trial periods
- Promotional offers
- Family sharing
- Purchase failures and retries
- Receipt validation

Include edge cases:
- Interrupted purchase flow
- Multiple simultaneous purchases
- Expired payment methods
- Refund scenarios
```

---

## 9. Media Handling Test Scenarios

### Prompt:
```
Generate test scenarios for media handling:
- Camera capture (photo and video)
- Photo library selection
- Image upload and compression
- Video playback
- Audio recording and playback
- Media caching
- Thumbnail generation
- Media deletion

Consider scenarios for:
- Large file uploads
- Multiple media selections
- Media format compatibility
- Storage space limitations
- Background media operations
```

---

## 10. Location Services Test Scenarios

### Prompt:
```
Create test scenarios for location-based features:
- Location permission levels (Always, While Using, Never)
- GPS accuracy levels
- Location updates in background
- Geofencing
- Location-based content
- Map integration
- Turn-by-turn navigation
- Location sharing

Include scenarios for:
- Location services disabled
- Poor GPS signal
- Indoor vs outdoor location
- Battery optimization impact
- Mock location detection
```

---

## 11. Cross-Platform Consistency Test Scenarios

### Prompt:
```
Generate test scenarios to verify consistency between iOS and Android:
- UI/UX parity
- Feature availability
- Navigation patterns
- Platform-specific design guidelines
- Data synchronization across platforms
- Push notification behavior
- Deep linking
- Share functionality
- Platform-specific integrations

Identify acceptable differences vs. bugs
```

---

## 12. Offline Functionality Test Scenarios

### Prompt:
```
Create test scenarios for offline capabilities:
- Offline data access
- Offline content creation
- Sync queue management
- Conflict resolution
- Offline error messaging
- Cache management
- Offline-first features

Include scenarios for:
- Going offline mid-operation
- Extended offline periods
- Sync after coming online
- Partial sync scenarios
```

---

## Usage Instructions

1. **Copy the relevant prompt** based on your testing needs
2. **Customize with your app context**: Add specific features, user flows, or business requirements
3. **Specify the output format**: Gherkin, test case format, or checklist
4. **Include platform specifics**: Mention if you need iOS-only, Android-only, or cross-platform scenarios
5. **Add constraints**: Specify device types, OS versions, or specific edge cases

## Example Customization

**Generic Prompt:**
```
Generate test scenarios for push notifications
```

**Customized Prompt:**
```
Generate test scenarios for push notifications in an e-commerce app that sends:
- Order confirmation notifications
- Delivery status updates
- Promotional offers
- Cart abandonment reminders

Focus on iOS 15+ and Android 11+. Include deep linking to specific product pages and order tracking screens. Output in Gherkin format.
```
