import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
// documentação https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file

export default function App() {

  const theme = useTheme();
  const [display, setDisplay] = useState('0');
  const [operador, setOperador] = useState(null); 
  const [valorAnterior, setValorAnterior] = useState(null); 
  const [ultimoValor, setUltimoValor] = useState(null);

  function digitarNumero(num) {
    if (display === '0')  
      setDisplay(String(num)); 
    else
      setDisplay(display + num); 
  }

  function adicionarPonto() {
    if (!display.includes('.')) { 
      setDisplay(display + '.'); 
    }
  }

  function trocarSinal() {
    if (display === '0') return; 
    setDisplay(String(parseFloat(display) * -1));
  }

  function porcentagem() {
    setDisplay(String(parseFloat(display) / 100)); 

  function backspace() {
    if (display.length === 1) 
      setDisplay('0') 
    else
      setDisplay(display.slice(0, -1)); 
  }

  function limpar() {
    setDisplay('0'); 
    setOperador(null); 
    setValorAnterior(null);
    setUltimoValor(null); 
  }

  function escolherOperador(op) {
    setOperador(op); 
    setValorAnterior(display);
    setDisplay('0'); 
    setUltimoValor(null); //em testes percebi que quando faziamos mais de uma operação o ultimo numero ficava la no segundo bloco, e como colocamos la no text pra quando for null ele ser vazio, aqui a gente atribui ele a null pra ficar bonitinho
  }

  function calcular() {
    let numAtual = parseFloat(display); 
    let numAnterior = parseFloat(valorAnterior); 

    if (valorAnterior == null && ultimoValor != null) { 
      numAnterior = parseFloat(display); 
      numAtual = ultimoValor; 
    } else {
      setUltimoValor(numAtual); 
    }

    if (!operador) //se nao tiver operador selecionado, nao faz nada
      return;

    let resultado = 0;
    if (operador === '+')
      resultado = numAnterior + numAtual;
    if (operador === '-')
      resultado = numAnterior - numAtual;
    if (operador === '×')
      resultado = numAnterior * numAtual;
    if (operador === '÷')
      resultado = numAnterior / numAtual;

    setDisplay(String(resultado)); 
    setUltimoValor(numAtual); //novamente, em testes percebi que o segundo bloco nao tava aparecendo na hora de calcular, entao atribui um valor ao ultimoValor e usei ele no text
  }

  return (
    <View style={styles.container}>

      <View style={{backgroundColor: 'orange', flex: 1, padding: 20, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, flexDirection: 'column-reverse'}}>
        <Text style={{fontSize: 50, alignSelf: 'flex-end', paddingBottom: 50, color: 'white', fontWeight: 700}}>{display}</Text>
        <Text style={{fontSize: 30, alignSelf: 'flex-start', paddingBottom: 50, color: 'white'}}>{valorAnterior ? `${valorAnterior} ${operador || ''} ${ultimoValor || ''}` : ''}</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', justifyContent: 'flex-end', paddingBottom: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={limpar}> C </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={trocarSinal}> +- </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={porcentagem}> % </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => escolherOperador('÷')}> ÷ </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(7)}> 7 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(8)}> 8 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(9)}> 9 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => escolherOperador('×')}> × </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(4)}> 4 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(5)}> 5 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(6)}> 6 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => escolherOperador('-')}> - </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(1)}> 1 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(2)}> 2 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(3)}> 3 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => escolherOperador('+')}> + </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/9373/9373543.png'}} mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={backspace}></Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={() => digitarNumero(0)}> 0 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={[styles.botao, {elevation: 5}]} onPress={adicionarPonto}> . </Button>
          <Button mode="elevated" labelStyle={{ color: "white", fontSize: 24}} style={[styles.botao, styles.botaoDestaque, {elevation: 5}]}onPress={calcular}> = </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffe5',
    justifyContent: 'flex-end',
  },
  botao: {
    height: 60, 
    width: 'auto',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#ffffe5',
  },
  botaoDestaque: {
    backgroundColor: 'orange',
  }
});
}
//melhorias futuras >>> definir um escopo pra numeros grandes, tipo aparecer so umas 5 casas decimais, e também