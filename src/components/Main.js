import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import Habit from "../pages/Habit";
import HabitShow from "../pages/habitShow";
import NewHabit from "../pages/newHabit";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
// import Home from "../pages/Home";


const Main = (props) => {
    const [habit, setHabit] = useState(null)
    const [stack, setStack] = useState(null)

    //It won't show data from backend if add slash '/' at the end
    const URL = 'https://project-4-habitstack-9fd0a8b89bc2.herokuapp.com' 
    const habitURL = `${URL}/habit`
    const stackURL = `${URL}/stack`

    const getHabit = async () => {
        try {
            const response = await fetch(habitURL)
            const data = await response.json()
            console.log(data)
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
    // const getStack = async () => {
    //     try {
    //         const response = await fetch(stackURL)
    //         const data = await response.json()
    //         console.log(data)
    //         // setStack(data)
    //         setStack(data.data)
    //     } catch (error) {
    //     console.error('Error fetching stack data:', error);
    //     }
    // }

    // const createStack = async (stack) => {
    //     await fetch(stackURL, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(stack)
    //     })
    //     getStack()
    // }

    // const updateStack = async (stack, id) => {
    //     await fetch(`${stackURL}/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(stack)
    //     })
    //     getStack()
    // }

    // const deleteStack = async(id)=> {
    //     await fetch (`${stackURL}/${id}`, {
    //         method: "DELETE"
    //     })
    //     getStack()
    // }

    // useEffect(() => {
    //     getStack()
    // }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={< Home />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/habit/new" element={<NewHabit createHabit={createHabit}/>} />
                <Route exact path="/habit" element={<Habit habit={habit} />}/>
                <Route path="/habit/:id" element={<HabitShow habit={habit} updateHabit={updateHabit} deleteHabit={deleteHabit}/>}/>

                {/* <Route exact path="/stack/new" element={<NewStack createStack={createStack}/>} />
                <Route exact path="/stack" element={<Stack stack={stack} />}/>
                <Route path="/stack/:id" element={<ShowStack stack={stack} updateStack={updateStack} deleteStack={deleteStack}/>}/> */}
            </Routes>
        </main>
    )

}

export default Main