import React from 'react';
import FormBuilder from '../components/FormBuilder'
import {useSchema} from '../hooks/useSchema'

function Home (){
    const {schema} = useSchema()
    return (
        <FormBuilder schema={schema} />
    )
}
export default Home