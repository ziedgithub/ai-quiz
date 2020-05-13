import React from "react";

import {connect} from "react-redux";

import {Checkbox, colors, withStyles} from "@material-ui/core";

import './checkbox.styles.scss';
import {setCheckbox} from "../../redux/quiz/quiz.actions";

const GreenCheckbox = withStyles({
  root: {
    color: colors.green[400],
    '&$checked': {
      color: colors.green[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    color: colors.red[400],
    '&$checked': {
      color: colors.red[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckBoxComponent = ({option, quizIdx, optionIdx, setCheckbox, submitted}) => {
  if (submitted && (option.checked ^ option.valid )){
    return (
      <RedCheckbox
        checked={option.checked ? option.checked : false}
        disabled={submitted}
        onChange={(event) => {
          const checked = event.target.checked;
          setCheckbox(checked, quizIdx, optionIdx);
        }}
      />
    )
  } else if (submitted && !(option.checked ^ option.valid )) {
    return (
      <GreenCheckbox
        checked={option.checked ? option.checked : false}
        disabled={submitted}
        onChange={(event) => {
          const checked = event.target.checked;
          setCheckbox(checked, quizIdx, optionIdx);
        }}
      />
    )
  }
  return (<Checkbox
    checked={option.checked ? option.checked : false}
    disabled={submitted}
    onChange={(event) => {
      const checked = event.target.checked;
      setCheckbox(checked, quizIdx, optionIdx);
    }}
    color='primary'
  />)
};

const mapDispatchToProps = (dispatch) => ({
  setCheckbox: (checked, quizIdx, optionIdx) => dispatch(setCheckbox(checked, quizIdx, optionIdx)),
});

const mapStateToProps = (state) => ({
  submitted: state.quiz.submitted
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxComponent);