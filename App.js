import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { FontAwesome6 as Icon } from '@react-native-vector-icons/fontawesome6'; 
// documentação https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file


export default function App() {

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text>Abra o arquivo App.js para iniciar a trabalhar no seu app!</Text>
      <StatusBar style="auto" />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Clique aqui
      </Button>
      <Icon name="comments" size={30} color={theme.colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
