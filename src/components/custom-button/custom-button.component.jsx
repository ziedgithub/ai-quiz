import React from "react";
import {Button} from "@material-ui/core";

import './cutom-button.styles.scss';

const CustomButton = ({handleSubmit, disabled}) => (
  <Button variant="contained" color="primary" fullWidth={false} onClick={handleSubmit} disabled={disabled}>
    Submit
  </Button>
);

export default CustomButton;