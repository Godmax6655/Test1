# Asima Smrddhi Engineering Design System

**Document Status:** Authoritative
**Version:** 1.0
**Brand:** Asima Smrddhi
**Platform:** Ecommerce storefront and supporting B2B experience
**Frontend:** Next.js + TypeScript
**Primary Reference:** Consolidated from approved Stitch visual direction

---

## 1. Purpose

This document defines the authoritative engineering design system for the Asima Smrddhi digital platform.

It translates the approved visual direction from Stitch into reusable, implementation-oriented rules for:

* Brand presentation
* Colors
* Typography
* Layout
* Spacing
* Responsive behavior
* Components
* Ecommerce interfaces
* B2B interfaces
* Accessibility
* Interaction states
* Motion

The implementation in the Next.js codebase must follow this document unless a deliberate design-system change is approved.

Stitch designs are visual references only. They are not the source of truth for application architecture, business rules, component naming, or unsupported business claims.

---

# 2. Brand

## 2.1 Master Brand

**Asima Smrddhi**

This is the sole master brand.

Do not introduce alternative master brands such as:

* Vedic Living
* Vedic Sanctum
* Regal Heritage
* Sovereign Sanctum
* Sacred Sanctum

These terms may only appear as descriptive editorial language or future collection/content names if deliberately approved.

## 2.2 Brand Characteristics

The interface should communicate:

* Authenticity
* Trust
* Indian cultural heritage
* Quality
* Thoughtful preparation
* Premium positioning
* Modern convenience
* Contemporary usability
* Global credibility

The design must remain an ecommerce experience first.

Avoid making the interface feel like:

* A temple website
* A religious portal
* A ceremonial application
* A fashion/luxury textile store
* An overly ornamental cultural website

---

# 3. Product Scope

The initial storefront supports these primary product categories:

1. Puja Samagri
2. Hawan Samagri
3. Gomaye / Cow-Dung Products
4. Spiritual Essentials

The design system must remain extensible so additional product categories can be introduced later without requiring a visual redesign.

Do not encode current product categories directly into reusable UI components.

Example:

Correct:

`ProductCard`

Incorrect:

`GomayeProductCard`

---

# 4. Customer Types

The platform supports:

### B2C

Individual customers purchasing products for personal use.

### B2B

Business and institutional customers, including potential use cases such as:

* Businesses
* Temples
* Institutions
* Retailers
* Bulk purchasers

The design system must support both audiences without creating a separate visual identity.

B2B may use:

* Greater information density
* Business pricing
* Quantity tiers
* Minimum order quantities
* Quote workflows
* Business account information
* Order/document interfaces

The underlying brand, typography, color system and component language remain consistent.

---

# 5. Design Principles

## 5.1 Premium, Not Ornate

Use refined typography, spacing, imagery and restrained color rather than excessive decoration.

## 5.2 Authentic, Not Ceremonial

Cultural references should support the brand without overwhelming ecommerce usability.

## 5.3 Clear, Not Cluttered

Customers should immediately understand:

* What the product is
* What it costs
* Whether it is available
* What action they can take

## 5.4 Consistent

Repeated interface patterns must use the same components and tokens.

## 5.5 Accessible

Visual sophistication must never compromise:

* Contrast
* Readability
* Keyboard navigation
* Focus visibility
* Touch usability
* Screen-reader semantics

## 5.6 Responsive by Design

Components must be designed for desktop, tablet and mobile rather than simply scaled down from desktop.

---

# 6. Color System

The color system is based on the approved Stitch direction.

## 6.1 Core Brand Colors

| Token            | Value     | Primary Use                                    |
| ---------------- | --------- | ---------------------------------------------- |
| `brand-maroon`   | `#7E1B24` | Primary brand/action color                     |
| `brand-gold`     | `#C59B4B` | Accent, highlights, restrained premium details |
| `brand-green`    | `#24462F` | Secondary brand/accent                         |
| `brand-ivory`    | `#FBF9F5` | Primary warm background                        |
| `brand-charcoal` | `#1C1917` | Primary text                                   |

## 6.2 Supporting Colors

Use supporting tones sparingly.

Recommended semantic roles:

```text
earth / terracotta
muted neutral
warm gray
soft beige
```

These should support the core palette rather than compete with it.

## 6.3 Semantic Colors

Semantic colors must be visually distinct from brand colors.

Required semantic roles:

```text
success
warning
error
info
```

Do not use brand maroon as an error color simply because it is visually convenient.

## 6.4 Surfaces

Define reusable surface tokens:

```text
background
surface
surface-elevated
surface-muted
surface-inverse
border
border-subtle
```

