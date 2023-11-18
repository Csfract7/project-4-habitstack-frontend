
import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const StackCard = (props) => {
    const stackItem = props.stack
    // console.log("this is the stack",  stackItem)

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
                    <h4>Habits</h4> 
                </Card.Header.Title>
                <Card.Content>

                {stackItem?.habits && stackItem.habits.map((habit, index) => (
                    <div key={index}>
                        <p>- {habit.name} -</p>
                        {/* <p>     ----Description: {habit.description}</p>
                        <p>     ----Type: {habit.type}</p> */}
                        {/* Add more properties as needed */}
                    </div>
                ))}


                <strong>Description: </strong>{stackItem?.description}
                <p><strong>Type: </strong>{stackItem?.type}</p> 
                <p><strong>Place: </strong>{stackItem?.place}</p>
                <p><strong>Completed: </strong>{stackItem?.completed}</p>
                <p><strong>Time: </strong>{stackItem?.time}</p>
                <br /><br />
                
                <Link to={`/stack/${stackItem._id}`}>
                    <Button color='text'> Edit </Button>
                </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default StackCard