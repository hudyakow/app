import React from 'react';
import { Text, View, StatusBar, TextInput, Placeholder, secureTextEntry, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const Input = ({icon, placeholder, secureTextEntry}) => {
  return (
    <InputField>
      <View style = {{flexDirection: "row"}}>
        <Icon source = {{uri: icon}} />
        <TextInput
         secureTextEntry = {secureTextEntry ? true: false }
         placeholder = {placeholder}
         placeholderTextColor = "#BCE0FD"
          style = {{
            marginLeft: 20,
            color: "#2699fb",
            fontSize: 14,
            lineHeight: 16
         }}> 
        </TextInput>
      </View>
    </InputField>
  )
}

const SignUp = ({
  params,
}) => (
  <Container>
    <StatusBar hidden = {true} />
    <SignUpView>
      <Input
        icon = "https://i.ibb.co/Vttq2DX/user.png" 
        placeholder = "Full name"
        />
      <Input
        icon = "https://i.ibb.co/Rh81wDf/telephone-call.png" 
        placeholder = "E-mail or number"
        />
      <Input
        icon = "https://i.ibb.co/zJkmpPs/email.png" 
        placeholder = "Message"
        secureTextEntry = {true}
        />
        <Button>
          <ButtonText>Добавить стикеры</ButtonText>
        </Button>

      <GroupImage>
        <App
          icon = "https://i.ibb.co/Vttq2DX/user.png"
        />
        <App
          icon = "https://i.ibb.co/5B8WPMM/facebook.png"
        />
        <App
          icon = "https://i.ibb.co/5B8WPMM/facebook.png"
        />
      </GroupImage>
    </SignUpView>
  </Container>
);

const Container = styled.View `
  flex: 1;
  background-color: #fff;
`;
const SignUpView = styled.View `
  height: 439px;
  margin-top: 136px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #fff
`;
const InputField = styled.View `
  height: 48px;
  margin: 8px 24px;
  border-width: 1px;
  border-color: #bce0fd;

  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;

  justify-content: center;
  align-items: flex-start;
`;
const Icon = styled.Image `
  width: 26px;
  height: 26px;
`;
const Button = styled.TouchableOpacity `
  margin-top: 42px;
  height: 48px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 4px;
  background-color: #2699fb;
  justify-content: center;
  text-align: center;
`
const ButtonText = styled.Text `
  font-weight: bold,
  font-size: 10px;
  color: #fff;
  line-height: 12px;
  justify-content: center;
  text-align: center;
`;
const GroupImage = styled.View `
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: 64px;
  margin-right: 64px;
  flex-direction: row;
`;
const App = styled.View `
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #2699fb;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export default SignUp;