# Using Different Testing Prompts To Actually Test A JD Flash-Sale Gift Campaign

A lot of QA prompts are ambitious and weirdly impractical. They generate a lot of output, they sound organized, and then someone still has to rewrite half of it before the team can use anything. The value in this repository is simpler than that—it splits testing work by job. Requirements analysis is not test-case writing. Test strategy is not bug reporting. Performance testing is not functional testing with bigger numbers.

That matters.

So this post does one thing. It walks through the testing-type prompts in this repo—what each one is for, where it fits, how far it should be used, and what kind of result it can produce in a realistic business scenario.

The scenario is a JD online flash-sale gift campaign. That is a nice test bed because it looks straightforward and absolutely is not. It brings traffic spikes, stock consistency, user eligibility, anti-abuse rules, payment timing, order-state synchronization, fulfillment status, campaign configuration, and frontend-backend mismatches—all at once. In other words, it is exactly the kind of business flow that exposes whether a prompt is useful or just decorative.

---

## The short version

If you just want the selection logic:

| Testing Type | What it solves | Best time to use it |
|---|---|---|
| Requirements Analysis | clarifies business rules, scope, risk, and scenario pool | right after PRD review |
| Test Strategy | decides what to test deeply and what to keep shallow | before execution planning |
| Test Case Writing | turns scenarios into executable assets | when test design begins |
| Functional Testing | validates core flows, rules, and states | after build delivery |
| API Testing | digs into eligibility, stock, order, payment, and callbacks | once services are stable |
| Automation Testing | turns expensive regression into cheap regression | in repeated iterations |
| Performance Testing | checks if the campaign survives peak traffic | before launch |
| Security Testing | checks bypass, replay, abuse, and exposure risk | before external release |
| Manual Testing | covers what scripts miss—timing, UX, weird edge behavior | before go-live |
| Mobile Testing | handles app, H5, device, weak-network, and lifecycle issues | when mobile carries the business |
| Accessibility Testing | checks whether the flow is usable for more than the ideal user | when the campaign is public-facing |
| Bug Reporting | turns findings into something engineering can fix quickly | after defects are found |
| Test Reporting | gives stakeholders a decision-ready summary | at checkpoints and release gates |
| Test Case Review | finds missing coverage before execution starts | after cases are drafted |
| AI-Assisted Testing | helps prioritize risk, scenarios, and regression focus | when scope is wide and time is short |

This is not one prompt in fifteen costumes. These are fifteen separate testing actions.

---

## The business scenario

Business: JD online flash-sale gift campaign  
Goal: eligible users can grab limited gifts at zero cost or ultra-low cost during defined campaign windows  
Core flow: campaign exposure → login → eligibility check → stock lock → order creation → payment/confirmation → fulfillment  
Main risks:

- traffic spike at campaign start
- overselling or underselling stock
- eligibility bypass
- successful order creation with broken payment or fulfillment state
- frontend stock display drifting away from backend truth
- bad campaign configuration breaking time, price, gift, or region rules

Those risks drive the rest of the article.

---

## 1. Requirements Analysis Prompt—do not start with test cases

This prompt is useful because it forces the team to make the campaign rules explicit. A lot of flash-sale failures are not implementation bugs first—they are unclear rules pretending to be requirements.

### Best-fit scope

- the PRD just landed
- campaign rules are complicated
- product, operations, engineering, and QA all need a shared view
- you need a scenario pool before you need cases

### What it should give you

- business context
- test scope
- positive, negative, boundary, and risk scenarios
- test focus and dependencies

### Simulated result

```markdown
Key test scenarios:
1. PLUS user successfully grabs a gift after the campaign starts and completes payment
2. Non-PLUS user is blocked when clicking the purchase button
3. Invited user is shown as eligible on the page but rejected by the order API
4. Multiple users place orders at near-zero stock and no oversell occurs
5. Stock is correctly released after payment timeout
6. Per-day purchase limit works across multiple sessions and campaign windows
7. Client countdown and server campaign time remain consistent
```

That is the point. It makes the shape of the risk visible before the team burns time testing the wrong thing.

