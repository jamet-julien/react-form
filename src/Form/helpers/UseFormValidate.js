import { useState, useEffect } from "react";

const useFormValidate = (
    initialState = {},
    validate = v => [],
    handleSubmit = () => {}
) => {
    const [values, setValue] = useState(initialState);
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isSubmit) {
            if (Object.values(errors).length === 0) {
                handleSubmit();
            }
            setIsSubmit(false);
        }
    }, [errors, isSubmit, handleSubmit]);

    const onSubmitHandler = e => {
        e.preventDefault();
        setIsSubmit(true);
        setErrors(validate(values));
    };

    const onBlurHandler = e => {
        setErrors(validate(values));
    };

    const onChangeHandler = e => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    };
};

export default useFormValidate;
