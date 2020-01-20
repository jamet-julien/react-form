import React from "react";
import useFormValidate from "../../helpers/UseFormValidate";
import { validateLogin } from "../../helpers/validate";
import ErrorMessage from "../ErrorMessage";

import "../../helpers/formComp.css";

const classNameItem = (error = false) =>
    `formComp_item ${error ? "has-error" : ""}`;

const initialState = {
    email: "",
    password: ""
};

const RegistrationForm = () => {
    const {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    } = useFormValidate(initialState, validateLogin, handleSubmit);

    function handleSubmit() {
        alert(JSON.stringify(values));
    }

    return (
        <div className="formComp">
            <h1>Login form</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={classNameItem(values.email)}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}
                    />
                    {errors.email && <ErrorMessage errors={errors.email} />}
                </div>
                <div className={classNameItem(values.password)}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}
                    />
                    {errors.password && (
                        <ErrorMessage errors={errors.password} />
                    )}
                </div>
                <div className="formComp_item">
                    <input type="submit" value="Login !" />
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
