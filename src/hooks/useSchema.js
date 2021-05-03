const schema = require('../../schema/mock.schema.json')

export const useSchema = ()=>{
    if(Object.entries(schema).length === 0){
        throw new Error('Your schema is an empty object! fix it please')
    }
    return {schema}
}
