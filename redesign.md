You are a senior frontend engineer, creative developer, interaction designer, and UI/UX architect.

Redesign the existing portfolio at:

http://localhost:3000/

The goal is NOT to simply add decorative animations.

Transform the existing portfolio into a distinctive, premium, artistic, surreal, cinematic digital experience while preserving excellent usability, accessibility, responsiveness, performance, maintainability, and professional credibility.

The portfolio should feel like the personal website of a highly skilled software engineer who also has strong creative direction and technical taste.

==================================================
PHASE 0 — AUDIT BEFORE MODIFYING ANYTHING
==================================================

Before writing or changing code, inspect the entire existing project.

Audit:

1. Project structure
2. Framework and build system
3. package.json and dependencies
4. Routing
5. Existing components
6. Page structure
7. CSS/Tailwind configuration
8. Typography
9. Existing design tokens
10. Existing animations
11. Framer Motion usage
12. Images and media assets
13. Hero implementation
14. Navigation implementation
15. Responsive breakpoints
16. Mobile behavior
17. Accessibility implementation
18. SEO metadata
19. Loading behavior
20. Performance bottlenecks
21. Existing reusable components
22. Existing content/data
23. Build/type-check/lint configuration

Do not replace working architecture unnecessarily.

First understand what already exists.

Preserve functional behavior unless it directly conflicts with the redesign.

Do not create duplicate components when an existing component can be refactored cleanly.

==================================================
DESIGN DIRECTION
==================================================

The visual language should combine:

- premium editorial design
- cinematic art direction
- surreal digital environments
- modern engineering portfolio
- sophisticated typography
- restrained glassmorphism
- atmospheric gradients
- subtle grain
- depth
- parallax
- soft lighting
- dimensional objects
- intentional asymmetry
- smooth motion

The result should feel:

PERSONAL
CINEMATIC
INTELLIGENT
ARTISTIC
TECHNICAL
PREMIUM
CALM
UNEXPECTED

Do NOT make it look like:

- a generic SaaS template
- a typical developer portfolio
- a crypto website
- a gaming website
- an over-animated WebGL experiment
- a generic glassmorphism template
- a dark website with random glowing circles

Every visual element must have a reason to exist.

==================================================
CORE DESIGN PRINCIPLE
==================================================

Use "controlled surrealism."

The website should initially feel minimal and sophisticated.

As the user interacts or scrolls, additional layers of depth, movement, texture, light and information should reveal themselves.

The experience should reward exploration without becoming distracting.

Think:

editorial website + cinematic motion design + creative developer portfolio.

==================================================
GLOBAL VISUAL SYSTEM
==================================================

Establish a consistent design system.

COLOR:

Use the existing dark green/near-black foundation as the starting point rather than completely abandoning the current identity.

Develop it into a richer atmospheric palette:

- deep green-black
- muted forest
- charcoal
- warm off-white
- restrained metallic/golden accent
- subtle desaturated green highlights

Avoid extremely saturated neon colors.

Use gradients very subtly.

TYPOGRAPHY:

Preserve the existing strong monospace/editorial character where appropriate.

Create clear typographic hierarchy:

- display typography for identity
- monospace/technical typography for metadata
- readable body typography
- small uppercase labels where appropriate

Do not use too many fonts.

Spacing should feel intentional and editorial.

==================================================
NAVIGATION
==================================================

Redesign the navigation without making it unnecessarily complicated.

Current navigation:

Work
How I work
Stack
Journey
Résumé

Maintain these destinations unless the existing architecture indicates better routing.

Navigation behavior:

- transparent/atmospheric at the top
- subtle backdrop treatment after scrolling
- smooth transition into a compact floating/navigation state
- elegant hover indicators
- subtle underline or displacement animation
- accessible keyboard focus
- mobile navigation must be genuinely usable

Do not make the navbar oversized.

==================================================
HERO — PRIMARY EXPERIENCE
==================================================

The hero is the most important part of the redesign.

Use the existing screenshot as the structural starting point, but completely improve the visual composition.

The current hero has:

LEFT:
identity + introduction + CTA

