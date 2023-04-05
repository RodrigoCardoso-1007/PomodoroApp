import { StyleSheet } from "react-native";
import { theme } from "../../../style/color";

export const style = StyleSheet.create({
    container: {
        justifyContent: "flex-end"
    },
    label: {
        color: theme.base.white,
        fontSize: 16,
        marginLeft: 4,
        marginBottom: 4
    },
    containerInput: {
        borderRadius: 8,
        borderColor: theme.base.white,
        borderWidth: 1,
        justifyContent: "center",
    },
    text: {
        marginHorizontal: 4,
        color: theme.base.white,
    },
    placeholder: {
        color: theme.base.gray,
    }
  });