import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
       const { name, value } =  target;
       // console.log({name, value});
       setFormState({
            ...formState,
            [ name ]: value // Propiedades computadas de los objetos
       });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        /* Hacemos esta desestructuracion para poder usar 
        las propiedades directamente sin tener que hacerla
        en los functional components */
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

