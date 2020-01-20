import Schema from "validate";
import isValidEmail from "is-valid-email";

export const isEmail = email => isValidEmail(email);

const userSchema = new Schema({
    email: {
        type: String,
        use: { isEmail },
        required: true,
        message: {
            isEmail: "Email must be a valid email."
        }
    },
    password: {
        type: String,
        required: true,
        length: { min: 5, max: 16 }
    }
});

export const validateRegistration = values => {
    const errors = validateLogin(values);

    if (values.confirm !== values.password) {
        errors.confirm = [
            ...(errors.confirm || []),
            "Confirm and password must be a same value"
        ];
    }

    return errors;
};

export const validateLogin = values =>
    userSchema.validate({ ...values }).reduce(
        (g, e) => ({
            ...g,
            [e.path]: [...(g[e.path] || []), e.message]
        }),
        {}
    );
