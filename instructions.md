# MPM Portal – Copilot Instructions

## Objective

Generate a modern enterprise portal using:

- React
- TypeScript
- Material UI (MUI v5)
- React Router DOM
- Responsive Layout
- Modular Component Architecture

The application should visually match the provided UI reference.

---

# Application Overview

Create a portal named:

# MPM Portal

The portal contains:

1. Home Page
2. Dashboard Page
3. Data Catalog Page
4. ChatBot Page

The app should look like an enterprise analytics platform.

---

# Tech Stack

Use:

- React + TypeScript
- Vite
- Material UI (MUI)
- React Router DOM
- MUI Icons

Optional:

- Zustand or Context API
- Axios
- React Query

---

# Folder Structure

Generate project with this structure:

```txt
src/
│
├── assets/
│
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx
│   │   ├── TopNavbar.tsx
│   │   ├── Sidebar.tsx
│   │
│   ├── common/
│   │   ├── StatCard.tsx
│   │   ├── PageHeader.tsx
│   │   ├── SearchBar.tsx
│   │
│   ├── chatbot/
│   ├── datacatalog/
│   ├── dashboard/
│
├── pages/
│   ├── home/
│   │   └── HomePage.tsx
│   │
│   ├── dashboard/
│   │   └── DashboardPage.tsx
│   │
│   ├── datacatalog/
│   │   └── DataCatalogPage.tsx
│   │
│   ├── chatbot/
│   │   └── ChatBotPage.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── services/
│
├── types/
│
├── theme/
│   └── theme.ts
│
├── App.tsx
├── main.tsx
```

---

# Routing

Use React Router DOM.

Routes:

```tsx
/
→ HomePage

/dashboard
→ DashboardPage

/data-catalog
→ DataCatalogPage

/chatbot
→ ChatBotPage
```

---

# Global Layout Requirements

Create a reusable enterprise layout.

Layout includes:

## Top Navbar

Fixed top navigation bar.

Contains:

- Logo / Portal Name
- Top menu items:
  - MAMLS
  - MIDAS
  - DATACATALOG
  - ChatBot
- Notification icon
- User profile dropdown

Navbar style:

- Dark blue gradient
- Height around 60px
- White text
- Sticky/fixed top

---

## Left Sidebar

Permanent sidebar.

Contains:

- Home
- Dashboard
- Data Catalog

Sidebar requirements:

- Collapsible support
- Highlight active route
- Icons for menu items
- Light background

---

# Theme Requirements

Create custom MUI theme.

Primary colors:

```ts
Primary Blue: #0B1F4D
Secondary Blue: #1E3A8A
Accent: #2563EB
Background: #F5F7FB
```

Typography:

- Clean enterprise typography
- Use Inter or Roboto

Border Radius:

- 12px cards
- Soft shadows

---

# Home Page Requirements

Page Title:

```txt
Welcome to MPM Portal
```

Add 4 module cards:

1. MAMLS
2. MIDAS
3. Data Catalog
4. ChatBot

Each card contains:

- Icon
- Title
- Description
- CTA button

Card Requirements:

- Hover animation
- Shadow
- Rounded corners
- Equal height cards
- Responsive grid

Buttons navigate to corresponding pages.

---

# Dashboard Page Requirements

Page title:

```txt
MAMLS Dashboard
```

Embed Power BI dashboard using iframe.

Create reusable component:

```tsx
<PowerBIFrame />
```

Requirements:

- Responsive iframe
- Full width
- Rounded border
- Scroll disabled
- Placeholder URL support

Example:

```tsx
<iframe
  src="POWER_BI_EMBED_URL"
  width="100%"
  height="800"
/>
```

Add loading placeholder/skeleton.

---

# Data Catalog Page Requirements

Create enterprise data catalog UI.

Top section:

- Title
- Add Dataset button

Stats cards:

- Total Datasets
- Total Tables
- Total Dashboards
- Data Sources

Search + Filter Bar:

Filters:

- Domain
- Owner
- Tag
- Source
- Data Quality

Create searchable table.

Columns:

```txt
Dataset
Description
Owner
Source
Rows
Columns
Last Updated
Quality
Dashboards
```

Features:

- Pagination
- Search
- Filter chips
- Sort support
- Status badges:
  - Fresh
  - Warning
  - Delayed

Table style:

- Modern enterprise table
- Sticky header
- Hover rows

Use mock JSON data.

---

# ChatBot Page Requirements

Create ChatGPT-style UI.

Layout:

Left Panel:
- Conversation history
- New Chat button

Right Panel:
- Chat messages
- Input box
- Send button

Requirements:

- User messages aligned right
- Bot messages aligned left
- Scrollable chat container
- Modern message bubbles

Input fixed at bottom.

Use mock responses initially.

---

# Reusable Components

Generate reusable components:

## StatCard

Props:

```ts
title
value
icon
growth
```

---

## PageHeader

Props:

```ts
title
subtitle
action
```

---

## SidebarItem

Props:

```ts
label
icon
path
```

---

# Responsive Requirements

Must support:

- Desktop
- Tablet
- Mobile

Behavior:

## Mobile

- Sidebar becomes drawer
- Navbar collapses
- Cards stack vertically

---

# Code Standards

Requirements:

- Use TypeScript interfaces
- Avoid inline styles
- Use MUI sx props minimally
- Prefer reusable components
- Use functional components only
- Use proper folder separation

---

# Data Requirements

Create mock data files.

Examples:

```ts
datasets.ts
chatHistory.ts
dashboardData.ts
```

---

# Future Ready Architecture

Keep architecture scalable for:

- Role-based access
- SSO login
- Dynamic menus
- Dynamic dashboard loading
- API integration
- Admin module
- Power BI integration
- LangGraph AI integration

---

# Power BI Integration Notes

Prepare code structure for future:

```ts
/services/powerbi/
```

Include placeholder:

```ts
getDashboardEmbedUrl()
```

---

# ChatBot Future Integration

Prepare architecture for:

- OpenAI API
- LangGraph agents
- Streaming responses
- Multi-conversation support

---

# UI Expectations

The generated UI should match:

- Enterprise SaaS dashboard
- Clean spacing
- Minimal design
- Modern cards
- Soft shadows
- Rounded corners
- Professional blue theme

Use consistent spacing:

```ts
8px grid spacing system
```

---

# Deliverables

Generate:

- All pages
- Layout components
- Routing setup
- MUI theme
- Mock data
- Reusable components
- Responsive design
- Clean TypeScript code

Ensure project runs with:

```bash
npm install
npm run dev
```

---

# Important

Do NOT generate:

- Backend code
- Authentication implementation
- Real API integration

Use placeholders and mock data only.

---

# Final Goal

Generate a production-quality frontend starter architecture for an enterprise analytics portal similar to the provided UI design.
