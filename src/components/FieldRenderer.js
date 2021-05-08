import React from 'react';
import {Text } from '@ui-kitten/components'
import TextFeild from '../templates/TextFeild';
import NumberField from '../templates/NumberField'
import SelectField from '../templates/SelectField'

const FieldRenderer = ({type, ...props})=>{
        switch(type){
            case 'string' : {
                return <TextFeild {...props} />
            }
            case 'number' : {
                return <NumberField {...props}  />
            }
            case 'array' : {
                return <SelectField {...props} />
            }
        }
}
export default FieldRenderer