import { useState } from "react";


const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState);

    const clean = () =>{
        setValues(initialState)
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values,handleInputChange,clean]

}



export default useForm;
