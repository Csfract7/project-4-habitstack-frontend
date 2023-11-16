import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Form, Button } from 'react-bulma-components'
import HabitCard from '../components/HabitCard'


const HabitShow = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const habit = props.habit
    const habitItem = habit?.find((p) => p._id === id) 

    const newForm = {
        name: "",
        description: "",
        type: "",
        time: "",
        place: "",
        completed: "",
        image: "",
    }
    
    //State form data and edit mode
    const [form, setForm] = useState(newForm)
    const [editing, setEditing] = useState(false);
    const {Input, Field, Label} = Form;

    //Effect to update the form data when habitItem changes
    useEffect(() => {
        if (habitItem) {
          setForm(habitItem);
        }
      }, [habitItem]);

    //handleChange function - Update the form state on each input change
    const handleChange = (e) => { 
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleEdit = () => {
        setEditing(true);  
        //toggles the edit state when user click edit
      };

    //handle form for updating
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.updateHabit(form, id)
        setForm(newForm)
        setEditing(false);
        navigate(`/habit/${id}`) 
        //optional direct where you want
    }

    const removeHabit = (e) => {
        e.preventDefault()
        props.deleteHabit(id)
        navigate("/habit")
    }

    return (
        <div>
            <div className="show-centered-container">
            <HabitCard habit={habitItem}/>
            </div>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit habit </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder={habitItem?.name || 'Name'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder={habitItem?.description || 'Description'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Type</Label>
                            <select
                                name="type"
                                value={form?.type}
                                placeholder={habitItem?.type || 'New or Established'}
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
                                placeholder= {habitItem?.time || '8 A.M.'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Place</Label>
                            <Input 
                                name="place"
                                value={form?.place}
                                placeholder={habitItem?.place || 'Bedroom'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Completed</Label>
                            <Input 
                                name="completed"
                                value={form?.completed}
                                placeholder={habitItem?.completed || '5'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder={habitItem?.image || 'Image'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>
                        {" "}
                        <Button color="danger" onClick={removeHabit}>
                            Delete
                        </Button>
                    </form>
                </Box>
            </section>
        </div>
    )
}

export default HabitShow