Avoid introducing page-specific background colors unless there is a documented reason.

---

# 7. Color Usage Rules

### Primary brand color

Use `brand-maroon` for:

* Primary CTAs
* Important interactive elements
* Active navigation states
* Key brand moments

### Gold

Use `brand-gold` for:

* Small accents
* Dividers
* Highlights
* Premium details
* Selected decorative elements

Do not use gold for large blocks of body text or large primary buttons unless contrast is verified.

### Green

Use `brand-green` for:

* Secondary brand accents
* Selected supporting sections
* Appropriate informational or category treatments

### Ivory

Use `brand-ivory` as the principal warm page background.

### Charcoal

Use `brand-charcoal` for primary readable text.

---

# 8. Typography

## 8.1 Font Families

### Editorial Serif

**Playfair Display**

Use for:

* Hero headings
* Major section headings
* Editorial brand storytelling
* Important display typography

### Interface Sans

**Plus Jakarta Sans**

Use for:

* Navigation
* Product information
* Prices
* Forms
* Buttons
* Tables
* Filters
* Account interfaces
* B2B interfaces
* Transactional content

## 8.2 Typography Hierarchy

The implementation must define reusable typography tokens rather than arbitrary font sizes per page.

Required hierarchy:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Label
Price
Navigation
```

The exact responsive values should be implemented as design tokens.

## 8.3 Typography Rules

* Avoid excessive all-caps text.
* Maintain readable line lengths.
* Do not use decorative serif typography for transactional UI.
* Prices and quantities should use the interface sans-serif.
* Headings should have deliberate hierarchy rather than simply increasing font size.

---

# 9. Layout System

## 9.1 Container

Use a centered maximum-width content container.

The exact maximum width should be established as a shared layout token.

All major pages should use the same container system unless a full-width visual section intentionally requires otherwise.

## 9.2 Grid

### Desktop

12-column grid.

### Tablet

8-column grid.

### Mobile

4-column grid.

Components must be capable of spanning different column widths without hardcoded page-specific positioning.

---

# 10. Breakpoints

The application must use a consistent breakpoint system.

Recommended conceptual tiers:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Avoid creating component-specific breakpoints unless required.

Responsive behavior should be determined by layout requirements rather than device-name assumptions.

---

# 11. Spacing

Use a consistent spacing scale.

Recommended base scale:

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
```

Use smaller values for:

* Icon gaps
* Form controls
* Labels
* Compact UI

Use larger values for:

* Section separation
* Hero sections
* Editorial content
* Major page transitions

Avoid arbitrary values such as:

```text
17px
23px
37px
53px
```

unless there is a specific layout requirement.

---

# 12. Border Radius

Use restrained rounding.

Recommended system:

```text
4px  - compact controls
8px  - cards, panels, inputs
12px - larger overlays/modals
```

Avoid excessive pill-shaped or highly rounded interfaces.

Pills may be used for:

* Tags
* Status badges
* Compact filters

They should not become the default shape for all components.

---

# 13. Borders

Use subtle borders to establish hierarchy.

Required concepts:

```text
border-default
border-subtle
border-strong
border-focus
```

Borders should generally remain understated.

Avoid heavy borders around every element.

---

# 14. Elevation and Shadows

Use elevation sparingly.

Recommended hierarchy:

```text
No shadow
Subtle shadow
Elevated shadow
Overlay shadow
```

Use elevation primarily for:

* Dropdowns
* Popovers
* Modals
* Floating controls
* Selected elevated surfaces

Cards should not all require prominent shadows.

---

# 15. Logo and Brand Treatment

The exact brand name must always be:

**Asima Smrddhi**

The approved logo treatment must appear in customer-facing headers.

The logo must work across:

* Desktop
* Tablet
* Mobile
* Checkout
* Account pages
* B2B pages
* Transactional pages

The logo must not be altered with page-specific decorative treatments.

Future logo assets should support:

* Header
* Footer
* Favicon
* App icon
* Packaging references
* Invoices
* Administrative interface

---

# 16. Global Header

The customer storefront header should remain simple and commerce-oriented.

Primary desktop navigation should support:

```text
Shop
B2B / Business
About
Support
Search
Account
Cart
```

The exact navigation may evolve as the application grows.

Do not add speculative functionality such as:

* Panchang
* Tithi
* Nakshatra
* Ritual timing
* Ceremonial status systems

unless those become actual approved product features.

## Mobile Header

The mobile header must prioritize:

* Menu
* Brand
* Search
* Cart

Account access can be provided through the menu or an additional control depending on available space.

---

# 17. Footer

