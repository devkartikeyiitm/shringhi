# Development Guide

## Setup Instructions

### Prerequisites
- Node.js 14+
- npm or yarn
- Git
- VS Code (recommended)

### Initial Setup
```bash
git clone https://github.com/devkartikeyiitm/shringhi.git
cd shringhi
npm install
```

## Running Development Server

```bash
npm run dev
```

Server runs on http://localhost:3000

## Project Structure

```
shringhi/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── styles/       # CSS files
│   └── utils/        # Utility functions
├── public/           # Static assets
├── .next/            # Build output
└── package.json      # Dependencies
```

## Code Style Guide

### JavaScript/TypeScript
- Use ES6+ features
- Use const/let (no var)
- Use arrow functions
- Add JSDoc comments for functions

### CSS
- Use CSS modules
- Follow BEM naming convention
- Mobile-first approach

## Git Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and commit: `git commit -m "Description"`
3. Push changes: `git push origin feature/feature-name`
4. Create Pull Request
5. Wait for review and merge

## Useful Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run linter
npm test          # Run tests
npm run format    # Format code with Prettier
```

## Debugging

- Use browser DevTools for frontend debugging
- Use VS Code debugger for Node.js
- Use console.log() sparingly (use debugger instead)

## Common Issues

### Build fails
- Clear .next directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Port already in use
- Kill process: `lsof -ti:3000 | xargs kill -9`
- Or use different port: `npm run dev -- -p 3001`
