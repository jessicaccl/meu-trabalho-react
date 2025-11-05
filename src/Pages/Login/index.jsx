import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'Components/Button/index.jsx';
import Input from 'Components/Input/index.jsx';
import {
    LoginWrapper, LoginBox, Form, FloatingIcon, Divider, FacebookLink,
    ForgotPassword, SignUpBox, SignUpText, ContentWrapper
} from './styles';

const LogoText = styled.h1`
  font-family: 'Grand Hotel', cursive;
  font-size: 50px;
  margin-bottom: 25px;
  color: #262626;
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            console.log('Login feito:', { email, password });
            navigate('/home');
        } else {
            alert('Por favor, preencha usuário e senha.');
        }
    };

    const isButtonDisabled = !email || !password;

    return (
        <LoginWrapper>

            <FloatingIcon $top="5%" $left="10%" $size="50px" $duration="6s">🚀</FloatingIcon>
            <FloatingIcon $top="10%" $right="10%" $size="50px" $duration="4s">💻</FloatingIcon>
            <FloatingIcon $top="12%" $right="30%" $size="40px" $duration="5s">💖</FloatingIcon>
            <FloatingIcon $bottom="5%" $right="20%" $size="40px" $duration="7s">🎉</FloatingIcon>
            <FloatingIcon $top="45%" $left="25%" $size="60px" $duration="3s">✨</FloatingIcon>
            <FloatingIcon $bottom="12%" $right="45%" $size="35px" $duration="5s">☕</FloatingIcon>
            <FloatingIcon $bottom="10%" $left="25%" $size="30px" $duration="4.5s">✈️</FloatingIcon>
            <FloatingIcon $bottom="8%" $right="8%" $size="40px" $duration="6s">🍼</FloatingIcon>
            <FloatingIcon $top="25%" $left="3%" $size="40px" $duration="5.5s">🏃‍♀️</FloatingIcon>
            <FloatingIcon $bottom="45%" $right="30%" $size="35px" $duration="7s">👗</FloatingIcon>
            <FloatingIcon $top="45%" $right="5%" $size="45px" $duration="4s">📱</FloatingIcon>
            <FloatingIcon $top="25%" $right="25%" $size="40px" $duration="6.5s">⛪️</FloatingIcon>
            <FloatingIcon $top="75%" $left="15%" $size="30px" $duration="6s">👙</FloatingIcon>
            <FloatingIcon $top="3%" $right="20%" $size="45px" $duration="7s">🌳</FloatingIcon>
            <FloatingIcon $bottom="3%" $left="40%" $size="35px" $duration="4.5s">🌸</FloatingIcon>
            <FloatingIcon $top="40%" $left="10%" $size="35px" $duration="5s">👟</FloatingIcon>
            <FloatingIcon $bottom="35%" $right="3%" $size="40px" $duration="6.5s">🕶️</FloatingIcon>
            <FloatingIcon $top="40%" $right="20%" $size="40px" $duration="8s">👦</FloatingIcon>
            <FloatingIcon $top="15%" $left="25%" $size="35px" $duration="4s">👶</FloatingIcon>
            <FloatingIcon $bottom="10%" $left="3%" $size="45px" $duration="7.5s">🏠</FloatingIcon>
            <FloatingIcon $top="5%" $left="35%" $size="40px" $duration="5s">💍</FloatingIcon>

            <ContentWrapper>

                <LoginBox>

                    <LogoText>Mylifegram</LogoText>

                    <Form onSubmit={handleLogin}>
                        <Input
                            type="text"
                            placeholder="Nome de usuário, email ou celular"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" disabled={isButtonDisabled}>
                            Entrar
                        </Button>
                    </Form>

                    <Divider>OU</Divider>

                    <FacebookLink href="/">
                        Entrar com o Facebook
                    </FacebookLink>

                    <ForgotPassword href="/">
                        Esqueceu a senha?
                    </ForgotPassword>

                </LoginBox>

                <SignUpBox>
                    <SignUpText>
                        Não tem uma conta? <a href="/">Cadastre-se</a>
                    </SignUpText>
                </SignUpBox>
            </ContentWrapper>
        </LoginWrapper>
    );
}

export default Login;