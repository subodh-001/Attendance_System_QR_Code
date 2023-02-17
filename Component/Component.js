import React from 'react'
import { View,Text ,StyleSheet, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Component=({navigation}) =>{
    
  return (

    <View style={styles.container1}>
     <FontAwesome5 name='qrcode' size={85} color={'orange'} style={{top:70}}/>
     <Text style={{top:100,fontSize:20,color:'orange'}}>Scanne this QrCode</Text>
         <TouchableOpacity
           onPress={() => navigation.navigate('QrCode')}
      style={styles.button}>
        <Text style={styles.buttonText}>Scanner</Text>
      </TouchableOpacity>
    
      <FontAwesome5 name='chart-pie' size={85} color={'orange'} style={{top:70}}/>
     <Text style={{top:100,fontSize:20,color:'orange'}}>Show Report</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate('FetchData')}
    style={styles.button}>
        <Text style={styles.buttonText}>Report</Text>
    </TouchableOpacity>
    </View>

  )
}
export default Component
const styles  = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
       button: {    
        backgroundColor: 'orange',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        bottom:50,
        marginTop:200,
        marginBottom:20

      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
    
});