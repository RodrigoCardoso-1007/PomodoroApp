import { useState } from "react";
import LoginScreen from "./Login.screen";

const Login = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onChangeEmail = (value: string) => {
        setEmail(value);
    }

    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    return (
        <LoginScreen 
            emailValue={email}
            passwordValue={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
        />
    )
}

export default Login;