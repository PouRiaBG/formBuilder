import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
import {Layout, Text, Select, SelectItem, IndexPath} from '@ui-kitten/components'
import {Controller } from "react-hook-form";

function SelectField(props){
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0))
    const {name, errors, list, control } = props
    return (
        <Layout style={styles.fieldContainer}>
            <Text category="h6" status="basic">
              {name}
            </Text>

            <Controller 
            control={control}
            render={({ field: { onChange, value = new IndexPath(0) } })=> (
                <Select
                style={styles.select}
                selectedIndex={value}
                onSelect={index => onChange(index)}
                value={list[value.row]}
                status="basic"
                placeholder={name}
                >
                {list.map(item => (
                    <SelectItem  key={item} title={item} />
                ))}
                </Select>
            )}
            rules={{required : true}}
            name={name}
            />
         
            {errors[name] && 
                <Text 
                category="c1" 
                status="danger">
                   Your {name} is not selected
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
     }
 })
export default SelectField