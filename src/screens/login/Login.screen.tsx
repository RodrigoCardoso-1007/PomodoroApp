import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { style, gradient } from "./Login.styles";

export default function LoginScreen() {
    return (
        <SafeAreaView style={style.container}>
            <LinearGradient 
                colors={gradient} 
                style={style.container} >

                <View style={style.containerTitle}>
                    <Text style={style.textTitle}>Login</Text>
                </View>

                <View style={style.containerBody}>
                    
                </View>

                <View style={style.containerFooter}>
                    
                </View>
                
            </LinearGradient>
        </SafeAreaView>
    )
}