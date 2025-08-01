# ArkLab AI Agent Catalog

A responsive and SEO-friendly web application built with Next.js and TypeScript that displays a catalog of AI agents with advanced filtering, search capabilities, and server-side rendering.

## 🚀 Features

### Core Features
- **Server-Side Rendering (SSR)** - Initial data is fetched and rendered on the server for optimal SEO and performance
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Advanced Filtering** - Filter agents by status, category, and pricing model
- **Real-time Search** - Search agents by name or description with instant results
- **State Management** - Redux toolkit for managing application state
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **SEO Optimized** - Dynamic meta tags and semantic HTML structure

### Technical Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **Shadcn/ui** for UI components
- **Framer Motion** for animations
- **Tailwind CSS** for styling

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd arklab-ai-catalog
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page with SSR data fetching
│   └── globals.css         # Global styles
├── components/
│   ├── providers/          # Redux and theme providers
│   ├── ui/                 # Shadcn/ui components
│   ├── agent-card.tsx      # Individual agent card component
│   ├── agent-catalog.tsx   # Main catalog component
│   ├── filter-controls.tsx # Filter sidebar component
│   └── search-bar.tsx      # Search input component
├── lib/
│   ├── store/              # Redux store configuration
│   │   ├── slices/         # Redux slices
│   │   ├── store.ts        # Store configuration
│   │   └── hooks.ts        # Typed Redux hooks
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
└── public/
    └── mock-agents.json    # Mock data for AI agents
\`\`\`

## 🎯 Key Features Explained

### Server-Side Rendering (SSR)
The application fetches agent data on the server during the initial page load, ensuring:
- Fast initial page rendering
- SEO-friendly content
- Better performance on slower devices

### State Management
Redux Toolkit manages:
- Agent data and filtered results
- Filter states (search, status, category, pricing)
- Loading and error states

### Filtering System
- **Search**: Real-time search by agent name or description
- **Status Filter**: Multi-select checkboxes for Active, Beta, Archived
- **Category Filter**: Multi-select checkboxes for various categories
- **Pricing Model**: Radio buttons for Free Tier, Subscription, Per-Use
- **Clear Filters**: One-click reset of all filters

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Collapsible filter sidebar on mobile
- Touch-friendly interactions

### Performance Optimizations
- Code splitting with Next.js
- Optimized re-renders with Redux
- Efficient filtering with useMemo
- Lazy loading of animations

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Agents
Edit `public/mock-agents.json` to add new agents following the schema:

\`\`\`json
{
  "id": "unique-id",
  "name": "Agent Name",
  "description": "Agent description",
  "status": "Active" | "Beta" | "Archived",
  "category": "Category Name",
  "pricingModel": "Free Tier" | "Subscription" | "Per-Use"
}
\`\`\`

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update component styles in individual component files
- Global styles in `app/globals.css`

### Animations
- Framer Motion animations are configured in components
- Modify animation variants in component files
- Add new animations using Framer Motion API

## 📱 SEO Features

- Dynamic meta tags based on content
- Semantic HTML structure
- Open Graph tags for social sharing
- Structured data for search engines
- Responsive meta viewport
- Proper heading hierarchy

## 🚀 Deployment

The application is ready for deployment on Vercel, Netlify, or any platform supporting Next.js.

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Environment Variables for Production
Set the following in your deployment platform:
- `NEXT_PUBLIC_BASE_URL` - Your production URL

## 📄 License

This project is part of a take-home challenge for ArkLab Frontend Developer Intern position.

## 🤝 Contributing

This is a take-home challenge project. For questions or clarifications, please contact the hiring team.
