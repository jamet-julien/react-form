import React, { useEffect, useContext } from "react";
import useFormValidate from "../../helpers/UseFormValidate";
import { validateRegistration } from "../../helpers/validate";
import { useStyles } from "../../helpers/useStyles";
import { mergeInitObject } from "../../helpers/utils";

import ErrorMessage from "../ErrorMessage";
import { FormContext } from "../../../Helpers/contextForm";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
    email: "",
    password: "",
    confirm: ""
};

const RegistrationForm = ({ onSubmit }) => {
    const { initFormData, setInitFormData } = useContext(FormContext);
    const initialForm = mergeInitObject(initialState, initFormData);
    const {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    } = useFormValidate(initialForm, validateRegistration, handleSubmit);

    useEffect(() => {
        setInitFormData(values);
    }, [values, setInitFormData]);

    const classes = useStyles();

    function handleSubmit() {
        if (onSubmit && typeof onSubmit === "function") {
            onSubmit(values);
        } else {
            alert(JSON.stringify(values));
        }
    }

    return (
        <form
            className={classes.root}
            autoComplete="off"
            onSubmit={onSubmitHandler}
        >
            <div className={classes.formContainer}>
                <TextField
                    name="email"
                    label="email"
                    variant="outlined"
                    error={!!errors.email}
                    value={values.email}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    fullWidth
                    margin="normal"
                />
                {errors.email && <ErrorMessage errors={errors.email} />}
                <TextField
                    name="password"
                    label="password"
                    type="password"
                    variant="outlined"
                    error={!!errors.password}
                    value={values.password}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    fullWidth
                    margin="normal"
                />
                {errors.password && <ErrorMessage errors={errors.password} />}
                <TextField
                    name="confirm"
                    label="confirm"
                    type="password"
                    variant="outlined"
                    error={!!errors.confirm}
                    value={values.confirm}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    fullWidth
                    margin="normal"
                />
                {errors.confirm && <ErrorMessage errors={errors.confirm} />}
            </div>
            <Button variant="contained" type="submit" color="primary" fullWidth>
                M'ENREGISTRER
            </Button>
        </form>
    );
};

export default RegistrationForm;
