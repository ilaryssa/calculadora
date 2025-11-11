import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { FontAwesome6 as Icon } from '@react-native-vector-icons/fontawesome6'; 
// documentação https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file


export default function App() {

  const theme = useTheme();

  return (
    <View style={styles.container}>

      {/* <View style={{flex: 1}}>

      </View> */}

      {/* <View style={{backgroundColor: 'darkgrey', flex: 1, padding: 20, marginBottom: 150, shadowColor:'#000', shadowOffset: {width:0, height:4}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 }}> */}
      <View style={{backgroundColor: 'orange', flex: 1, padding: 20, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, flexDirection: 'column-reverse'}}>
        <Text style={{fontSize: 50, alignSelf: 'flex-end', paddingBottom: 50, color: 'white', fontWeight: 700}}>175</Text>
        <Text style={{fontSize: 30, alignSelf: 'flex-start', paddingBottom: 50, color: 'white'}}>100 + 75</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', justifyContent: 'flex-end', paddingBottom: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> C </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> +- </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> % </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> ÷ </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 7 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 8 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 9 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> × </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 4 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 5 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 6 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> - </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 1 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 2 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 3 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> + </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button icon={{uri: 'https://cdn-icons-png.flaticon.com/512/9373/9373543.png'}} mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}></Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> 0 </Button>
          <Button mode="elevated" labelStyle={{ color: "grey", fontSize: 24}} style={styles.botao}> , </Button>
          <Button mode="elevated" labelStyle={{ color: "white", fontSize: 24}} style={[styles.botao, styles.botaoDestaque]}> = </Button>
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
