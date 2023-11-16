import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import HabitCard from '../components/HabitCard'
import "../Home.css"


const Habit = (props) => {
    console.log(props, "OUTSIDE PROPS")

    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return (
            <Content className="columns is-multiline">
                {props.habit.map((habit) => (<HabitCard habit={habit}/>))}
            </Content>
        )
    }

    //loading function
    const loading = () => {
        console.log("IN LOADING", props)
        return(
            <h1>Loading...</h1>
        )
    }
    return (props.habit ? loaded() : loading())
}


export default Habit