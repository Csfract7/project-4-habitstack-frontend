import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import { Link } from "react-router-dom";


const CalendarForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const calendar = props.calendar

    const newForm = {
        year: '',
        month: '',
        day: '',
        name: '',
        completed: '',

      }
    
    const [form, setForm] = useState(calendar)
    const { Input, Field, Label } = Form;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createCalendar(form)
        setForm(newForm)
        navigate("/calendar")
    }

    return (
        <div>
            
   
        </div>
    )
};

export default CalendarForm;

