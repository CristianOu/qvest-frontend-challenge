import React, { useEffect, useState } from 'react';
import './_activity-page.scss';
import Layout from '../../components/Layout/Layout';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import Task from '../../components/Task/Task';
import tasksJson from '../../tasks.json'

function ActivityPage() {
   const [tasks, setTasks] = useState([]);
   const [filteredTasks, setFilteredTasks] = useState([]);

   useEffect(() => {
      setTasks(tasksJson);
      setFilteredTasks(tasksJson);
    },[tasks]);

   function filterTasks(state) {
      if (state === "All") {
         setFilteredTasks(tasks)
      } else if (state === "Locked") {
         const filteredTasks = tasks.filter(task => task.state === "LOCKED");
         setFilteredTasks(filteredTasks)   
      } else if (state === "Pending") {
         const filteredTasks = tasks.filter(task => task.state === "ASK" || task.state === "ANSWER")
         setFilteredTasks(filteredTasks)   
      } else {
         const filteredTasks = tasks.filter(task => task.state === "ANSWERED" || task.state === "ASKED");
         setFilteredTasks(filteredTasks)   
      }
   }

   return (
      <Layout tasks={tasks}>
         <div className='home-page-container'>
            {/* The username should be a variable coming from the backend */}
            <div className='username'>Hi Michael Hansen </div>
            <div className='task-list-header'>
               <div className='tasks-total'>Tasks ({tasks.length}) </div>
               <SortDropdown tasks={tasks} filterTasks={filterTasks} />
            </div>
            <div className='tasks-container'>
               {
                  filteredTasks ? 
                     filteredTasks.map(task => 
                        <Task 
                           key={task.id}
                           taskState={task.state}
                           unlockedAt={task.unlockedAt || ''}
                           questionContent={task.questionContent || ''}
                           questionSentAt={task.questionSentAt || ''}
                           answerContent={task.answerContent || ''}
                           answerSentAt = {task.answerSentAt || ''}
                        />
                     ) :
                  "No tasks"
               }
            </div>
         </div>
      </Layout>   
   );
}

export default ActivityPage;
