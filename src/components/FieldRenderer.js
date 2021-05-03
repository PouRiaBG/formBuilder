import React from 'react';
import {Input, Text } from '@ui-kitten/components'
import TextFeild from '../templates/TextFeild';

const FieldRenderer = ({type, ...props})=>{
        switch(type){
            case 'string' : {
                return <TextFeild {...props} />
            }
            case 'number' : {
                return <Text>Number</Text>
            }
            default : {
                return <Text>Error</Text>
            }
        }
}
export default FieldRenderer