---

## 2. Test Strategy Prompt—stop spreading effort evenly

Flash-sale campaigns punish average prioritization. If everything gets some attention, the truly dangerous flows do not get enough.

### Best-fit scope

- short test cycle
- limited people
- release decisions need explicit priorities
- business stakeholders need a reasoned depth model

### Simulated result

```markdown
Priority recommendation:
- P0: eligibility validation, stock deduction, order and payment flow, stock rollback
- P1: campaign page rendering, countdown, state messaging, order-state sync
- P2: non-core recommendation areas, historical campaign content, peripheral static pages

Out of deep-test scope for this round:
- non-campaign standard purchase flows
- retired campaign pages
- fulfillment logic unrelated to this campaign's gifts
```

That is what strategy is for. It does not tell the team to work harder—it tells the team where to work harder.

---

## 3. Test Case Writing Prompt—turn ideas into execution

Having scenarios is not the same as having usable cases. This prompt turns abstract risk into steps, data, and expected outcomes.

### Best-fit scope

- scenarios already exist
- assets must be handed across multiple testers
- execution needs standardization

### Simulated result

```markdown
Title: PLUS user successfully grabs a gift after campaign start
Preconditions:
- account is PLUS
- stock is available
- user has not participated today

Steps:
1. Open the campaign page and wait for 10:00
2. Click "Grab Now"
3. Submit the order and complete payment

Expected results:
- button becomes clickable after campaign start
- order is created successfully
- stock is reduced by 1
- repeated participation is blocked afterward
```

There is nothing glamorous about that—and that is exactly why it works.

---

## 4. Functional Testing Prompt—make sure state, rules, and UI all agree

This prompt is strong in campaign flows because the business looks simple while the state model is not.

### Simulated result

```markdown
Functional focus:
- campaign not started / active / ended state transitions
- in-stock / low-stock / sold-out rendering
- eligible / ineligible / already-participated user routing
- order success / payment timeout / payment failure / order cancel closure
```

Requirements analysis finds the holes. Functional testing walks into them on purpose.

---

## 5. API Testing Prompt—many campaign failures are just API failures wearing UI clothes

The page is not the real risk surface. Eligibility API, stock API, order API, payment callback—those are the places where campaigns break in expensive ways.

### Best-fit scope

- service-based architecture
- rules enforced on the backend
- idempotency, contracts, and state consistency matter

### Simulated result

```markdown
Core APIs:
- GET /activity/seckill/config
- POST /activity/seckill/qualification/check
- POST /activity/seckill/stock/lock
- POST /activity/seckill/order/create
- POST /payment/callback

Key validations:
- repeated clicks do not double-lock stock
- ineligible requests return explicit error codes
- stock rollback after timeout is idempotent
- duplicated payment callbacks do not cause state oscillation
```

Once the business is decomposed into service behavior, the testing path gets much cleaner.

---

## 6. Automation Testing Prompt—make the expensive regression cheap

Campaign logic changes constantly—time windows, eligibility rules, gift configuration, frontend states. Running the same high-value checks manually every round gets expensive fast.

### Simulated result

```markdown
Automation priority:
- P0 automation: eligibility, order main flow, payment-timeout rollback, sold-out behavior
- P1 automation: campaign-state switch, order-state sync, config effectiveness
- P2 manual only: visual details, weak-network interaction nuance, temporary ops configuration checks
```

That is the right shape. Automation should not try to own everything. It should own what is expensive, repeated, and failure-prone.

---

## 7. Performance Testing Prompt—without load testing, this is just gambling

The average traffic number does not matter much here. The spike does.

### Simulated result

```markdown
Performance scenarios:
- traffic burst from 09:59:50 to 10:00:10
- joint pressure on eligibility and stock-lock APIs
- payment-timeout stock-release batch compensation pressure

Monitoring focus:
- RT / P95 / P99
- stock-lock failure rate
- order success rate
- message backlog
- Redis and DB hot keys
```

If a performance prompt does not center the campaign-start window, it missed the business.

---

