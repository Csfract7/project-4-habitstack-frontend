// CalendarCard.js
import React from 'react';
import { Card } from 'react-bulma-components';
import CalendarForm from './CalenderForm';

const CalendarCard = ({ calendarItem, date }) => {
  return (
    <Card className="column is-3" textAlign="center">
      <Card.Content>
        <Card.Header.Title className="is-size-4" style={{ fontWeight: 'bold' }}>
          {/* Your existing code for displaying calendarItem name and image */}
        </Card.Header.Title>
        <Card.Content>
          <div className="app">
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                Test
            </div>
            <div className="text-center">
              Selected date: {date.toDateString()}
            </div>
          </div>
        </Card.Content>
        {/* Render the CalendarForm for specific dates */}
        <CalendarForm date={date} />
      </Card.Content>
    </Card>
  );
};

export default CalendarCard;