The footer should provide structured access to:

### Shop

* Categories
* Products

### Business

* B2B
* Bulk purchasing
* Business information

### Company

* About
* Contact

### Support

* FAQ
* Shipping
* Returns
* Order support

### Legal

* Privacy
* Terms

### Brand

* Asima Smrddhi
* Relevant social channels

Do not include unsupported claims, certifications or awards.

---

# 18. Buttons

Required button variants:

```text
PrimaryButton
SecondaryButton
TertiaryButton
TextButton
DangerButton
```

## Primary

Used for the primary action on a page.

Examples:

```text
Shop Collection
Add to Cart
Proceed to Checkout
Submit Request
```

## Secondary

Used for supporting actions.

Examples:

```text
Explore B2B
View Product
Continue Shopping
```

## Text Button

Used for low-emphasis actions.

## Danger

Used for destructive operations.

Examples:

```text
Delete Address
Cancel Order
Remove Item
```

All buttons require:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading

states where applicable.

---

# 19. Links

Links must have:

* Clear visual distinction
* Hover state
* Focus state
* Appropriate contrast

Avoid relying solely on color to communicate link state.

---

# 20. Form System

Reusable form components must include:

```text
Input
Textarea
Select
Checkbox
Radio
Switch
SearchInput
QuantityInput
DateInput
```

Every field should support:

```text
Default
Focus
Filled
Disabled
Error
Success
Read-only
```

where applicable.

Forms must have:

* Visible labels
* Helpful validation messages
* Clear error states
* Keyboard accessibility
* Appropriate autocomplete behavior

---

# 21. Product Card

The standard product card should support:

* Product image
* Product name
* Short description where appropriate
* Current price
* Previous price where applicable
* Discount information where applicable
* Availability
* Variant indicator where applicable
* Primary CTA
* Product link

Optional:

* Rating
* Review count
* Wishlist control

Do not display ratings or reviews unless actual data exists.

---

# 22. Product Detail

Product detail pages should support:

* Product gallery
* Product title
* Product description
* Price
* Discount
* Availability
* Variants
* Quantity
* Add to cart
* Buy/checkout action where appropriate
* Product information
* Shipping information
* Relevant policies
* B2B information where applicable

The component system must support products with and without variants.

---

# 23. Product Gallery

The gallery must support:

* Main image
* Thumbnail navigation
* Image zoom where appropriate
* Responsive mobile behavior
* Accessible image descriptions

Images should preserve appropriate aspect ratios.

Do not force every product into an identical crop if that damages product presentation.

---

# 24. Pricing

Pricing must be represented using reusable components.

Required concepts:

```text
Price
PreviousPrice
Discount
PriceRange
BusinessPrice
QuantityTier
```

B2B pricing may support quantity-based tiers.

Do not hardcode currency formatting into individual components.

Currency formatting must be centralized.

---

# 25. Quantity Selector

The quantity selector must support:

* Increment
* Decrement
* Direct input where appropriate
* Minimum quantity
* Maximum quantity
* Disabled state
* Validation

It must support future B2B quantity requirements without creating a separate incompatible component.

---

# 26. Cart

The cart must support:

* Product
* Variant
* Quantity
* Price
* Line total
* Discount
* Subtotal
* Shipping information
* Applicable taxes
* Final total
* Remove item
* Quantity update
* Checkout CTA

Empty cart state must provide a clear route back to shopping.

---

# 27. Checkout

Checkout components must support:

* Customer information
* Address selection
* Address creation/editing
* Delivery method
* Order summary
* Discounts where applicable
* Taxes where applicable
* Payment method
* Final order review
* Confirmation

Checkout should minimize unnecessary navigation away from the transaction.

---

# 28. B2B Components

B2B should use the same core design system.

Required reusable concepts:

```text
BusinessProfile
BusinessUser
BusinessPricing
QuantityTier
MinimumOrderQuantity
QuoteRequest
QuoteSummary
BusinessOrder
BusinessDocument
```

B2B interfaces may use denser layouts and tables.

The visual identity remains Asima Smrddhi.

---

# 29. Tables

Tables are primarily intended for:

* B2B
* Orders
* Inventory
* Account history
* Administrative interfaces
* Reports

Tables must support:

* Column headers
* Row states
* Hover where appropriate
* Sorting where applicable
* Pagination
* Empty state
* Loading state
* Error state
* Responsive behavior

Mobile tables should transform appropriately rather than simply overflowing whenever possible.

---

# 30. Cards and Panels

Cards should provide grouping and hierarchy.

Use cards for:

* Products
* Categories
* Order summaries
* Account sections
* B2B information
* Dashboard sections

