import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import ProgressCard from '../components/ProgressCard'
import "../Home.css"


const Progress = (props) => {
    console.log(props.stack, "OUTSIDE PROPS")

    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return (
            <Content className="columns is-multiline">
                {props.stack.map((stack) => (<ProgressCard stack={stack}/>))}
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
    return (props.stack ? loaded() : loading())
}


export default Progress