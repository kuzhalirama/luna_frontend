import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,Pressable} from 'react-native';
export default function Login(){
    return(
        <View>
            <View>
            <Text style={styles.line1}>Your AI Friend</Text>
            <Text></Text>
            <Text style={styles.line2}>Assures private and</Text>
            <Text style={styles.line3}>anonymous conversation !</Text>
            <Image  
                 source={require('../assets/logo.png')}
                 style={{left:3}}
                 />
            </View>  
            <View>
                <Text></Text>
                <TextInput value=''
                style={styles.input}
                placeholder=' Enter Username'
                placeholderTextColor='white'
                />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <TextInput value=''
                style={styles.input}
                placeholder=' Enter Age'
                placeholderTextColor='white'
                keyboardType='numeric'

                />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                
                
               
                <Pressable  style={styles.press}>
                <Text style={styles.text}>Continue</Text>
                
                </Pressable>
                  
                         
                
                
            </View> 
                
                <Text style={{color:'black',marginTop:100}}>By Continuing, I confirm that I accept </Text>
                <View style={{flexDirection:"row",marginTop:1,left:-10}}>
                <Text style={{color:"black"}}>the</Text>
                <Text style={{color:"darkblue"}}> Terms of Services</Text>
                <Text style={{color:"black"}}> and</Text>
                <Text style={{color:"darkblue"}}> Privacy Policy</Text>
                </View>  
                 
                    
                
        </View>
    );
}
const styles = StyleSheet.create({
    line1:{
        color:'darkblue',
        fontSize:35,
        marginTop:3,
        text:'extrabold',
        alignItems:'center',
        justifyContent:'center',
        left:20
    },
    line2:{
        color:'darkblue',
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        left:60,
        alignItems:'center',
        justifyContent:'center',

    },
    line3:{
        color:'darkblue',
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        left:38,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        color:'darkblue',
        height:55,
        
        margin:-13,
        padding:10,
        borderColor:'black',
        backgroundColor:'darkblue',
        borderRadius:7,
        justifyContent:'center'
        
    },
   press:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:12,
    borderRadius:4,
    elevation:3,
    backgroundColor:'darkblue'
},
text:{
    fontSize:18,
    lineHeight:20,
    fontWeight:'bold',
    letterSpacing:0.25,
    color:'white',
    margin:2,

},





    



});