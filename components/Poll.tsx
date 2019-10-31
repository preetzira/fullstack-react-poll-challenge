import * as React from 'react';
import styled from 'styled-components';
import { QandAsDocument } from '../types';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const PollWrapper = styled.div``;

function Option(props: any){
  const isMaxVoted = props.max === props.answer.votes
  const onAnswerBackgroundColor = isMaxVoted ? '161, 255, 244' : '225,225,225'
  const votes = ((props.answer.votes/props.totalVotes) * 100).toFixed(2)
  const customStyle = props.isAnswered ? {
    background: `linear-gradient(-90deg, rgb(255,255,255) ${100- (+votes)}% , 
    rgb(${onAnswerBackgroundColor}) ${votes}%)
    `
  } : {}

  const [isSelected,setSelected] = React.useState(false)

  function handleClick(): void{
    props.onClick()
    setSelected(true)
  }

  return (
    <li
      className={`option ${isMaxVoted && props.isAnswered ? 'max-voted' : ''}`}
      style={customStyle}
      onClick={()=>!props.isAnswered ? handleClick() : null} >
      {props.answer.text}{isSelected ? <> &#9745;</> : ''}
      <span className="votes">{props.isAnswered ? votes+'%' : ""}</span>
    </li>
  )
}

function Question(props: any){
  const [isAnswered,setAnswered] = React.useState(false)
  let { question, answers } = props
  const maxVotes = Math.max(...answers.map((val:any)=>val.votes))
  const totalVotes = answers.reduce((acc:number,cv:any)=>acc+cv.votes,0)
  return <React.Fragment key={question.text}>
      <h2><strong>{question.text}</strong></h2>
      <ul>
        {
          answers.map((answer :any)=>(
            <Option max={maxVotes} totalVotes={totalVotes} key={answer.text} answer={answer} isAnswered={isAnswered} onClick={()=>setAnswered(!isAnswered)}/>
          ))
        }
        <span className="text-light">{totalVotes} votes</span>
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
