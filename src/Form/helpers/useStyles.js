import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(_ => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        width: 350,
        margin: "auto"
    },
    formContainer: {
        width: "100%",
        marginBottom: "20px"
    }
}));