## 8. Security Testing Prompt—someone will try to cheat the rules

Eligibility bypass, request replay, parameter tampering, brute access, fake identities—these are not abstract security concerns. They are campaign reality.

### Simulated result

```markdown
Security focus:
- modify userLevel in request payload to fake PLUS eligibility
- replay stock-lock or order-create requests
- query another user's order status through broken authorization
- flood eligibility APIs to validate rate limiting and anti-abuse rules
```

You are designing a campaign. Someone else is designing a bypass.

---

## 9. Manual Testing Prompt—scripts do not really notice that something feels off

Campaign UX matters. Button wording, countdown behavior, sold-out fallback, eligibility messaging—those can create complaints even when the backend is technically correct.

### Simulated result

```markdown
Exploration focus:
- rapid clicking in the last second before campaign start
- sold-out state after navigating back to the page
- clarity of ineligible-user messaging
- consistency across app, H5, and mini-program
```

Some online backlash is not caused by hard bugs. It is caused by a product and implementation combination that annoys people.

---

## 10. Mobile Testing Prompt—do not pretend app and H5 are the same thing

This business probably lives on mobile. If you skip devices, OS versions, lifecycle behavior, weak-network handling, and payment return behavior, you are skipping real risk.

### Simulated result

```markdown
Mobile focus:
- compatibility on older iPhone Safari and Android Chrome
- repeated-submission risk under weak network
- countdown refresh after background-to-foreground switch
- order-state refresh after in-app payment return
```

---

## 11. Accessibility Testing Prompt—public campaigns are for more than ideal users

Teams skip this one a lot. That is a mistake. If the flow breaks keyboard focus, screen-reader order, or button semantics, it is excluding users by design.

### Simulated result

```markdown
Accessibility focus:
- clear accessible name for the grab button
- readable countdown for screen readers
- sold-out state not expressed by color alone
- failure messages accessible to assistive tech
```

---

## 12. Bug Reporting, Test Reporting, Test Case Review, and AI-Assisted Testing—these are closure prompts, not side prompts

These four look secondary until a team actually has to communicate clearly under time pressure.

### Bug Reporting Prompt

Useful for findings like this:

```markdown
Title: Order can still be created after stock is sold out
Severity: Critical
Precondition: stock = 0
Actual: UI shows sold out, order API still returns success
Impact: oversell risk
```

### Test Reporting Prompt

Useful for release decisions:

```markdown
Conclusion:
- all P0 issues are closed
- high-concurrency stock locking is within expected range
- 2 P1 UX issues remain and do not block release
Release recommendation: go with enhanced production monitoring
```

### Test Case Review Prompt

Useful when a team wrote thirty cases and still forgot payment-timeout rollback.

```markdown
Review outcome:
- main flow coverage is acceptable
- missing scenarios: cross-session limits, duplicate callbacks, weak-network repeated clicks, qualification-cache drift
- risk level: high
```

### AI-Assisted Testing Prompt

Useful when requirements and changes keep expanding:

```markdown
Suggested regression priority:
1. qualification rules
2. stock lock and release
3. order-state synchronization
4. countdown and button-state consistency
```

---

## Final point—the prompt is not there to test for you

My bar for QA prompts is not especially romantic. They do not need to sound clever. They do not need to imitate a consultancy slide deck. They need to do one thing—move the team into the correct problem space faster.

That is what these testing-type prompts do when they are used properly. You do not hand one universal prompt to an AI assistant and hope it magically understands your whole project. You split a hard business problem into requirements analysis, strategy, cases, APIs, performance, security, reporting, and review—then let AI help structure each of those jobs.

That is the right use of prompts in testing. Not replacement. Amplification.

If you are actually starting from scratch, my advice is direct:

- start with `Requirements Analysis`
- default to `Standard-version/`
- for campaign business, always combine `API`, `Performance`, `Security`, and `Manual`
- before release, finish with `Test Reporting`

Flash-sale business is not hard because the docs are annoying. It is hard because the team has very little time to identify the small set of failures that would become expensive online incidents.

A good prompt helps with that. A vague one just gives you more reading.
