import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackbarCustom(props) {
  const classes = useStyles();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className={classes.root}>
      <Snackbar
        style={{ marginBottom: "100px" }}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
      >
        <Alert onClose={props.handleClose} severity={props.alertStatus}>
          {props.children}
        </Alert>
      </Snackbar>
    </div>
  );
}
