import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Logon</h1>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <Button type="submit">Enter</Button>
        <a href="dsad">Forgot Password</a>
      </form>

      <a href="">
        <FiLogIn />
        Create Account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
