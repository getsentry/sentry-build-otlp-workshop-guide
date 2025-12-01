# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro Starlight documentation site for the OpenTelemetry with Sentry workshop. The site teaches developers how to send OpenTelemetry traces and logs to Sentry via OTLP for powerful observability in full-stack applications.

## Development Commands

- `npm run dev` or `npm start` - Start development server (localhost:4321)
- `npm run build` - Build for production (outputs to ./dist/)
- `npm run preview` - Preview production build locally
- `npm install` - Install dependencies

## Architecture

**Framework**: Astro with Starlight integration for documentation theming
**Content**: MDX files in `/src/content/docs/` with structured workshop modules
**Deployment**: Vercel adapter configured for production deployment

## Workshop Content Structure

The workshop is organized into modules covering OpenTelemetry integration with Sentry:

1. **Quickstart** - Set up the OTEL e-commerce application locally
2. **Distributed Tracing** - Understanding traces, transactions, spans
3. **Sending Data to Sentry** - Configure OpenTelemetry SDK and Collector
   - Using OpenTelemetry SDK Direct
   - Using the OpenTelemetry Collector
   - Connect Frontend to Backend Tracing
   - Sentry Log and Trace Drains
4. **Debugging** - Troubleshooting and investigation
   - Debugging Common Setup Issues
   - Investigating Performance Issues
   - Investigating Errors with Logs
5. **Wrapping Up** - Summary and next steps

## Technology Focus

The workshop specifically covers:
- **Frontend**: React with Sentry SDK
- **Backend**: Node.js + Express with OpenTelemetry auto-instrumentation
- **Database**: PostgreSQL with automatic query tracing
- **Cache**: Redis with operation tracing
- **Infrastructure**: Docker Compose
- **Protocol**: OTLP (OpenTelemetry Protocol)
- **Observability**: Distributed tracing, trace propagation, structured logging

## Key Configuration Files

- `astro.config.mjs` - Starlight theme with navigation for OpenTelemetry workshop
- `src/content.config.ts` - Content collections schema using Zod validation
- Custom CSS in `/src/styles/` for Sentry-specific styling
- External links configured for Sentry OTLP documentation

## Content Guidelines

- Workshop focuses on OpenTelemetry and OTLP protocol
- All examples use vendor-neutral OpenTelemetry instrumentation
- Code samples demonstrate Node.js backend with Express and React frontend
- Workshop assumes familiarity with React and Node.js concepts
- Emphasis on practical, production-ready OTLP integration patterns