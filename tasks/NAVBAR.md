# Navbar Component Implementation

Navbar component for the application. This involves a generic base Navbar component and a specific BlockNavbar that utilizes it.

## Completed Tasks

- [x] Define BlockNavbar component structure (`components/Block/Navbar/Navbar.vue`)
- [x] Style BlockNavbar component using Tailwind CSS and design tokens
- [x] Create Histoire story for BlockNavbar (`components/Block/Navbar/Navbar.story.vue`)
- [x] Create documentation for BlockNavbar (`content/blocks/Navbar.md`)
- [x] Create generic Navbar component (`components/Navbar/Navbar.vue`)
- [x] Style generic Navbar component
- [x] Create Histoire story for generic Navbar (`components/Navbar/Navbar.story.vue`)
- [x] Create documentation for generic Navbar (`content/components/Navbar.md`)
- [x] Refactor BlockNavbar to use the generic Navbar component

## In Progress Tasks

## Future Tasks

- [ ] Add responsiveness using container queries (to generic Navbar, if applicable, or BlockNavbar)
- [ ] Implement more advanced slots/props for customization in generic Navbar
  - [x] Accept `links` as a prop with a slot backup for the center section

## Implementation Plan

First, a generic, reusable `Navbar.vue` component will be created in `components/Navbar/`. This component will provide basic structure, styling, and slots for common navbar elements (e.g., logo, navigation links, actions).

Then, the existing `BlockNavbar.vue` (in `components/Block/Navbar/`) will be refactored to use this new generic `Navbar` as its base. `BlockNavbar` will then provide the specific content and layout for the application's main navigation.

Both components will be styled using Tailwind CSS, adhering to the project's dark-mode-first design system and utilizing defined design tokens.
Histoire stories and documentation will be created for both the generic `Navbar` and the `BlockNavbar`.

### Relevant Files

- `components/Navbar/Navbar.vue` - The generic base Vue component for Navbars. ✅
- `components/Navbar/Navbar.story.vue` - Histoire story for the generic Navbar component. ✅
- `content/components/Navbar.md` - Documentation page for the generic Navbar. ✅
- `components/Block/Navbar/Navbar.vue` - The specific Block Navbar component for the application. ✅
- `components/Block/Navbar/Navbar.story.vue` - Histoire story for the BlockNavbar component. ✅
- `content/blocks/Navbar.md` - Documentation page for the BlockNavbar. ✅
- `assets/theme.css` - Contains design tokens to be used for styling.
