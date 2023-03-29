import { StyleSheet } from 'react-native';
import { fonts, lightTheme } from '../../../style';

export const gradient = [
    lightTheme.secondary.default, 
    lightTheme.primary.default, 
    lightTheme.tertiary.default
];

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitle: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 60,
        color: lightTheme.base.default,
        fontFamily: fonts.regular
    },
    containerBody: {
        flex: 0.5,
    },
    containerFooter: {
        flex: 0.2
    },
  });