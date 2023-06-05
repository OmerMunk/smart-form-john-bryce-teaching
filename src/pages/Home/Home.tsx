import Signup from "../../components/Signup/Signup";
import Button from "../../components/Button/Button";
import {useState} from "react";

const Home = () => {

    const [showSignup, setShowSignup] = useState<boolean>(false)

    return (
        <div>
            <h1>
                This is Home Component
            </h1>
            <Button
                buttonType={'primary'}
                onClick={() => {
                }}
                text={'Sign Up'}/>
            <Signup/>
        </div>

    )
}

export default Home