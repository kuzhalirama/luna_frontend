import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./pages/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Login/>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height:'100%',
    position:'relative',

  
  },
});     






