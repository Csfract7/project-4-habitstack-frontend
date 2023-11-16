import HabitForm from '../components/HabitForm'


const NewHabit = (props) => {
    return (
        <div>
            <section>
                <HabitForm createHabit={props.createHabit}/>
            </section>
        </div>
    )
}


export default NewHabit