RIGHT:
large unused visual space

Use this right-side space as the visual focal point.

Create a cinematic visual composition containing the provided/generated hero artwork/video.

The visual should feel integrated into the website rather than looking like a rectangular video pasted onto the page.

==================================================
HERO VIDEO / 3D ARTWORK
==================================================

Use the available hero visual asset if it exists in the project.

If an existing hero video is available, inspect it before replacing it.

Treat the video as a cinematic visual layer.

Requirements:

- subtle 3D perspective
- gentle orbital/parallax movement
- slow camera movement
- atmospheric lighting
- soft depth
- calm brightness
- subtle grain
- restrained glow
- cinematic contrast
- no excessive saturation

The image/video should NOT overpower the typography.

Darken the visual slightly so the overall experience remains calm and sophisticated.

Avoid clipping important portions of the artwork.

Use object-position intelligently.

On desktop:

LEFT ~50–55%:
content

RIGHT ~45–50%:
visual composition

But avoid rigid columns.

Allow controlled overlap between the typography and visual layer.

==================================================
HERO ATMOSPHERE
==================================================

Build several subtle layers:

1. Base background
2. Radial atmospheric gradient
3. Hero artwork/video
4. Soft light bloom
5. Depth layer
6. Grain/noise texture
7. Optional floating abstract geometry
8. Foreground typography
9. Interaction layer

Do not make all layers constantly move.

Some layers should remain almost static.

The movement should be slow and barely perceptible.

==================================================
NAME ANIMATION
==================================================

The name:

"Nurudeen Salihu"

should become one of the signature interaction elements.

Do NOT use a generic text fade.

Render the name in a way that allows individual letters to respond independently.

On pointer interaction:

- subtle letter displacement
- tiny rotation
- slight vertical movement
- very small scale changes
- subtle color transition
- magnetic attraction
- neighboring-letter reaction

The effect must remain extremely refined.

Example behavior:

When the cursor approaches a letter:

letter moves 2–6px toward/away from cursor.

Neighboring letters react progressively less.

When pointer leaves:

letters smoothly return to their original positions.

Use spring-based animation rather than linear movement.

Do not make letters jump.

Do not distort readability.

==================================================
HERO MICRO-INTERACTIONS
==================================================

Add subtle interactions to:

- navigation links
- CTA buttons
- portrait card
- social links
- project cards
- metadata
- section headings

Examples:

Buttons:

hover
→ slight lift
→ subtle background transition
→ tiny magnetic movement

press
→ slight compression

Links:

hover
→ underline/indicator grows
→ text shifts 1–2px
→ subtle opacity/color transition

Do not animate everything.

==================================================
HERO MACRO-INTERACTIONS
==================================================

The hero environment should respond subtly to the pointer.

Use cursor position to influence:

- background gradient
- visual depth
- floating elements
- hero artwork
- ambient light

The effect should be slow and dampened.

Never attach expensive event-driven layout calculations to every mouse movement.

Prefer:

transform
opacity
CSS variables
motion values
requestAnimationFrame where necessary

Avoid triggering React renders on every pointer event.

==================================================
PORTRAIT CARD
==================================================

Introduce a premium portrait/profile card into the hero composition.

The card should feel editorial rather than like a standard profile image.

Potential structure:

portrait
+
small technical metadata
+
location
+
role
+
availability/status

Example:

NURUDEEN SALIHU
FULL-STACK DEVELOPER
ABUJA / NIGERIA

On hover:

The portrait subtly shifts perspective.

The card rotates very slightly in 3D.

Lighting moves across the surface.

A translucent information layer appears.

Additional short personal information is revealed.

Use depth and shadow rather than excessive glow.

The card should feel like a physical object in a digital environment.

==================================================
PORTRAIT HOVER BEHAVIOR
==================================================

Desktop:

pointer movement controls extremely subtle 3D tilt.

Hover reveals information.

A soft highlight follows the pointer.

Touch devices:

Do NOT depend on hover.

Use a tap interaction or simply display the information naturally.

Do not hide important content behind hover-only interactions.

