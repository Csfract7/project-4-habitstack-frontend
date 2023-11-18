import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import StackCard from '../components/StackCard'
import "../Home.css"


const Stack = (props) => {
    console.log(props, "OUTSIDE PROPS")

    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return (
            <Content className="columns is-multiline">
                {props.stack.map((stack) => (<StackCard stack={stack}/>))}
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


export default Stack