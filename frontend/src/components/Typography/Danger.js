import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
// core components
import styles from "./typographyStyle";

const useStyles = makeStyles(styles);

export default function Danger(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  children: PropTypes.node,
};
