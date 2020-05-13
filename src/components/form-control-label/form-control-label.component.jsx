import React from "react";
import {connect} from "react-redux";
import {FormControlLabel, colors} from "@material-ui/core";

import './form-control-label.styles.scss';
import withStyles from "@material-ui/core/styles/withStyles";
import CheckBoxComponent from "../checkbox/checkbox.component";

const GreenFormControlLabel = withStyles({
  root: {
    color: colors.green[900]
  },
})((props) => <FormControlLabel {...props} />);

const RedFormControlLabel = withStyles({
  root: {
    color: colors.red[900]
  },
})((props) => <FormControlLabel {...props} />);

const FormControlLabelComponent = ({submitted, option, ...otherProps}) => {
  if (submitted && (option.checked ^ option.valid )){
    return <RedFormControlLabel control={<CheckBoxComponent option={option} {...otherProps} />} label={option.label}/>
  } else if (submitted && !(option.checked ^ option.valid )) {
    return <GreenFormControlLabel control={<CheckBoxComponent option={option} {...otherProps} />} label={option.label}/>
  } else {
    return <FormControlLabel control={<CheckBoxComponent option={option} {...otherProps} />} label={option.label} />
  }
};

const mapStateToProps = (state) => ({
  submitted: state.quiz.submitted
});

export default connect(mapStateToProps)(FormControlLabelComponent);