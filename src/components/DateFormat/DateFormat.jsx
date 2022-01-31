import React from 'react';
import './_date-format.scss';

function dateFormat({messageSentAt}) {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className='date-text'>
      {monthNames[messageSentAt.getMonth()]}&nbsp;
      {messageSentAt.getDate()},&nbsp;
      {
        messageSentAt.getHours() > 12 ?
          messageSentAt.getHours() % 12 :
          messageSentAt.getHours()
      }:
      {
        messageSentAt.getMinutes() < 10 ?
          messageSentAt.getMinutes() + '0' :
          messageSentAt.getMinutes()
      }
      {
        messageSentAt.getHours() > 12 ?
          "PM" :
          "AM"
      }
    </div>
  );
}

export default dateFormat;
