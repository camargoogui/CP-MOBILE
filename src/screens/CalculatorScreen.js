import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Card, IconButton } from 'react-native-paper';

const CalculatorScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  const calcularAumento = () => {
    if (!nome || !valorOriginal || !porcentagem) {
      alert('Preencha todos os campos!');
      return;
    }

    const valor = parseFloat(valorOriginal);
    const aumento = (valor * parseFloat(porcentagem)) / 100;
    const novoValor = valor + aumento;

    navigation.navigate('Resultado', {
      nome,
      valorOriginal: valor,
      aumento,
      novoValor,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      <Card style={styles.card}>
        <Card.Title title="Calculadora de Aumento" subtitle="Insira os valores e veja o resultado!" />
        
        <Card.Content>
          <TextInput
            label="Nome do Produto"
            mode="outlined"
            value={nome}
            onChangeText={setNome}
            left={<TextInput.Icon icon="tag" />}
          />
          <TextInput
            label="Valor Original (R$)"
            mode="outlined"
            keyboardType="numeric"
            value={valorOriginal}
            onChangeText={setValorOriginal}
            left={<TextInput.Icon icon="currency-usd" />}
          />
          <TextInput
            label="Porcentagem de Aumento (%)"
            mode="outlined"
            keyboardType="numeric"
            value={porcentagem}
            onChangeText={setPorcentagem}
            left={<TextInput.Icon icon="percent" />}
          />
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" onPress={calcularAumento}>Calcular</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 10,
  }
});

export default CalculatorScreen;