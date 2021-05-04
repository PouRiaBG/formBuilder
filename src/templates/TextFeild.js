import React from 'react'
import {Input, Layout, Text} from '@ui-kitten/components'
import {StyleSheet} from 'react-native'
import {Controller } from "react-hook-form";

function TextFeild(props){

    const {name, control, errors, requirmentField, propKey} = props
    let isRequired = requirmentField.includes(propKey) ? true : false
    return (
        <Layout style={styles.fieldContainer}>
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
                />
            )}
            rules={{ required: isRequired }}
            name={name}
            />
            {errors[name] &&
             <Text 
                category="c1"
                status="danger">
               Dude !! your {name} can not be empty.
             </Text>}
        </Layout>
    )
}


const styles = StyleSheet.create({
   fieldContainer : {
        flexDirection : 'column',
        flex : 0.3,
        justifyContent : 'space-between',
        padding : 30,
        margin : 2, 
    }
})
export default TextFeild