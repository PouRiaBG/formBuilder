import React from 'react';
import {StyleSheet} from 'react-native'
import {Button, Text, Layout} from '@ui-kitten/components'
import FieldRenderer from './FieldRenderer';
import {useForm, } from 'react-hook-form'

const FormBuilder = ({schema})=>{
    //Hook form !
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(JSON.stringify(data));
    const keys = Object.keys(schema)
    
    const {
        title = 'undefined',
        description = 'undefined'} = schema
    let propKey;
    if(schema.type === 'object' && keys.includes('properties')){
        propKey = Object.keys(schema.properties)
    }

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
                        propKey={item}
                        requirmentField={schema.required}
                        errors={errors}
                        control={control}
                        key={schema.properties[item].title}
                        type={schema.properties[item].type}
                        name={schema.properties[item].title}
                        list={schema.properties[item].enum && schema.properties[item].enum}
                        maxLength={schema.properties[item].maxLength && schema.properties[item].maxLength}
                       />
                    ))
                }
               <Button 
               disabled={false}
               style={styles.btn}
               status="success"
               size="large"
               appearance="outline"
               onPress={handleSubmit(onSubmit)}
               >Register</Button>
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
        justifyContent : 'space-evenly'
    },
    btn :{
        padding : 0,
        margin : 30, 
    }
})

export default FormBuilder