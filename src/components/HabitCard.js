import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const HabitCard = (props) => {
    const habitItem = props.habit
    return (    
        <Card className="column is-3" textAlign='center'>
            <Card.Content>
                <Card.Header.Title className='is-size-4' style={{ fontWeight: 'bold' }}>
                    <ImageCard src={habitItem?.image}/>
                    <br /><br />
                    {habitItem?.name} 
                </Card.Header.Title>
                <Card.Content>
                {habitItem?.description}
                <p><strong>Type:</strong> {habitItem?.type}</p> 
                <p><strong>Place:</strong> {habitItem?.place}</p>
                <p><strong>Completed:</strong> {habitItem?.completed}</p>
                <strong>{habitItem?.time}</strong>
                <br /><br />
                
                <Link to={`/habit/${habitItem._id}`}>
                    <Button color='text'> Edit </Button>
                </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default HabitCard