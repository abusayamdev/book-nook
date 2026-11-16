
# BookNook - Design System

## 1. Project Overview

BookNook is a digital library management platform where users
can discover books, manage their personal library, borrow books,
and track their borrowing history.

The interface should feel like a modern, premium online library.

## 2. Design Direction

- Design style: Premium editorial and modern minimalism
- Layout: Clean, spacious and organized
- Approach: Mobile-first responsive design
- Visual priority: Book covers, readable content and easy navigation
- Consistency: Reusable components across all pages

## 3. Color Palette

| Token | Color | Usage |
|---|---|---|
| Primary | #254C3B | Buttons, links, branding |
| Primary Hover | #193A2C | Hover states |
| Background | #FAF8F3 | Main page background |
| Surface | #FFFFFF | Cards and panels |
| Accent | #C69A56 | Highlights and labels |
| Foreground | #20291F | Main text |
| Muted | #77796F | Secondary text |
| Border | #E9E5DB | Borders and dividers |

Use the existing shadcn CSS variables where possible.
Do not introduce duplicate color systems.

## 4. Typography

- Headings: Elegant serif or refined sans-serif
- Body: Clean sans-serif
- Body text: 14px to 16px
- Section headings: 28px to 40px
- Main hero heading: 48px to 72px
- Maintain comfortable line height and readability.

## 5. Component Guidelines

Use shadcn/ui as the primary component library.

Preferred components:
- Button
- Card
- Badge
- Input
- Textarea
- Select
- Dialog
- Dropdown Menu
- Sheet
- Table
- Skeleton
- Avatar
- Separator

Use Lucide React for icons.

Customize components according to the BookNook theme.
Avoid unnecessary custom components when an existing
reusable component is suitable.

## 6. Layout Guidelines

- Maximum content width: 1200px
- Center content horizontally
- Use consistent spacing
- Keep sections visually separated
- Use responsive CSS Grid and Flexbox
- Avoid unnecessary visual clutter

## 7. Responsive Design

Mobile:
- Single-column layouts
- Mobile navigation menu
- Comfortable touch targets
- Responsive typography

Tablet:
- Two-column layouts where appropriate
- Balanced spacing

Desktop:
- Full navigation
- Multi-column book grids
- Spacious content sections

## 8. Interaction Guidelines

- Provide hover and focus states
- Use accessible buttons and links
- Show loading states when data is loading
- Show empty states when no data exists
- Display meaningful success and error messages
- Avoid decorative controls that do nothing

## 9. Code Quality

- Use TypeScript
- Prefer reusable components
- Use meaningful variable and function names
- Keep components focused on one responsibility
- Add comments for important logic
- Avoid unnecessary complexity
- Follow the existing project conventions

## 10. Accessibility

- Use semantic HTML
- Provide accessible labels
- Maintain sufficient color contrast
- Support keyboard navigation
- Provide alternative text for meaningful images

## 11. Development Rules

- Read relevant Next.js documentation before using
  unfamiliar APIs.
- Follow the installed Next.js version.
- Keep shadcn/ui as the primary component system.
- Test each feature before committing.
- Use meaningful Git commit messages.
- Do not expose secrets in frontend code.
