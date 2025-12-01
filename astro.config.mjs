// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'OpenTelemetry with Sentry Workshop',
    components: {
      // Use our custom logo component
      SiteTitle: './src/components/SentryLogo.astro',
    },
    social: {
      github: 'https://github.com/getsentry/otel-workshop-guide',
    },
    customCss: [
      // Add our custom Sentry theme
      './src/styles/custom.css',
    ],
    sidebar: [
      {
        label: 'Workshop',
        items: [
          { label: 'Quickstart', slug: 'quickstart' },
          {
            label: 'Distributed Tracing in Sentry',
            slug: 'distributed-tracing'
          },
          {
            label: 'Sending Data to Sentry',
            collapsed: true,
            items: [
              {
                label: 'Using OpenTelemetry SDK Direct',
                slug: 'using-otel-sdk-direct'
              },
              {
                label: 'Using the OpenTelemetry Collector',
                slug: 'using-otel-collector',
              },
              {
                label: 'Connect Frontend to Backend Tracing',
                slug: 'connect-frontend-backend',
              },
              {
                label: 'Using Sentry SDK with OTLP Integration',
                slug: 'using-sentry-sdk-otlp',
              },
              {
                label: 'Sentry Log and Trace Drains',
                slug: 'sentry-drains',
              },
            ],
          },
          {
            label: 'Debugging',
            collapsed: true,
            items: [
              {
                label: 'Debugging Common Setup Issues',
                slug: 'debugging-setup-issues',
              },
              {
                label: 'Investigating Performance Issues',
                slug: 'investigating-performance',
              },
              {
                label: 'Investigating Errors with Logs & Traces',
                slug: 'investigating-errors',
              },
            ],
          },
          {
            label: 'Wrapping Up',
            slug: 'wrapping-up',
          },
        ],
      },
      {
        label: 'Resources',
        items: [
          { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
          { label: 'Sentry OTLP Documentation', link: 'https://docs.sentry.io/concepts/otlp/' },
          {
            label: 'Sentry Trace Explorer',
            link: 'https://docs.sentry.io/product/explore/trace-explorer/',
          },
          {
            label: 'Sentry Log and Trace Drains',
            link: 'https://docs.sentry.io/product/drains/',
          },
        ],
      },
    ],
  }), sentry()],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    imageService: true,
    includeFiles: [
      './src/assets/**/*',
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png',
    ],
  }),
});