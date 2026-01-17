/**
 * Componente P — paragrafo di testo stilizzabile per l'app.
 *
 * Rappresenta un elemento di testo usato per i contenuti principali e descrittivi.
 * Incapsula la resa di un testo con stile predefinito coerente con il tema dell'app,
 * permettendo di sovrascrivere aspetti visivi comuni (colore, dimensione, peso, stile inline).
 *
 * @param props.children - Contenuto testuale o elementi React da renderizzare all'interno del paragrafo.
 * @param props.style - Stili inline aggiuntivi (es. TextStyle) che verranno uniti agli stili di default.
 * @param props.color - Colore del testo (stringa CSS o token del tema). Se non specificato usa il colore predefinito del tema.
 * @param props.size - Dimensione del testo (numero in pixel o token di design: 'sm' | 'md' | 'lg', ecc.). Predefinito: valore del tema per paragrafi.
 * @param props.weight - Peso del font (es. '400' | '600' | 'bold'). Se non fornito usa il peso predefinito del tema.
 * @param props.numberOfLines - Limita il numero di righe mostrate; utile per testo troncato con ellissi.
 * @param props.ellipsizeMode - Modalità di troncamento ('tail' | 'middle' | 'head' | 'clip').
 * @param props.accessibilityLabel - Etichetta accessibile alternativa per screen reader.
 * @param props.testID - Identificatore per i test e l'automazione.
 *
 * @remarks
 * - Il componente dovrebbe essere usato per blocchi di testo normale; per intestazioni usare il componente dedicato (es. H1, H2).
 * - Gli stili passati via style vengono fusi con quelli di default; in caso di conflitto, gli stili passati sovrascrivono i valori di default.
 * - Se si passa un elemento React come children, il componente preserva i suoi nodi figli.
 *
 * @example
 * <P>
 *   Questo è un paragrafo di testo standard.
 * </P>
 *
 * <P color="#333" size="md" numberOfLines={2}>
 *   Paragrafo limitato a due righe con colore personalizzato.
 * </P>
 *
 * @returns JSX.Element — un elemento di testo pronto per essere inserito nella UI.
 */

import React from "react";

// UI – esclusivamente dalla tua libreria
import {
    Column,
    Row,
    Card,
    Heading,
    P,
    B,
    TextGroup,
    Link,
    CodeInline,
    Code,
    useTheme,
    Text,

} from "ui";

export default function PDocs() {
    const { theme } = useTheme();

    return (
        <Column>
            <TextGroup>
                <Heading level={1}>P</Heading>
                <P>
                    Il componente <CodeInline>P</CodeInline> è un preset per il corpo del testo.
                    Rappresenta un paragrafo standard nell'interfaccia utente.
                </P>
            </TextGroup>

            <TextGroup>
                <Heading level={2}>Parametri</Heading>
                <TextGroup>
                    <Heading level={3}>Ereditati da <CodeInline size="lg">Text</CodeInline></Heading>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm" align="right">size</CodeInline></Row>
                        <P><B>font size</B> <Link href="docs/tokens/typography">(da token)</Link></P>
                    </Row>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">weight</CodeInline></Row>
                        <P><B>font weight</B> (da token)</P>
                    </Row>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm" align="right">lineHeight</CodeInline></Row>
                        <B>line height coerente</B>
                    </Row>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">variant</CodeInline></Row>
                        <P><B>colore semantico</B> (variant)</P></Row>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">align</CodeInline></Row>
                        <B>allineamento</B>
                    </Row>
                    <Row>
                        <Row justify="flex-end" style={{ width: 100 }}><CodeInline size="sm">truncate</CodeInline></Row>
                        <B>troncamento</B>
                    </Row>
                </TextGroup>
            </TextGroup>
            <TextGroup>

                <Heading level={2}>API di base</Heading>
                <Code>{`<P>Contenuto testuale</P>`}</Code>
            </TextGroup>

            <Row flex={-1}><Link href="docs/components/typography" variant="button">Tipografia</Link></Row>
        </Column>
    );
}
