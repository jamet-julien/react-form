import React from "react";
import useFormValidate from "../../helpers/UseFormValidate";
import { validateRegistration } from "../../helpers/validate";
import ErrorMessage from "../ErrorMessage";

import "../../helpers/formComp.css";

const initialState = {
    email: "",
    password: "",
    confirm: ""
};

const RegistrationForm = () => {
    const {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    } = useFormValidate(initialState, validateRegistration, handleSubmit);

    function handleSubmit() {
        alert(JSON.stringify(values));
    }

    return (
        <div className="formComp">
            <h1>Registration form</h1>
            <form onSubmit={onSubmitHandler}>
                <div
                    className={`formComp_item ${
                        errors.email ? "has-error" : ""
                    }`}
                >
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
                <div
                    className={`formComp_item ${
                        errors.password ? "has-error" : ""
                    }`}
                >
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
                <div
                    className={`formComp_item ${
                        errors.confirm ? "has-error" : ""
                    }`}
                >
                    <label htmlFor="confirm">Confirm</label>
                    <input
                        type="password"
                        name="confirm"
                        value={values.confirm}
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}
                    />
                    {errors.confirm && <ErrorMessage errors={errors.confirm} />}
                </div>
                <div className="formComp_item">
                    <input type="submit" value="Register !" />
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
