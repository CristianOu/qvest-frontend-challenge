import React from 'react';
import './_footer.scss';

function Footer({tasks}) {

  function nrPendingTasks() {
    let pending = 0;
    if (tasks.tasks) {
      pending = tasks.tasks.filter(task => task.state === "ASK" || task.state === "ANSWER");
    }
    return pending;
  }

  return (
    <div className='footer'>
      <div>{nrPendingTasks() ? nrPendingTasks().length + " pending task(s)" : ""}</div>
      <div>My Activity</div>
    </div>
  );
}

export default Footer;
