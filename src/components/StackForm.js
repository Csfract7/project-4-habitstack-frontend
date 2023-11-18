import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import { Link } from "react-router-dom";


const StackForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const stack = props.stack

    const newForm = {
        name: "",
        description: "",
        type: "",
        time: "",
        place: "",
        completed: "",
        image: "",
        habits: [],

      }
    
      const [form, setForm] = useState(stack || newForm);
      const [newHabit, setNewHabit] = useState('');

    const { Input, Field, Label } = Form;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleMultiSelectChange = () => {
        if (newHabit.trim() !== '') {
          setForm({ ...form, habits: [...form.habits, newHabit] });
          setNewHabit('');
        }
      };

      const handleHabitInputChange = (e) => {
        setNewHabit(e.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form data before submission:", form); // Log the form data
        props.createStack(form);
        setForm(newForm);
        navigate("/stack");
    };
    

    return (
        <div>
            <Box className="form-box">
                <h2 className="is-size-3 has-font-weight-bold">Create New Stack </h2>
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
                            <Label>Habits</Label>
                                <div className="field has-addons">
                                <div className="control is-expanded">
                                    <Input
                                    name="habits"
                                    value={newHabit}
                                    placeholder="Enter a habit"
                                    onChange={handleHabitInputChange}
                                    />
                                </div>
                                <div className="control">
                                    <Button type="button" onClick={handleMultiSelectChange}>
                                    Add Habit
                                    </Button>
                                </div>
                                </div>
                                {form.habits.length > 0 && (
                                <div>
                                    <p>Selected Habits:</p>
                                    <ul>
                                    {form.habits.map((habit, index) => (
                                        <li key={index}>{habit}</li>
                                    ))}
                                    </ul>
                                </div>
                                )}
                                
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
                            <Link to="/stack"> <Button className="is-light">Cancel</Button> </Link>
                        </div>

                    </form>
            </Box>
        </div>
    )
}

export default StackForm