==================================================
HERO CONTENT
==================================================

Keep the current concise editorial copy style.

Do not make the hero excessively verbose.

The hierarchy should be:

availability/status
↓
NAME
↓
ROLE
↓
short positioning statement
↓
CTA

Possible structure:

OPEN TO FULL-TIME ENGINEERING ROLES

Nurudeen Salihu

Full-stack developer, Abuja

[existing positioning copy]

[See the work]
[Download résumé]
[Email me]

Preserve existing real content where available.

Do not invent fake professional claims.

==================================================
SCROLL EXPERIENCE
==================================================

The hero should not simply disappear when scrolling.

Create a cinematic transition into the next section.

As the user scrolls:

0–20%
Hero remains stable.

20–50%
Artwork gains subtle depth.

Typography begins moving at a different rate.

Background atmosphere shifts.

50–80%
Hero content subtly moves upward.

Visual composition scales slightly.

Ambient elements drift.

80–100%
Hero transitions naturally into the next section.

Avoid excessive zooming.

Do not make the user feel like the page is fighting their scroll.

Use Framer Motion scroll progress where appropriate.

==================================================
SECTION TRANSITIONS
==================================================

Extend the visual language throughout the portfolio.

Sections should feel like chapters rather than independent boxes.

Use:

- overlapping sections
- atmospheric gradients
- large whitespace
- subtle vertical movement
- typography transitions
- masked reveals
- horizontal micro-movement
- depth changes

Avoid putting every section inside a rounded rectangle.

==================================================
WORK / PROJECTS
==================================================

Redesign project presentation to feel editorial.

Each project should have:

- strong visual identity
- project number/index
- title
- concise description
- technology
- role/context
- visual preview
- interaction

On hover:

- image/video subtly scales
- metadata shifts
- cursor interaction becomes apparent
- project number or indicator reacts

Do not use excessive card borders.

Explore asymmetric layouts.

Some projects can be large featured pieces.

Others can be smaller supporting projects.

Preserve real project data already present in the repository.

==================================================
HOW I WORK
==================================================

Turn this section into a visual process narrative.

Possible stages:

01
Understand

02
Architect

03
Build

04
Automate

05
Refine

Use scroll-triggered transitions.

The sequence should feel like a story rather than a list.

==================================================
STACK
==================================================

Do not create a generic icon grid.

Present technologies as part of the editorial system.

Use subtle animated typography, orbital relationships, floating labels, or interactive clusters if appropriate.

Keep usability high.

Avoid unnecessary spinning logos.

==================================================
JOURNEY
==================================================

Present the journey as a timeline/editorial narrative.

Use progressive reveals.

Allow individual milestones to have visual emphasis.

Keep the information readable and authentic.

==================================================
CURSOR SYSTEM
==================================================

If appropriate, create a custom cursor interaction for desktop.

The cursor may change contextually:

normal
→ small dot

interactive
→ expanded state

project
→ "VIEW"

image
→ subtle magnification indicator

However:

DO NOT replace the native cursor entirely if doing so harms accessibility.

Disable or simplify custom cursor behavior on:

- touch devices
- reduced-motion environments
- accessibility contexts

==================================================
MOTION SYSTEM
==================================================

Create reusable animation primitives.

Examples:

FadeIn
RevealText
Magnetic
Parallax
TiltCard
ScrollReveal
StaggerChildren
SectionTransition

Do not duplicate animation logic across dozens of components.

Use consistent timing.

Suggested motion principles:

micro interaction:
150–300ms

UI transition:
300–500ms

content reveal:
500–900ms

large cinematic movement:
800–1600ms

Use spring physics where appropriate.

Avoid constant animation loops unless they genuinely contribute to the atmosphere.

==================================================
REDUCED MOTION
==================================================

Respect:

prefers-reduced-motion: reduce

When reduced motion is enabled:

- disable parallax
- disable cursor effects
- disable unnecessary 3D transforms
- remove looping decorative animation
- simplify reveals
- preserve content visibility
- maintain functional interactions

The site must remain beautiful without motion.

==================================================
PERFORMANCE
==================================================