Avoid putting every section inside a card.

Whitespace can often provide better hierarchy than borders and shadows.

---

# 31. Badges

Badges should communicate compact state information.

Examples:

```text
New
Sale
In Stock
Out of Stock
Pending
Processing
Delivered
Business
```

Badge terminology must represent actual application states.

Do not create ceremonial badge names.

---

# 32. Alerts and Notifications

Use standard semantic notification terminology:

```text
Success
Warning
Error
Info
```

Examples:

```text
Order placed successfully.
Payment failed. Please try again.
This product is currently unavailable.
Your business verification is pending.
```

Do not use ceremonial names such as:

```text
SattvicSuccessToast
SacredAlert
ConsecrationOverlay
```

---

# 33. Loading States

Every asynchronous major interface should have an appropriate loading state.

Required patterns:

* Skeleton
* Spinner
* Button loading state
* Page loading state
* Table loading state
* Product loading state

Avoid unnecessary animation.

---

# 34. Empty States

Empty states should explain:

1. What is empty
2. Why it may be empty where useful
3. What the customer can do next

Examples:

```text
Your cart is empty.
No products match your filters.
You have no orders yet.
No saved addresses.
```

Provide a useful CTA where appropriate.

---

# 35. Error States

The system must support:

```text
404
500
Network Error
Unauthorized
Forbidden
Session Expired
Payment Failure
Order Not Found
Product Unavailable
```

Error messages must be understandable to normal customers.

Do not expose:

* Stack traces
* Database errors
* Internal service names
* API secrets
* Infrastructure details

---

# 36. Motion

Motion should be subtle and functional.

Use animation for:

* Page transitions
* Hover states
* Dropdowns
* Modals
* Loading
* Cart updates
* Toasts

Avoid excessive animation.

Motion must respect:

`prefers-reduced-motion`.

Do not make decorative motion necessary to understand or operate the application.

---

# 37. Imagery

Product imagery should be:

* Clear
* High quality
* Product-focused
* Consistent
* Authentic
* Appropriately lit

Avoid imagery unrelated to the actual catalogue.

Do not use:

* Fashion imagery
* Silk-focused imagery
* Jewellery imagery
* Generic luxury imagery
* Unrelated Ayurvedic imagery

unless those products are actually introduced into the catalogue.

---

# 38. Content Rules

Design mockups may use realistic placeholder content.

Production content must not contain unsupported claims.

Do not introduce claims about:

* Certifications
* Laboratory testing
* Religious authenticity
* Specific sourcing
* Supplier relationships
* Organic status
* Geographic origin
* Tax benefits
* Awards
* Government recognition
* Religious authority
* Purity percentages

unless those claims are verified and approved for production.

---

# 39. Accessibility

The implementation must target WCAG-aligned accessibility practices.

Required:

* Sufficient color contrast
* Visible keyboard focus
* Semantic HTML
* Accessible labels
* Keyboard-operable controls
* Accessible form validation
* Meaningful alt text
* Logical heading hierarchy
* Appropriate ARIA only when necessary
* Touch-friendly interactive controls
* Reduced-motion support

Never use color as the sole method of communicating state.

---

# 40. Responsive Design

Every major component must define behavior across:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Examples:

### Product grid

Desktop:

```text
4 columns
```

Tablet:

```text
2–3 columns depending on available width
```

Mobile:

```text
2 columns where product density remains usable,
or 1 column when content requires greater width
```

### Navigation

Desktop:

Full navigation.

Mobile:

Condensed navigation with menu.

### Product detail

Desktop:

Gallery + information side by side.

Mobile:

Stacked gallery and information.

---

# 41. Ecommerce State Model

Components should be designed around real application states.

Examples:

```text
Product:
available
low-stock
out-of-stock
unavailable

Order:
pending
confirmed
processing
shipped
delivered
cancelled
refunded

Payment:
pending
successful
failed
refunded

B2B verification:
pending
approved
rejected
```

The exact business state model will be defined in application architecture and backend documentation.

The design system should provide the visual states without owning business logic.

---

# 42. Admin Compatibility

The admin application should use the same:

* Brand
* Color foundation
* Typography
* Spacing principles
* Components

However, administrative interfaces may use:

* Higher information density
* More tables
* More compact controls
* Data-heavy layouts
* Persistent navigation
* Advanced filters

Customer-facing navigation must never expose administrative controls.

---

# 43. Component Naming Convention

Components should use functional, domain-neutral names.

Correct:

```text
Header
Footer
Button
ProductCard
PriceBlock
QuantitySelector
Modal
Alert
Toast
DataTable
SearchInput
```

