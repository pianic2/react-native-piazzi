import React from "react";
import { B, Column, Heading, Link, P, TextGroup, Divider, Card, Button } from "ui";

export default function TokensIndex() {
  return (
    <Column>
      <TextGroup>
        <Heading level={1}>Design Tokens</Heading>
        <P>
          I Design Tokens sono il fondamento della libreria UI.
          Definiscono colori, spaziature, tipografia, ombre e layering in modo
          centralizzato e scalabile.
        </P>
        <Divider />
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Principi chiave</Heading>
        <Button variant="ghost" disabled={true} label="Nessun valore hardcoded nei componenti" />
        <Button variant="ghost" disabled={true} label="Token semantici, non stilistici" />
        <Button variant="ghost" disabled={true} label="Theming e refactor senza breaking change" />
      </TextGroup>

      <TextGroup>
        <Heading level={2}>Tokens</Heading>
        <Link href="/docs/tokens/colors" variant="button">Colors</Link>
        <Link href="/docs/tokens/radius" variant="button">Radius</Link>
        <Link href="/docs/tokens/shadow" variant="button">Shadow</Link>
        <Link href="/docs/tokens/spacing" variant="button">Spacing</Link>
        <Link href="/docs/tokens/typography" variant="button">Typography</Link>
        <Link href="/docs/tokens/zIndex" variant="button">Z-Index</Link>
      </TextGroup>
    </Column>
  );
}
