import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const ProgressCard = (props) => {
    const stackItem = props.stack
    // console.log("this is the stack",  stackItem)
    console.log("stackCard props:", props);
    if (!props.stack) {
        // Handle the case where stack is undefined
        return null; // or render a placeholder or loading state
      }
    
    return (    
        <Card className="column is-3" textAlign='center'>
            <Card.Content>
                <Card.Header.Title className='is-size-4' style={{ fontWeight: 'bold' }}>
                    <ImageCard src={stackItem?.image}/>
                    <br /><br />
                    {stackItem?.name}
             
                </Card.Header.Title>
                <Card.Content>
            
               
                <p><strong>Completed: </strong>{stackItem?.completed}</p>
                
                <br /><br />
                <br /><br />
                -----------------------------------
                
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default ProgressCard