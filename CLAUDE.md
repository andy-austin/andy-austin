# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal Next.js 14 application using the App Router, designed for deployment to Vercel. The project follows modern Next.js conventions with a clean, minimal structure.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Structure
- `app/` - Next.js App Router directory
  - `layout.js` - Root layout component with metadata
  - `page.js` - Homepage component
- `next.config.js` - Next.js configuration
- `package.json` - Dependencies and scripts

### Key Features
- Uses Next.js 14 App Router
- Minimal React setup with no additional styling frameworks
- ESLint configured for Next.js
- Optimized for Vercel deployment (no additional config needed)

## Development Notes

- This is a barebones setup - add styling, components, and features as needed
- The project uses JavaScript (not TypeScript) for simplicity
- No CSS framework is included - add Tailwind, styled-components, or CSS modules as preferred
- Ready for Vercel deployment with zero configuration