import { StyleSheet } from 'react-native';
import { fonts, theme } from '../../../style';

export const gradient = [
    theme.secondary.default, 
    theme.primary.default, 
    theme.tertiary.default
];

export const style = StyleSheet.create({
    contentLinear: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    containerTitle: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 60,
        color: theme.base.white,
        fontFamily: fonts.regular
    },
    containerBody: {
        flex: 0.5,
        justifyContent: 'center'
    },
    containerInput: {
        height: 50,
        marginVertical: 16
    },
    containerFooter: {
        flex: 0.2
    },
  });