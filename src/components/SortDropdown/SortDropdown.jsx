import React, { useEffect, useRef, useState } from 'react';
import './_sort-dropdown.scss';
import Vector from '../../assets/images/vector-down.svg';

function SortDropdown({tasks, filterTasks}) {
  const [selectedOption, setSelectedOption] = useState('All');
  const [openDropdown, setOpenDropdown] = useState(false);

  const [taskStates, setTaskStates] = useState([
    {id: 0, state: "All", nr: 0},
    {id: 1, state: 'Locked', nr: 0}, 
    {id: 2, state: 'Pending', nr: 0} , 
    {id: 3, state: 'Completed', nr: 0}
  ]);  

  const handleSortByOption = (state) => {
    setSelectedOption(state);
    filterTasks(state);
    setOpenDropdown(!openDropdown);
  }
  
  useEffect(() => {
    taskStates.forEach(taskState => {
      taskState.nr = 0
    })
    let newTaskStates = taskStates;
    tasks.forEach(({state}) => {
      newTaskStates[0].nr++;
      if (state === "LOCKED") {
        newTaskStates[1].nr++;
      } else if (state === "ASK" || state === "ANSWER") {
        newTaskStates[2].nr++;
      } else {
        newTaskStates[3].nr++
      }
    });
    setTaskStates(newTaskStates);
  }, [tasks, taskStates]) 


  return (
    <div className='filter-tasks'> 
      <label className='showing-text'>Showing&nbsp;&nbsp;</label>
      <div className='options-container'>
        <div
          className='selected-option' 
          onClick={() => setOpenDropdown(!openDropdown)} 
        > 
          {selectedOption} tasks&nbsp;  
          <img 
            src={Vector} 
            alt="vector-down" 
            style={{
              transform: openDropdown ? 'rotate(180deg)' : '' , 
              transition: 'ease .1s' 
            }} 
          /> 
        </div>

        <div 
          className='list-of-options' 
          style={{
            visibility: openDropdown ? 'visible' : 'hidden',
            opacity: openDropdown ? '1' : '0',
            transition: 'ease .1s'
          }}
        > 
          {
            taskStates.map( (taskState) => 
              <div key={taskState.id} className='option' onClick={() => handleSortByOption(taskState.state)}>
                {taskState.state} ({taskState.nr})
              </div>
            )
          }
        </div>
      </div>
      
      
    </div>
    
  );
}

export default SortDropdown;
