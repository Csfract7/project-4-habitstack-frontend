import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";


const Styles = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 175px;
  }

  .react-datepicker__close-icon::before,
  .react-datepicker__close-icon::after {
    background-color: red;
  }
`;

export function DatePickerRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [attributeName, setAttributeName] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const handleAttributeNameChange = (e) => {
    setAttributeName(e.target.value);
  };

  const handleAddAttribute = () => {
    if (startDate && endDate) {
      const datesInRange = getDatesInRange(startDate, endDate);
      const updatedSelectedDates = datesInRange.map((date) => ({
        date,
        attributeName,
      }));

      setSelectedDates([...selectedDates, ...updatedSelectedDates]);

      // Clear the form and selected dates
      setAttributeName("");
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleDeleteAttribute = (index) => {
    const updatedSelectedDates = [...selectedDates];
    updatedSelectedDates.splice(index, 1);
    setSelectedDates(updatedSelectedDates);
  };

  const getDatesInRange = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  return (
    <div>
      <DatePicker
        isClearable
        filterDate={(d) => {
          return new Date() > d;
        }}
        placeholderText="Select Start Date"
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        isClearable
        filterDate={(d) => {
          return new Date() > d;
        }}
        placeholderText="Select End Date"
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
      />
      <div>Selected start date: {startDate ? startDate.toString() : null}</div>
      <div>Selected end date: {endDate ? endDate.toString() : null}</div>
      
      <form>
        <label>
          Name:
          <input
            type="text"
            value={attributeName}
            onChange={handleAttributeNameChange}
          />
        </label>
      </form>
      <button onClick={handleAddAttribute}>Submit</button>
      <div>
        <strong>Habit Names and Dates:</strong>
        <ul>
          {selectedDates.map(({ date, attributeName }, index) => (
            <li key={index}>
              {date.toString()} - {attributeName}
              {formatDistanceToNow(date, { addSuffix: true })}
              <button onClick={() => handleDeleteAttribute(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TableDatePicker() {
  return (
    <Styles>
      <DatePickerRange />
    </Styles>
  );
}



