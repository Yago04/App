import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const [alcool, onChangeAlcool] = React.useState('');
  const [gasolina, onChangeGasolina] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const calcularCombustivel = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (precoAlcool > 0 && precoGasolina > 0) {
      const razao = precoAlcool / precoGasolina;
      if (razao < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
    Keyboard.dismiss(); // Esconder o teclado
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Escolha entre Álcool e Gasolina</Text>
        <Image source={{uri: 'https://example.com/fuel_image.png'}} style={styles.image} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAlcool}
          placeholder="Preço do Álcool (R$)"
          value={alcool}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeGasolina}
          placeholder="Preço da Gasolina (R$)"
          value={gasolina}
          keyboardType="numeric"
        />
        <Button
          title="Calcular"
          color="#f194ff"
          onPress={calcularCombustivel}
        />
        {resultado ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultado}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default App;
