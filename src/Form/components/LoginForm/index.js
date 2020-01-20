import React from "react";
import useFormValidate from "../../helpers/UseFormValidate";
import { validateLogin } from "../../helpers/validate";
import { useStyles } from "../../helpers/useStyles";
import ErrorMessage from "../ErrorMessage";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
    email: "",
    password: ""
};

const LoginForm = ({ onSubmit }) => {
    const {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    } = useFormValidate(initialState, validateLogin, handleSubmit);
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
            </div>
            <Button variant="contained" type="submit" color="primary" fullWidth>
                ME CONNECTER
            </Button>
        </form>
    );
};

export default LoginForm;
