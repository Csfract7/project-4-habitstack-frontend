import StackForm from '../components/StackForm'


const NewStack = (props) => {
    const allHabits = props.allHabits;
    return (
        <div>
            <section>
                <StackForm createStack={props.createStack} allHabits={allHabits}/>
            </section>
        </div>
    )
}


export default NewStack