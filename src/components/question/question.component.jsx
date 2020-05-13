import React from "react";
import {FormGroup} from "@material-ui/core";
import {connect} from "react-redux";

import './question.styles.scss';
import FormControlLabelComponent from "../form-control-label/form-control-label.component";

const Question = ({quiz, quizIdx, submitted}) => (
  <div className='question'>
    <FormGroup>
      <p>{quiz.question}</p>
      {
        quiz.responses.map((option, idx) => (
          <div className='option' key={idx}>
            <FormControlLabelComponent
              option={option}
              quizIdx={quizIdx}
              optionIdx={idx}
            />
            {
              option.explication && submitted && option.checked && !option.valid ?
                <div className='explication'>{option.explication}</div>: null
            }
            {
              submitted && !option.checked && option.valid ?
                <div className='explication'>This should be selected !</div>: null
            }
          </div>
        ))
      }
    </FormGroup>
  </div>
);

const mapStateToProps = (state) => ({
  submitted: state.quiz.submitted,
});

export default connect(mapStateToProps)(Question);