import { 
    View, TextInput,
    KeyboardTypeOptions, StyleProp, 
    TextStyle, ViewStyle, 
    ColorValue 
} from "react-native";
import { Style } from "./InputTextField.style";

interface IInputTextField {
    value?: string,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    maxLength?: number,
    numberOfLines?: number,
    contentStyle?: StyleProp<ViewStyle>,
    textStyle?:  StyleProp<TextStyle>,
    placeholderTextColor?: ColorValue,
    secureTextEntry?: boolean,
    onChange: (value: string) => void,
}

function InputTextField (props: IInputTextField){
    const {
        value, placeholder, 
        keyboardType, maxLength, 
        numberOfLines, textStyle, 
        contentStyle, placeholderTextColor,
        secureTextEntry, onChange
    } = props;

    return (
        <View style={[Style.container ,contentStyle]}>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                style={[Style.text, textStyle]}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default InputTextField; 