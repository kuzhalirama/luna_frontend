import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Homepage() {
  return (
        <View style={styles.container}>
            <View style = {styles.bgprop}>
              <Image 
                 source={require('../assets/logo.png')}
                 style={{width: 100,height:200}}
               />

            </View>
            <View style={{flexDirection:'row',
                        alignItems:'center',
                        marginBottom:50,
                        justifyContent:'center'
                    }}>
                <Text style= {styles.fontprop}>HEY! This is Luna
                </Text>
                <Image 
                 source={require('../assets/arrow.png')}
                 style={{left:130}}
                 
               />
            </View>

        
           <View >
            <Text  style={styles.abtprop}>ABOUT</Text>
           </View>
           </View>
    
);
}        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height:'100%',
    position:'relative'
  },
    
    fontprop:{
        color:'white',
        fontSize:25,
        position:'absolute',
        marginTop: -30
    },
    bgprop: {
      width: 220,
      height: 220,
      backgroundColor: "white",
      borderRadius:1000,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:50,
      shadowColor:'black',
      shadowOpacity: 500,
      shadowRadius:300,
      
      shadowOffset: {
	width: -2,
	height: 4
},
shadowOpacity: 0.2,
shadowRadius: 3,

elevation: 5,
    },
    abtprop:{
        fontSize:23,
        color:'white',
        textDecorationLine: 'underline',
        position:'absolute',
        bottom: -210,
        right:-145
        

    },
  });
