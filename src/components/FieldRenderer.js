import React from 'react';
import {Text } from '@ui-kitten/components'
import TextFeild from '../templates/TextFeild';
import NumberField from '../templates/NumberField'

const FieldRenderer = ({type, ...props})=>{
        switch(type){
            case 'string' : {
                return <TextFeild {...props} />
            }
            case 'number' : {
                return <NumberField {...props}  />
            }
            default : {
                return <Text>Error</Text>
            }
        }
}
export default FieldRenderer