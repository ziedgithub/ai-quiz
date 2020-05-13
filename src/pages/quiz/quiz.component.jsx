import React from "react";
import {connect} from "react-redux";

import './quiz.styles.scss';

import Question from "../../components/question/question.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {setSubmitted} from "../../redux/quiz/quiz.actions";
import ModalComponent from "../../components/modal/modal.component";

const Quiz = ({quizes, submitted, setSubmitted}) => {

  const [open, setOpen] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleOpen();
    setSubmitted(true);
    let scoreFinal = quizes.reduce((score, quiz) => {
      return score + quiz.responses.reduce((note, option) => {
        return !(option.checked ^ option.valid) && note;
      }, true) ? 1 : 0;
    }, 0)/ quizes.length;
    setScore(scoreFinal);
  }

  return (
    <div className="quiz">
      {
        quizes.map((quiz, idx) => <Question
          quiz={quiz}
          key={idx}
          quizIdx={idx}
        />)
      }
      <div className='button'>
        <CustomButton handleSubmit={handleSubmit} disabled={submitted}/>
      </div>
      <ModalComponent open={open} handleClose={handleClose} score={score} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSubmitted: (submitted) => dispatch(setSubmitted(submitted)),
});

const mapStateToProps = (state) => ({
  quizes: state.quiz.quizes,
  submitted: state.quiz.submitted,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);