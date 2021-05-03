import React from 'react'
import {Input, Text} from '@ui-kitten/components'
import {StyleSheet, View} from 'react-native'
import {Controller } from "react-hook-form";

function TextFeild(props){

    const {name, control, errors, requirmentField, propKey} = props
    let isRequired = requirmentField.includes(propKey) ? true : false
    return (
        <View style={styles.inputContainer}>
            <Text 
                category="h6"
                status="basic">
                {name}
                </Text>

            <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } })=> (
                <Input
                onChangeText={value => onChange(value)}
                value={value}
                onBlur={onBlur}
                status="basic"
                placeholder={name}
                style={styles.input}/>
            )}
            rules={{ required: isRequired }}
            name={name}
            />
            {errors[name] &&
             <Text 
                category="s1"
                status="danger">
               Dude !! your {name} can not be empty.
             </Text>}
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
        flex : 0.3
    },
   input : {
       
   }
})
export default TextFeild