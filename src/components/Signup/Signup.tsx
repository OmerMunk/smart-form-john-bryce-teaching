import Button from "../Button/Button";

interface ISignupProps {
    hideSignup: () => void
}

const Signup = (props: ISignupProps) => {

    /**
     * TODO: task2:
     * implement for each input, a useState
     * example: const [firstName, setFirstName] = useState<string>('');
     * after that, make sure that each time an input is changing, the state changes also
     */


    const handleSignup = () => {
        //todo: add the logic for signup a user

    }

    /**
     * TODO: task 5:
     * make a new component:
     * Input (with directory, tsx, and css)
     * that does all the logic inside (the input, the label, the onChange)
     *
     * so instead of:
     *              <label
     *                 htmlFor={'signup-first-name-input'}
     *             >
     *                 First Name
     *             </label>
     *              <input
     *                 // onChange={(event)=>{setState(event.target.value)}}
     *                 id={'signup-first-name-input'}
     *                 type='text'
     *             />
     *
     *
     *  we will see:
     *
     *              <Input type='firstName' setState=??? />
     *
     *
     *
     *
     */


    return (
        <>
            <h2>This is Signup</h2>

            <label
                htmlFor={'signup-first-name-input'}
            >
                First Name
            </label>
            <input
                // onChange={(event)=>{setState(event.target.value)}}
                id={'signup-first-name-input'}
                type='text'
            />
            {/*
            TODO: Task 1
            add here, 4 more inputs: last name, email, password, and confirm password
            *notice: each input has its own type, and its own label and id
            */}


            {/*
            TODO: Task 3
            add a button that its text is: 'submit'
            that calls the function handleSignup
            that is meant to validate the data, and id its valid, add user to the users
            what is a valid data? email is correct, passwords are the same, names are not empty
            */}

            {/*
            TODO: Task 4
            add a button (that is only for tests, we will delete it)
            that if we click on it, it logs all the users in the db
            REMEMBER: import the users.
            */}




            <Button
                buttonType={'reject'}
                onClick={props.hideSignup}
                text={'Close'}/>
        </>
    )

}

export default Signup