# AI Agent Instructions for ACST Ignite Web Project

## Project Overview
This is a modern React web application built with Vite and TypeScript, using ShadcnUI components for the user interface. The project serves as a website for an academic institution.

## Architecture & Structure

### Core Technologies
- **Frontend**: React + TypeScript + Vite
- **UI Components**: ShadcnUI (Radix UI primitives with Tailwind)
- **State Management**: React Query for server state
- **Routing**: React Router v6
- **Meta Tags**: React Helmet Async

### Key Directories
- `/src/components/ui/`: Reusable UI components built with ShadcnUI/Radix
- `/src/pages/`: Page components mapped to routes
- `/src/hooks/`: Custom React hooks
- `/src/lib/`: Utility functions and shared code

## Development Workflow

### Setup & Running
```bash
npm install  # Install dependencies
npm run dev  # Start development server
npm run build  # Production build
npm run lint  # Run ESLint
```

### Component Patterns
1. **Page Components**: Located in `/src/pages/`, these handle routing and compose UI components
2. **UI Components**: 
   - Use ShadcnUI components from `/components/ui/`
   - Follow the composition pattern exemplified in existing components
   - Always import from `@/components/ui` using alias

### Best Practices
1. **TypeScript**: Maintain strict typing for all components and functions
2. **State Management**:
   - Use React Query for server state (`QueryClientProvider` in `App.tsx`)
   - Keep local state minimal and close to where it's used
3. **SEO & Meta Tags**:
   - Use the `SEO` component from `@/components/SEO` for page metadata
   - Wrap meta updates in `HelmetProvider` context

### Common Patterns
1. **Navigation**: Use `NavLink` component for consistent navigation styling
2. **Responsive Design**: Use the `use-mobile` hook for mobile-specific logic
3. **Toast Notifications**: Use either `toast` from `use-toast` or Sonner component

## Integration Points
1. **API Integration**: Use React Query hooks for data fetching
2. **Theming**: Theme context provided by `next-themes`
3. **Form Handling**: Use `@hookform/resolvers` with React Hook Form

## Notes
- The project is set up with aliases - use `@/` to import from src directory
- ShadcnUI components are customizable through the `components.json` configuration
- Use `lucide-react` for consistent iconography across the application