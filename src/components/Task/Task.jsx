import React from 'react';
import './_task.scss';
import DateFormat from '../DateFormat/DateFormat';
import AnswerOn from '../../assets/images/answer-on.svg';
import AnswerOff from '../../assets/images/answer-off.svg';
import QuestionOn from '../../assets/images/question-on.svg';
import QuestionOff from '../../assets/images/question-off.svg';
import Lock from '../../assets/images/lock.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

function Task({
   taskState, 
   unlockedAt, 
   questionContent,
   questionSentAt,
   answerContent,
   answerSentAt
}) {
   const status = {
      LOCKED: "LOCKED",
      ASK: "ASK",
      ANSWER: "ANSWER",
      ASKED: "ASKED",
      ANSWERED: "ANSWERED"
   };

   const taskStyles = {
      locked: {
         background: '#3D4641', 
         color: '#F2EEE1', 
         boxShadow: '10px 10px 24px rgba(61, 70, 64, 0.15)'
      },
      pending: {
         background: '#FFFFFF', 
         color: '#4A4A4A', 
         boxShadow: '15px 15px 44px rgba(61, 70, 65, 0.15)',
         borderLeft: '3px solid #F4BF6C'
      },
      complete: {
         background: '#f6f6f3', 
         color: '#4A4A4A'
      }
   };

   const taskVariants = {
      "LOCKED": {
         style: taskStyles.locked,
         imgSrc: QuestionOff,
         unlockedAt: new Date(unlockedAt)
      },
      "ASK": {
         style: taskStyles.pending,
         imgSrc: QuestionOn
      },
      "ANSWER": {
         style: taskStyles.pending,
         imgSrc: AnswerOn,
         questionContent: questionContent,
         questionSentAt: new Date(questionSentAt)
      },
      "ASKED": {
         style: taskStyles.complete,
         imgSrc: QuestionOff,
         questionContent: questionContent,
         questionSentAt: new Date(questionSentAt)
      },
      "ANSWERED": {
         style: taskStyles.complete,
         imgSrc: AnswerOff,
         questionContent: questionContent,
         questionSentAt: new Date(questionSentAt),
         answerContent: answerContent,
         answerSentAt: new Date(answerSentAt)
      }
   };

   const minute = 1000 * 60;
   const hour = minute * 60;
   const day = hour * 24;

   return (
      <div 
         className='task'
         style={taskVariants[taskState].style}
      >
         <img src={taskVariants[taskState].imgSrc} alt={"img"} className='task-img'/>
         {
            taskState === status.LOCKED || taskState === status.ASK ?
               <div className='content'>Ask a question</div> :
               taskState === status.ANSWER || taskState === status.ASKED ? 
                  <div className='content'>{taskVariants[taskState].questionContent}</div> :
                  // only ANSWERED use case remains
                  <div className='content'>
                     <div>(Q): &nbsp;
                        {
                           //limit the content to only 15 words so that both the question and the answer have space on the card   
                              taskVariants[taskState].questionContent.split(' ').slice(0, 15).join(' ')
                        }...
                     </div>
                     <DateFormat messageSentAt={taskVariants[taskState].questionSentAt} />
                     <div>(A): { taskVariants[taskState].answerContent.split(' ').slice(0, 15).join(' ')}...</div>
                  </div>
         }
         {
            taskState === status.LOCKED ?
               <div className='task-footer1'> 
                  Unlocks in&nbsp;
                  {
                     ((taskVariants[taskState].unlockedAt - Date.now()) / day) > 2 ?
                     <span>{((taskVariants[taskState].unlockedAt - Date.now()) / day).toFixed(0)} days</span> :
                     <span>{((taskVariants[taskState].unlockedAt - Date.now()) / hour).toFixed(0)} hours</span>
                  } &nbsp;
                  <img src={Lock} alt={'lock-img'} className='lock-img'/>
               </div> :
               taskState === status.ASK ?
                  <div className='task-footer1'>
                     <img src={arrowRight} alt={'arrow-right'} />
                  </div> :
                  <div className='task-footer2'>
                     <DateFormat 
                        messageSentAt={
                           taskState === status.ANSWERED ? 
                              taskVariants[taskState].answerSentAt : 
                              taskVariants[taskState].questionSentAt
                        }
                     />
                     <img src={arrowRight} alt={'arrow-right'}/>
                  </div>
         }
      </div> 
   );
}

export default Task;
