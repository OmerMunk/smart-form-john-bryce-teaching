import Signup from "../../components/Signup/Signup";
import Button from "../../components/Button/Button";
import {useState} from "react";

const Home = () => {

    const [showSignup, setShowSignup] = useState<boolean>(false)

    const displaySignup = () => {
        setShowSignup(true)
    }

    const hideSignup = () => {
        setShowSignup(false)
    }

    return (
        <div>
            <h1>
                This is Home Component
            </h1>
            <Button
                buttonType={'primary'}
                onClick={displaySignup}
                text={'Sign Up'}/>
            {showSignup && <Signup hideSignup={hideSignup}/>}
        </div>

    )
}

export default Home