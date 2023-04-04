import { StyleSheet } from "react-native";
import { theme } from "../../../style/color";

export const Style = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: theme.base.white,
        borderWidth: 1,
    },
    text: {
        marginHorizontal: 4,
        color: theme.base.white,
    }
  });