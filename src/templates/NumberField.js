import React from 'react';
import {StyleSheet} from 'react-native'
import { Layout, Text, Input } from '@ui-kitten/components'
import {Controller} from 'react-hook-form'

function NumberField(props){
    const {errors, name, control, requirmentField, propKey, maxLength} = props
    const isRequired = requirmentField.includes(propKey) ? true : false
    console.log(errors)
    return (
        <Layout style={styles.fieldContainer}>
            <Layout style={styles.subContainer}>
                <Text 
                category="h6"
                status="basic"
                style={styles.text}
                >
                {name} 
                </Text>
                <Controller 
                control={control}
                render={({field : {onChange, onBlur, value}})=> (
                    <Input 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder={name}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        status="basic"
                    />
                )}
                name={name}
                rules={{required : isRequired, maxLength : maxLength}}
                />
            </Layout>
          
            {errors[name] && 
                errors[name].type === 'maxLength' &&
                    <Text
                    category="c1" 
                    status="danger">
                        Your {name} can not be more than 99 year!
                    </Text>
            }
            {errors[name] && 
                errors[name].type === 'required' &&
                    <Text
                    category="c1" 
                    status="danger">
                        Your {name} can not be empty :)
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
    text : {
        marginRight : 10
    },
    input : {
        flexBasis : 100
    }
})

export default NumberField