import React from "react";
import { ScrollView } from "react-native";

// UI – esclusivamente dalla tua libreria
import {
  Column,
  Row,
  Page,
  Card,
  Heading,
  P,
  B,
  Quote,
  Small,
  TextGroup,
  Divider,
  Button,
  Link,
  CodeInline,
  Box,
  Code,
  useTheme,
  useNavLogo,
  Hero
} from "ui";

import { Dimensions } from 'react-native';

export default function Examples() {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Column gap="xxl">

      {/* ===============================
            HERO
        =============================== */}
      <Hero>
        <TextGroup>
          <Heading level={1}>Esempi!</Heading>

        </TextGroup>
      </Hero>

    </Column>
  );
}
