import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";


import DatePickerRange from "./DatePicker"

import Home from "../pages/Home";

import Habit from "../pages/Habit";
import HabitShow from "../pages/habitShow";
import NewHabit from "../pages/newHabit";

import NewStack from "../pages/newStack";
import Stack from "../pages/Stack";
import StackShow from "../pages/stackShow";

import Progress from "../pages/Progress";

// const Styles = styled.div`
//  .react-datepicker-wrapper,
//  .react-datepicker__input-container,
//  .react-datepicker__input-container input {
//    width: 175px;
//  }

//  .react-datepicker__close-icon::before,
//  .react-datepicker__close-icon::after {
//    background-color: red;
//  }
// `;



// import Calendar from '../pages/Calendar';

// import Home from "../pages/Progress";
// import Home from "../pages/Home";
// import Home from "../pages/Home";


const Main = (props) => {
    const [habit, setHabit] = useState(null)
    const [stack, setStack] = useState(null)
    const [progress, setProgress] = useState(null)
    const [date, setDate] = useState(new Date())
    const [calendar, setCalendar] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    //It won't show data from backend if add slash '/' at the end
    const URL = 'https://project-4-habitstack-9fd0a8b89bc2.herokuapp.com' 
    const habitURL = `${URL}/habit`
    const stackURL = `${URL}/stack`
    const progressURL = `${URL}/progress`
    const calendarURL = `${URL}/calendar`

    const getHabit = async () => {
        try {
            const response = await fetch(habitURL)
            const data = await response.json()
            // console.log(data)
            setHabit(data.data)
        } catch (error) {
        console.error('Error fetching habit data:', error);
        }
    }

    const createHabit = async (habit) => {
        await fetch(habitURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
        //update list of habits after adding new habit
        getHabit()
    }

    const updateHabit = async (habit, id) => {
        // Make a PUT request to update a habit item
        await fetch(`${habitURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(habit)
        })
        //update the habit list
        getHabit()
    }

    const deleteHabit = async(id)=> {
        await fetch (`${habitURL}/${id}`, {
            method: "DELETE"
        })
        // Update the habit list after deleting a habit item
        getHabit()
    }

    useEffect(() => {
        getHabit()
    }, [])

    // // Stack Functions below /////////////////////////////////
    const getStack = async () => {
        try {
            const response = await fetch(stackURL)
            const data = await response.json()
            // console.log(data)
            // setStack(data)
            setStack(data.data)
        } catch (error) {
        console.error('Error fetching stack data:', error);
        }
    }

    const createStack = async (stack) => {
        await fetch(stackURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stack)
        })
        getStack()
    }

    const updateStack = async (stack, id) => {
        await fetch(`${stackURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stack)
        })
        getStack()
    }

    const deleteStack = async(id)=> {
        await fetch (`${stackURL}/${id}`, {
            method: "DELETE"
        })
        getStack()
    }

    useEffect(() => {
        getStack()
    }, [])

    //// progress below

    const getProgress = async () => {
        try {
            const response = await fetch(progressURL);
            const data = await response.json();
            console.log('Progress Data:', data)
            setProgress(data.data);
        } catch (error) {
            console.error('Error fetching progress data:', error);
        }
    };
    

    useEffect(() => {
        getProgress()
    }, [])

    // Calendar below 

    const getCalendar = async () => {
        try {
            const response = await fetch(calendarURL)
            const data = await response.json()
            // console.log(data)
            setCalendar(data.data)
        } catch (error) {
        console.error('Error fetching calendar data:', error);
        }
    }

    const createCalendar = async (calendar) => {
        await fetch(calendarURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(calendar)
        })
        //update list of calendars after adding new calendar
        getCalendar()
    }

    const updateCalendar = async (calendar, id) => {
        // Make a PUT request to update a calendar item
        await fetch(`${calendarURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(calendar)
        })
        //update the calendar list
        getCalendar()
    }

    const deleteCalendar = async(id)=> {
        await fetch (`${calendarURL}/${id}`, {
            method: "DELETE"
        })
        // Update the calendar list after deleting a calendar item
        getCalendar()
    }

    useEffect(() => {
        getCalendar()
    }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={< Home />}/>
                <Route exact path="/home" element={<Home />}/>
                
                <Route exact path="/habit/new" element={<NewHabit createHabit={createHabit}/>} />
                <Route exact path="/habit" element={<Habit habit={habit} />}/>
                <Route path="/habit/:id" element={<HabitShow habit={habit} updateHabit={updateHabit} deleteHabit={deleteHabit}/>}/>

                <Route exact path="/stack/new"
                    element={
                        <NewStack
                            createStack={createStack}
                            allHabits={habit} 
                        />
                    }
                />
                <Route exact path="/stack" element={<Stack stack={stack} allHabits={habit}  />}/>
                <Route path="/stack/:id" element={<StackShow stack={stack} updateStack={updateStack} deleteStack={deleteStack} allHabits={habit}/>}/>

                <Route exact path="/progress" element={<Progress stack={stack} />}/>

                <Route exact path="/calendar" element={   <DatePickerRange date ={date} startDate = {startDate} endDate = {endDate}  /> 
                
                
                
                } />
            </Routes>
        </main>
    )

}

export default Main