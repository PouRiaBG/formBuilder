import React from 'react';
import {StyleSheet} from 'react-native'
import {Text, Layout} from '@ui-kitten/components'
import FieldRenderer from './FieldRenderer';

const FormBuilder = ({schema})=>{
    const keys = Object.keys(schema)
    const values = Object.values(schema)
    const {title = 'undefined', description = 'undefined'} = schema
    let propKey;
    if(schema.type === 'object' && keys.includes('properties')){
        propKey = Object.keys(schema.properties)
    }

    console.log(keys, values)


    return (
        <Layout style={styles.container}>
            <Layout style={styles.title} level="2"> 
                <Text category="h5">{title}</Text>
                <Text category="label">{description}</Text>
            </Layout>
            <Layout style={styles.form} level='3'>
                {
                    propKey.map(item => (
                       <FieldRenderer 
                        type={schema.properties[item].type}
                        title={schema.properties[item].title}
                       />
                    ))
                }
               
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        width : '100%',
        flex : 0.2,
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        alignItems : 'center'
    },
    form : {
        width : '100%',
        flex : 0.8,
        flexDirection : 'column',
        justifyContent : 'center'
    }
})

export default FormBuilder