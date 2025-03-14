import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';

const ResultadoScreen = ({ route, navigation }) => {
  const { nome, valorOriginal, aumento, novoValor } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Resultado do Cálculo"
          subtitle="Confira os detalhes do aumento"
          left={(props) => <IconButton {...props} icon="check-circle" />}
        />
        
        <Card.Content>
          <Text style={styles.text}>Produto: {nome || "Não informado"}</Text>
          <Text style={styles.text}>Valor Original: R$ {valorOriginal ? valorOriginal.toFixed(2) : "0.00"}</Text>
          <Text style={styles.text}>Aumento: R$ {aumento ? aumento.toFixed(2) : "0.00"}</Text>
          <Text style={styles.text}>Novo Valor: R$ {novoValor ? novoValor.toFixed(2) : "0.00"}</Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.goBack()}>Voltar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ResultadoScreen;
