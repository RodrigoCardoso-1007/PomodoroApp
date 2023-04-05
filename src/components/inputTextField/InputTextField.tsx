import { 
    View, TextInput,
    KeyboardTypeOptions, StyleProp, 
    TextStyle, ViewStyle, 
    ColorValue, 
    Text
} from "react-native";
import { style } from "./InputTextField.style";

interface IInputTextField {
    value?: string,
    label?: string,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    maxLength?: number,
    numberOfLines?: number,
    containerStyle?: StyleProp<ViewStyle>,
    containerLabel?: StyleProp<ViewStyle>,
    containerInputStyle?: StyleProp<ViewStyle>,
    labelStyle?:  StyleProp<TextStyle>,
    textStyle?:  StyleProp<TextStyle>,
    placeholderTextColor?: ColorValue,
    secureTextEntry?: boolean,
    onChange: (value: string) => void,
}

function InputTextField (props: IInputTextField){
    const {
        value, placeholder, 
        label, keyboardType,
        maxLength, numberOfLines, 
        textStyle, labelStyle, 
        containerStyle, placeholderTextColor, 
        secureTextEntry, containerInputStyle, 
        containerLabel, onChange
    } = props;

    return (
        <View style={[style.container, containerStyle]}>
            {label && 
                <View style={containerLabel}>
                    <Text style={[style.label, labelStyle]}>{label}</Text>
                </View>
            }

            <View style={[style.containerInput, containerInputStyle]}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || style.placeholder.color}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    numberOfLines={numberOfLines}
                    style={[style.text, textStyle]}
                    onChangeText={onChange}
                    secureTextEntry={secureTextEntry} />
            </View>
        </View>
    )
}

export default InputTextField; 