Performance is critical.

Do NOT sacrifice performance for visual effects.

Prioritize:

transform
opacity
filter only when appropriate
CSS variables
GPU-friendly animation

Avoid:

layout-triggering animations
continuous React state updates from pointer movement
large unnecessary dependencies
huge uncompressed videos
multiple simultaneous WebGL scenes
excessive blur layers

Hero video:

- lazy-load where appropriate
- provide poster/fallback
- use optimized encoding
- avoid unnecessarily high bitrate
- preload strategically
- pause when not visible if appropriate
- respect reduced motion/data-saving conditions

Use IntersectionObserver where appropriate.

==================================================
RESPONSIVE DESIGN
==================================================

Desktop:

Use the full cinematic composition.

Tablet:

Reduce spatial complexity.

Mobile:

Do NOT simply shrink the desktop layout.

Recompose the hero specifically for mobile.

Recommended mobile order:

status
name
role
description
CTA
portrait/visual
scroll indicator

Portrait card becomes naturally visible.

Remove hover-dependent functionality.

Reduce motion intensity.

Avoid horizontal overflow.

Ensure typography scales correctly.

Test approximately:

360px
390px
430px
768px
1024px
1280px
1440px
1920px+

==================================================
ACCESSIBILITY
==================================================

Ensure:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible buttons
- accessible links
- sufficient color contrast
- meaningful alt text
- no hover-only critical information
- reduced-motion support
- video does not interfere with content
- screen readers receive logical content order

Do not sacrifice accessibility for visual effects.

==================================================
VISUAL QUALITY CONTROL
==================================================

The website should NOT feel:

busy
noisy
over-designed
generic
template-like
AI-generated
gimmicky

The visual hierarchy should remain immediately understandable.

A visitor should know within seconds:

WHO I AM
WHAT I DO
WHAT I BUILD
HOW TO EXPLORE MY WORK
HOW TO CONTACT ME

==================================================
IMPLEMENTATION RULES
==================================================

Use the existing technology stack.

If the project already uses:

React
Vite
TypeScript
Tailwind
Framer Motion

continue using them.

Do not introduce Three.js/WebGL merely for visual novelty.

Only introduce another dependency if there is a clear architectural/performance benefit.

Keep TypeScript strict and clean.

Avoid any unnecessary `any`.

Create reusable components.

Keep components reasonably sized.

Separate:

content
layout
animation
visual effects

where appropriate.

==================================================
SEO
==================================================

Preserve and improve:

document title
meta description
Open Graph metadata
favicon
semantic heading hierarchy

Ensure the homepage has one meaningful H1.

==================================================
VALIDATION
==================================================

After implementation:

1. Run the development build.
2. Run TypeScript checks.
3. Run lint.
4. Run production build.
5. Check console for errors/warnings.
6. Test every route.
7. Test desktop responsiveness.
8. Test tablet responsiveness.
9. Test mobile responsiveness.
10. Test keyboard navigation.
11. Test reduced-motion mode.
12. Test portrait interactions.
13. Test hero video behavior.
14. Test scroll animations.
15. Test navigation.
16. Test CTA buttons.
17. Test résumé download.
18. Test email link.
19. Check for horizontal overflow.
20. Check for layout shifts.
21. Check animation performance.

Do not consider the implementation complete until these checks have been performed.

==================================================
FINAL DESIGN STANDARD
==================================================

The final portfolio should feel like:

"A cinematic digital studio for one engineer."

It should combine the credibility of a serious software engineer with the visual sophistication of an award-winning creative website.

The design should be recognizable even without a logo.

The hero should be the signature moment.

The animation should invite interaction rather than demand attention.

The surreal elements should create atmosphere and personality while the typography and content maintain clarity.

DO NOT blindly implement every effect listed above.

First audit the existing site.

Then determine which effects genuinely improve the experience.

Prioritize:

1. composition
2. typography
3. visual hierarchy
4. interaction quality
5. motion quality
6. performance
7. accessibility

over quantity of effects.

Make the final result feel intentional, expensive, personal, and technically exceptional.