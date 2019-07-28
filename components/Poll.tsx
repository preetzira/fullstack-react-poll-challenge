import * as React from 'react';
import styled from 'styled-components';
import { QandAsDocument } from '../types';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const PollWrapper = styled.div``;

function Option(props: any){
  const onAnswerBackgroundColor = props.max === props.answer.votes ? '0,196,255' : '181,181,181'
  const customStyle = props.isAnswered ? {
    background: `linear-gradient(to right, rgb(${onAnswerBackgroundColor}) 0%, 
    rgb(255,255,255) ${props.answer.votes}%)`
  } : {}

  const [isSelected,setSelected] = React.useState(false)

  function handleClick(): void{
    props.onClick()
    setSelected(true)
  }
  return (
    <li
      className={`option ${isSelected ? 'selected' : ''}`}
      style={customStyle}
      onClick={()=>!props.isAnswered ? handleClick() : null} >
      {props.answer.text}
      <span className="votes">{props.isAnswered ? props.answer.votes+'%' : ""}</span>
    </li>
  )
}

function Question(props: any){
  const [isAnswered,setAnswered] = React.useState(false)
  let { question, answers } = props
  const maxVotes = Math.max(...answers.map((val:any)=>val.votes))
  return <React.Fragment key={question.text}>
      <strong>{question.text}</strong>
      <ul>
        {
          answers.map((answer :any)=>(
            <Option max={maxVotes} key={answer.text} answer={answer} isAnswered={isAnswered} onClick={()=>!isAnswered ? setAnswered(!isAnswered) : null}/>
          ))
        }
      </ul>
    </React.Fragment>
}

export default function Poll({ qandas }: Props) {
  return <PollWrapper>
      {
        qandas.questions.map(question=><Question key={question.question.text} {...question} />)
      }
  </PollWrapper>
}
