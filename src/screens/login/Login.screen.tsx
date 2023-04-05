import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputTextField } from "../../components";
import { style, gradient } from "./Login.styles";

interface LoginScreenProps {
    emailValue?: string;
    passwordValue?: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
}

export default function LoginScreen(props: LoginScreenProps) {
    const {emailValue, passwordValue, onChangeEmail, onChangePassword} = props;

    return (
        <LinearGradient 
            colors={gradient} 
            style={style.contentLinear} >
            <SafeAreaView style={style.content}>
                    <View style={style.containerTitle}>
                        <Text style={style.textTitle}>Login</Text>
                    </View>

                    <View style={style.containerBody}>
                        <InputTextField
                            value={emailValue}
                            label={'Email'}
                            placeholder={'Digite o email'}
                            containerStyle={style.containerInput}
                            onChange={onChangeEmail}
                        />

                        <InputTextField
                            value={passwordValue}
                            label={'Senha'}
							placeholder={'Digite a senha'}
							containerStyle={style.containerInput}
							secureTextEntry
                            onChange={onChangePassword}
                        />
                    </View>

                    <View style={style.containerFooter}>
                        
                    </View>                    
            </SafeAreaView>
        </LinearGradient>
    )
}