import React from 'react'
import {Input, Text} from '@ui-kitten/components'
import {StyleSheet, View} from 'react-native'

function TextFeild({title}){

    return (
        <View style={styles.inputContainer}>
            <Text 
                category="c2"
                status="basic">
                {title}
                </Text>
            <Input
            status="basic"
            placeholder={title}
             style={styles.input}/>
        </View>
    )
}


const styles = StyleSheet.create({
   inputContainer : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        padding : 30,
        margin : 2, 
        flex : 0.2
    },
   input : {
       
   }
})
export default TextFeild