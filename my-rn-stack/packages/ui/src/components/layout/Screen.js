import { jsx as _jsx } from "react/jsx-runtime";
import { SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "../../theme/useTheme";
export function Screen({ children, padding = 20, style, ...rest }) {
    const { colors } = useTheme();
    return (_jsx(SafeAreaView, { ...rest, style: [
            styles.container,
            {
                backgroundColor: colors.background,
                paddingHorizontal: padding,
                paddingTop: padding,
            },
            style,
        ], children: children }));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