Avoid:

```text
SacredButton
VedicCard
SattvicToast
TemplePanel
SanctumHeader
ConsecrationModal
```

This keeps the codebase maintainable and allows the platform to expand beyond its initial catalogue.

---

# 44. Component Architecture

Reusable components should generally be organized by responsibility.

Recommended structure:

```text
components/
├── ui/
│   ├── Button
│   ├── Input
│   ├── Select
│   ├── Badge
│   ├── Alert
│   ├── Modal
│   └── ...
│
├── layout/
│   ├── Header
│   ├── Navigation
│   ├── Footer
│   └── Container
│
├── product/
│   ├── ProductCard
│   ├── ProductGallery
│   ├── ProductInfo
│   ├── PriceBlock
│   ├── VariantSelector
│   └── QuantitySelector
│
├── cart/
├── checkout/
├── account/
└── b2b/
```

Avoid creating components that only exist to support one visual mockup unless there is a genuine reusable behavior.

---

# 45. Design Tokens

Design values must eventually be represented as centralized tokens.

Conceptually:

```text
colors
typography
spacing
radius
shadows
breakpoints
containers
z-index
motion
```

Components should consume tokens rather than hardcoded values wherever practical.

Example:

```text
Button
    ↓
color.primary
spacing.button
radius.control
typography.label
```

not:

```text
Button
    ↓
random hexadecimal value
random padding
random radius
```

---

# 46. Source-of-Truth Hierarchy

When inconsistencies occur, use this hierarchy:

```text
1. Approved business requirements
2. Engineering architecture
3. This DESIGN.md
4. Reusable implemented components
5. Approved Stitch visual references
6. Individual Stitch screen variations
```

A single Stitch screen must never override an established engineering rule without deliberate approval.

---

# 47. What Is Explicitly Excluded

The following are not part of the current design system unless separately approved:

* Panchang functionality
* Tithi functionality
* Nakshatra functionality
* Ritual scheduling
* Religious timing systems
* Temple management functionality
* Certification claims
* Laboratory verification claims
* Specific supplier claims
* Ashram/gaushala sourcing claims
* Tax exemption claims
* Silk products
* Jewellery products
* Fashion products
* Ayurvedic products
* Unrelated luxury products

These may be considered in future product or feature planning but must not be assumed by the UI.

---

# 48. Engineering Implementation Rule

The design system must be implemented progressively.

Do not attempt to build every possible component before building the storefront.

Initial implementation priority:

```text
1. Design tokens
2. Global typography
3. Global layout/container
4. Header
5. Navigation
6. Footer
7. Buttons
8. Links
9. Basic form controls
10. Product Card
11. Price Block
12. Category Card
13. Product Gallery
14. Quantity Selector
15. Alerts / Toasts
16. Loading / Empty / Error states
```

Additional components should be created when the corresponding feature requires them.

---

# 49. Initial Home Page Component Foundation

The Home page should use:

```text
Header
Hero
TrustSection
CategoryGrid
FeaturedProducts
B2BSection
BrandStory
SocialProof
Newsletter
Footer
```

Each section should be composed from reusable components wherever possible.

The Home page should not establish new colors, typography, buttons or spacing values independently.

---

# 50. Design System Governance

Any future design change should answer:

1. Does this change belong to the global design system?
2. Does an existing component already solve the problem?
3. Can the change be implemented as a reusable token?
4. Does it work on mobile?
5. Does it preserve accessibility?
6. Does it work for both B2C and B2B where relevant?
7. Does it introduce an unsupported business claim?
8. Does it create unnecessary visual complexity?

If the change affects multiple screens, update the design system rather than patching individual pages.

---

# 51. Final Design Direction

The final Asima Smrddhi interface should feel:

**Premium + Authentic + Indian + Modern + Trustworthy**

It should combine:

* Refined editorial typography
* Warm ivory surfaces
* Deep maroon brand presence
* Restrained muted gold accents
* Natural green accents
* Strong product imagery
* Generous whitespace
* Clear ecommerce hierarchy
* Restrained geometry
* Excellent responsive behavior

The interface should feel distinctive without becoming ornamental.

The customer should always understand that Asima Smrddhi is a premium, trustworthy ecommerce brand first.

---

# 52. Implementation Status

This document is the engineering design-system baseline.

Future changes should be versioned and reviewed rather than silently diverging from this specification.

**Current authority:**

`DESIGN.md`

**Visual reference:**

Approved Stitch designs

**Implementation authority:**

Next.js component system and design tokens

**Business authority:**

Approved product, ecommerce, B2B and platform requirements
