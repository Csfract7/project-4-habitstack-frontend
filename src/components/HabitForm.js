import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import { Link } from "react-router-dom";


const HabitForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const habit = props.habit

    const newForm = {
        name: "",
        description: "",
        type: "",
        time: "",
        place: "",
        completed: "",
        image: "",

      }
    
    const [form, setForm] = useState(habit)
    const { Input, Field, Label } = Form;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createHabit(form)
        setForm(newForm)
        navigate("/habit")
    }

    return (
        <div>
            <Box className="form-box">
                <h2 className="is-size-3 has-font-weight-bold">Create New Habit </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder='Brush teeth'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder='Brush for 2 min and make sure to rinse with mouthwash'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <label htmlFor="type">Type</label>
                            <select
                                id="type"
                                name="type"
                                placeholder="New"
                                onChange={(e) => {
                                handleChange(e);
                                }}
                            >
                                <option value="Established">Established</option>
                                <option value="New">New</option>
                            </select>
                        </Field>

                        <Field>
                            <Label>Time</Label>
                            <Input 
                                name="time"
                                value={form?.time}
                                placeholder='8 A.M.'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Place</Label>
                            <Input 
                                name="place"
                                value={form?.place}
                                placeholder='Bedroom'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Completed</Label>
                            <Input 
                                name="completed"
                                value={form?.completed}
                                placeholder='5'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder='https://ih1.redbubble.net/image.5115581133.8421/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                    
                        <div className="buttons is-left">
                            <Button className="is-primary">Submit</Button> 
                            <Link to="/habit"> <Button className="is-light">Cancel</Button> </Link>
                        </div>

                    </form>
            </Box>
        </div>
    )
}

export default HabitForm