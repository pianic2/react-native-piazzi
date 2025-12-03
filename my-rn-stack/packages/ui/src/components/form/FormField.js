import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useId } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { P } from "../typography/P";
import { Small } from "../typography/Small";
import { B } from "../typography/B";
export function FormField({ label, helperText, errorText, required = false, variant, colorScheme, status = "default", style, id, children, }) {
    const { colors } = useTheme();
    const reactId = useId();
    const baseId = id || `field-${reactId}`;
    const hasError = Boolean(errorText) || status === "error";
    const finalStatus = hasError ? "error" : status;
    const helperId = helperText ? `${baseId}-helper` : undefined;
    const errorId = errorText ? `${baseId}-error` : undefined;
    const describedById = [helperId, errorId].filter(Boolean).join(" ") || undefined;
    // Verifica se il child supporta alcune prop specifiche
    const isValidElement = React.isValidElement(children);
    const propsObj = isValidElement && children.props ? children.props : {};
    const supportsErrorProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        "error" in propsObj;
    const supportsStatusProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        "status" in propsObj;
    const supportsVariantProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        "variant" in propsObj;
    const supportsColorSchemeProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        "colorScheme" in propsObj;
    const supportsAriaInvalidProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        ("aria-invalid" in propsObj || "ariaInvalid" in propsObj);
    const supportsAriaDescribedByProp = isValidElement &&
        typeof propsObj === "object" &&
        propsObj !== null &&
        ("aria-describedby" in propsObj || "ariaDescribedBy" in propsObj);
    // Costruiamo il set di extra props da passare al campo
    const extraChildProps = {};
    if (supportsErrorProp) {
        extraChildProps.error = propsObj.error ?? hasError;
    }
    if (supportsStatusProp) {
        extraChildProps.status = propsObj.status ?? finalStatus;
    }
    if (supportsVariantProp && variant) {
        extraChildProps.variant = propsObj.variant ?? variant;
    }
    if (supportsColorSchemeProp && colorScheme) {
        extraChildProps.colorScheme = propsObj.colorScheme ?? colorScheme;
    }
    if (supportsAriaInvalidProp && hasError) {
        // per web (react-native-web) / accessibilità
        extraChildProps["aria-invalid"] =
            propsObj["aria-invalid"] ?? propsObj["ariaInvalid"] ?? true;
    }
    if (supportsAriaDescribedByProp && describedById) {
        extraChildProps["aria-describedby"] =
            propsObj["aria-describedby"] ??
                propsObj["ariaDescribedBy"] ??
                describedById;
    }
    const childWithProps = isValidElement
        ? React.cloneElement(children, extraChildProps)
        : children;
    return (_jsxs(View, { style: [styles.container, style], children: [label && (_jsxs(P, { style: [styles.label, { color: colors.text }], children: [_jsx(B, { children: label }), required && (_jsx(Small, { style: { color: colors.danger.bg }, children: " *" }))] })), childWithProps, hasError && errorText ? (_jsx(Small
            // per linking con aria-describedby
            , { 
                // per linking con aria-describedby
                nativeID: errorId, style: [styles.error, { color: colors.danger.bg }], children: errorText })) : helperText ? (_jsx(Small, { nativeID: helperId, style: [styles.helper, { color: colors.text + "99" }], children: helperText })) : null] }));
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 16,
    },
    label: {
        marginBottom: 6,
    },
    helper: {
        marginTop: 4,
    },
    error: {
        marginTop: 4,
    },
});
