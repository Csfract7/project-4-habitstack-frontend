import React, { useState } from 'react';
import { Content } from 'react-bulma-components';
import CalendarCard from '../components/CalenderCard';

const Calendar = (props) => {
  const [date, setDate] = useState(new Date());

  // Loaded function
  const loaded = () => {
    return (
      <Content className="columns is-multiline">
        {props.calendar.map((calendarItem) => (
          <CalendarCard key={calendarItem._id} calendarItem={calendarItem} date={date} />
        ))}
      </Content>
    );
  };

  // Loading function
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <>{props.calendar ? loaded() : loading()}</>;
};

export default Calendar;
