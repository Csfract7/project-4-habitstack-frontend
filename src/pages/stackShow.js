import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Form, Button } from 'react-bulma-components'
import StackCard from '../components/StackCard'


const StackShow = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const stack = props.stack
    const stackItem = stack?.find((p) => p._id === id) 

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
    
    //State form data and edit mode
    const [form, setForm] = useState(newForm)
    const [editing, setEditing] = useState(false);
    const {Input, Field, Label, Checkbox} = Form;

    //Effect to update the form data when stackItem changes
    useEffect(() => {
        if (stackItem) {
          setForm(stackItem);
          console.log('Form after update:', form);

        }
      }, [stackItem]);

    //handleChange function - Update the form state on each input change
    const handleChange = (e) => { 
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleAddHabit = () => {
        if (form.newHabit.trim() !== '') {
          setForm({
            ...form,
            habits: [...form.habits, form.newHabit],
            newHabit: '', // Clear the input field after adding the habit
          });
        }
      };
    
    
      const handleRemoveHabit = (habitIndex) => {
        const updatedHabits = form.habits.filter((_, index) => index !== habitIndex);
        setForm({ ...form, habits: updatedHabits });
      };
    
    const handleEdit = () => {
        setEditing(true);  
        //toggles the edit state when user click edit
      };

    //handle form for updating
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.updateStack(form, id)
        setForm(newForm)
        setEditing(false);
        navigate(`/stack/${id}`) 
        //optional direct where you want
    }

    const removeStack = (e) => {
        e.preventDefault()
        props.deleteStack(id)
        navigate("/stack")
    }
    
    return (
        <div>
            <div className="show-centered-container">
            <StackCard stack={stackItem}/>
            </div>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit stack </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder={stackItem?.name || 'Name'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Habits</Label>
                                {form.habits.map((habit, index) => (
                                    <div key={index} className="field has-addons">
                                    <div className="control is-expanded">
                                        <Input
                                        type="text"
                                        value={habit}
                                        readOnly
                                        />
                                    </div>
                                    <div className="control">
                                        <Button
                                        type="button"
                                        onClick={() => handleRemoveHabit(index)}
                                        className="is-danger"
                                        >
                                        Remove
                                        </Button>
                                    </div>
                                    </div>
                                ))}
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                    <Input
                                        name="newHabit"
                                        placeholder="Enter a new habit"
                                        value={form.newHabit}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    </div>
                                    <div className="control">
                                    <Button type="button" onClick={handleAddHabit}>
                                        Add Habit
                                    </Button>
                                    </div>
                                </div>

                        </Field>    
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder={stackItem?.description || 'Description'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Type</Label>
                            <select
                                name="type"
                                value={form?.type}
                                placeholder={stackItem?.type || 'New or Established'}
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
                                placeholder= {stackItem?.time || '8 A.M.'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Place</Label>
                            <Input 
                                name="place"
                                value={form?.place}
                                placeholder={stackItem?.place || 'Bedroom'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Completed</Label>
                            <Input 
                                name="completed"
                                value={form?.completed}
                                placeholder={stackItem?.completed || '5'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder={stackItem?.image || 'Image'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>
                        {" "}
                        <Button color="danger" onClick={removeStack}>
                            Delete
                        </Button>
                    </form>
                </Box>
            </section>
        </div>
    )
}

export default StackShow