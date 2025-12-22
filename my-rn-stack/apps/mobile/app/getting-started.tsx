import React from "react";

// UI – exclusively from your library
import {
  Column,
  Row,
  Card,
  Heading,
  P,
  B,
  Small,
  TextGroup,
  Divider,
  Button,
  Link,
  CodeInline,
  Box,
  Badge,
  Code,
  useTheme,
} from "ui";

export default function DocsIndex() {
  const { theme } = useTheme();

  return (
    <Column gap="lg">
      {/* ===============================
          HERO
      =============================== */}
      <TextGroup>
        <Heading level={1}>Getting Started</Heading>
        <P>
          This guide explains how to install and correctly configure the UI
          library within a React Native / Expo application, with full Web
          support. By following these steps, you will obtain a consistent,
          scalable, and production-ready setup.
        </P>
      </TextGroup>

      {/* ===============================
          Requirements
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>1</Badge>
            <Heading level={2}>Requirements</Heading>
          </Row>

          <P>Before getting started, make sure you meet the following requirements:</P>

          <Code>{`Node.js ≥ 18`}</Code>

          <P>
            The library is designed to run in cross-platform environments
            (iOS, Android, and Web) without requiring platform-specific
            configuration.
          </P>
        </TextGroup>
      </Card>

      {/* ===============================
          Installation
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>2</Badge>
            <Heading level={2}>Installation</Heading>
          </Row>

          <P>Install the library using your preferred package manager:</P>

          <Code>{`npm install ui`}</Code>

          <P>Alternatively, if you are using Yarn:</P>

          <Code>{`yarn add ui`}</Code>

          <P>
            The installation process does not modify your project configuration
            and does not introduce automatic side effects.
          </P>
        </TextGroup>
      </Card>

      {/* ===============================
          Theme Provider
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>3</Badge>
            <Heading level={2}>Theme Provider</Heading>
          </Row>

          <TextGroup spacing="sm">
            <P>
              The library relies on a centralized <B>ThemeProvider</B> to manage:
            </P>
            <B>• theme (light / dark)</B>
            <B>
              • <Link href="/docs/tokens">design tokens</Link>
            </B>
            <B>• safe area handling</B>
            <B>• root layout structure</B>
            <B>• global scroll behavior</B>
          </TextGroup>

          <P>
            Wrapping the entire application with the ThemeProvider is required.
          </P>

          <Divider />

          <Heading level={3}>Example (_layout.tsx / App.tsx)</Heading>

          <Code>{`import { ThemeProvider } from "ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}</Code>

          <TextGroup>
            <P>By default:</P>
            <B>• safe area handling is enabled</B>
            <B>• vertical scrolling is enabled</B>
            <B>• the selected theme is persisted</B>
          </TextGroup>
        </TextGroup>
      </Card>

      {/* ===============================
          Usage
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>4</Badge>
            <Heading level={2}>Usage</Heading>
          </Row>

          <P>
            Once the provider is configured, you can start using the components
            exposed by the library.
          </P>

          <Divider />

          <Heading level={3}>Basic example</Heading>

          <Code>{`import { Column, Heading, Button } from "ui";

export default function Example() {
  return (
    <Column gap={12}>
      <Heading level={1}>Welcome</Heading>
      <Button label="Get Started" />
    </Column>
  );
}`}</Code>

          <TextGroup>
            <P>All components:</P>
            <B>• are fully typed</B>
            <B>• follow the design token system</B>
            <B>• work consistently across mobile and web</B>
          </TextGroup>
        </TextGroup>
      </Card>

      {/* ===============================
          Layout
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>5</Badge>
            <Heading level={2}>Layout</Heading>
          </Row>

          <P>
            The library provides layout primitives (Row, Column) and UI controls
            with standardized heights.
          </P>

          <Divider />

          <Heading level={3}>Correct alignment example</Heading>

          <Code>{`<Row>
  <Code>npm install ui</Code>
  <Button label="Read Docs" />
</Row>`}</Code>

          <Row>
            <Code>{`npm install ui`}</Code>
            <Button label="Read Docs" />
          </Row>

          <TextGroup>
            <P>In this case:</P>
            <B>• Code and Button share the same height</B>
            <B>• the layout remains visually consistent</B>
            <B>• no manual styling is required</B>
          </TextGroup>
        </TextGroup>
      </Card>

      {/* ===============================
          Navigation
      =============================== */}
      <Card>
        <TextGroup>
          <Row>
            <Badge>6</Badge>
            <Heading level={2}>Navigation</Heading>
          </Row>

          <P>
            The <B>Link</B> component provides a unified navigation abstraction.
          </P>

          <TextGroup>
            <P>The Link component automatically handles:</P>
            <B>• internal navigation</B>
            <B>• external links</B>
            <B>• integration with Expo Router</B>
            <B>• active state management (when used with NavProvider)</B>
          </TextGroup>

          <Divider />

          <P>Text link</P>
          <Code>{`<Link href="/docs">Documentation</Link>`}</Code>

          <P>Link rendered as a button</P>
          <Code>{`<Link href="/docs" variant="button">
  Read Docs
</Link>`}</Code>
        </TextGroup>
      </Card>

      <Row justify="flex-end">
        <Link href="/docs" variant="button" size="lg">
          Read Documentation
        </Link>
      </Row>
    </Column>
  );
}
