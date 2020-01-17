export const validateRegistration = values => {
    const errors = {};

    if (!values.email || values.email.trim() === "") {
        errors.email = ["Email required"];
    }

    if (!values.password || values.password.trim() === "") {
        errors.password = ["password required"];
    }

    if (!values.confirm || values.confirm.trim() === "") {
        errors.confirm = ["confirm required"];
    }

    return errors;
};

export const validateLogin = values => {
    const errors = {};

    if (!values.email || values.email.trim() === "") {
        errors.email = ["Email required"];
    }

    if (!values.password || values.password.trim() === "") {
        errors.password = ["password required"];
    }

    return errors;
};
