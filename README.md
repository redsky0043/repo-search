# GitHub Repository Search

A modern Next.js application for searching and exploring GitHub repositories with a clean, responsive interface built using Feature-Sliced Design architecture.

## 🚀 Features

- **Repository Search** - Search GitHub repositories with real-time results
- **Infinite Scroll** - Load more repositories seamlessly
- **Repository Details** - Detailed view with comprehensive information
- **Dark/Light Theme** - Toggle between themes
- **Type Safety** - Full TypeScript support with generated API types
- **Modern UI** - Built with shadcn/ui components

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology for scalable and maintainable code organization.

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Global loading UI
│   ├── layout.tsx         # Root layout with providers
│   └── repository/
│       └── [owner]/
│           └── [repo]/
│               └── page.tsx # Repository details page
│
├── shared/                # Shared layer - reusable code
│   ├── api/              # API layer
│   │   └── github/       # GitHub API integration
│   │       ├── client/   # HTTP client
│   │       ├── hooks/    # React Query hooks
│   │       └── types/    # Generated API types
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities and formatters
│   ├── providers/        # Context providers
│   └── ui/               # UI components (shadcn/ui)
│
├── entities/              # Business entities
│   └── repository/       # Repository entity
│       ├── model/        # Types and models
│       └── ui/           # Repository UI components
│
├── features/              # Business features
│   └── search/           # Search functionality
│       └── ui/           # Search UI components
│
└── widgets/              # Composite UI blocks
    ├── header/           # Header widget
    ├── footer/           # Footer widget
    └── repository-details/ # Repository details widget
```

### Layer Dependencies

- **App** → Widgets, Features, Entities, Shared
- **Widgets** → Features, Entities, Shared
- **Features** → Entities, Shared
- **Entities** → Shared
- **Shared** → No dependencies

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **React 19** - Latest React features

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons

### State Management
- **TanStack Query** - Server state management

### API & Types
- **GitHub REST API** - Repository data source
- **openapi-typescript** - Auto-generated TypeScript types
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting with FSD rules
- **Prettier** - Code formatting
- **pnpm** - Fast package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd repo-search
```

2. Install dependencies
```bash
pnpm install
```

3. Generate API types
```bash
pnpm generate:types
```

4. Start development server
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm generate:types # Generate API types from OpenAPI
```

## 🎨 Design System

### Components
- Built with **shadcn/ui** for consistency
- Custom components follow FSD principles
- Responsive design with Tailwind CSS

### Theming
- Dark/Light mode support
- CSS variables for theming
- Consistent color palette

### Icons
- **Lucide React** for consistent iconography
- Optimized for performance

## 🔧 Configuration

### ESLint
- Flat config format
- FSD-specific import sorting
- TypeScript and React rules
- Auto-fix capabilities

### Prettier
- No semicolons
- Import sorting with `@trivago/prettier-plugin-sort-imports`
- Consistent code formatting

### TypeScript
- Strict mode enabled
- Path mapping for clean imports
- Generated types from OpenAPI

## 📱 Features in Detail

### Search Functionality
- **Debounced search** - 500ms delay to prevent excessive API calls
- **Minimum 3 characters** - Reduces unnecessary requests
- **Infinite scroll** - Load 30 repositories per page
- **Real-time results** - Instant feedback as you type

### Repository Details
- **Comprehensive information** - Stars, forks, language, creation date
- **External links** - GitHub and homepage links
- **Responsive layout** - Works on all screen sizes
- **Loading states** - Skeleton UI for better UX

### Performance
- **Server Components** - Optimal rendering performance
- **Client Components** - Only when interactivity is needed
- **React Query caching** - Efficient data management
- **Code splitting** - Automatic with Next.js

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify** - Static site generation
- **Railway** - Full-stack deployment
- **Docker** - Containerized deployment

## 🤝 Contributing

1. Follow FSD architecture principles
2. Use TypeScript for all new code
3. Follow ESLint and Prettier rules
4. Write meaningful commit messages
5. Test your changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
