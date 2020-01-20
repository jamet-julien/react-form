import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

const ErrorMessage = ({ errors }) =>
    errors.map((err, k) => <FormHelperText key={k}>{err}</FormHelperText>);

export default ErrorMessage;
