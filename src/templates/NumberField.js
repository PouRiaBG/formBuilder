import React from 'react';
import {StyleSheet} from 'react-native'
import { Layout, Text, Input } from '@ui-kitten/components'
import {Controller} from 'react-hook-form'

function NumberField(props){
    const {errors, name, control, requirmentField, propKey} = props
    const isRequired = requirmentField.includes(propKey) ? true : false
    return (
        <Layout style={styles.fieldContainer}>
            <Layout style={styles.subContainer}>
                <Text 
                category="h6"
                status="basic"
                style={styles.input}
                >
                {name} 
                </Text>
                <Controller 
                control={control}
                render={({field : {onChange, onBlur, value}})=> (
                    <Input 
                        keyboardType="numeric"
                        placeholder={name}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        status="basic"
                    />
                )}
                name={name}
                rules={{required : isRequired}}
                />
            </Layout>
          
            {errors[name] && 
                <Text
                category="c1" 
                status="danger">
                    Dude! your {name} can not be empty
                </Text>
            }
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
    },
    subContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    input : {
        marginRight : 10
    }
})

export default NumberField