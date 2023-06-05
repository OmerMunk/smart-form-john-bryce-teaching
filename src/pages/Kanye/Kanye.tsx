import axios from "axios";
import Button from "../../components/Button/Button";

const API_URL: string = 'https://api.kanye.rest'
const Kanye = () => {

    const callAPI = () => {
        axios.get(API_URL)
    }

    return (
        <>
            <h1>
                Kanye
            </h1>
            <Button buttonType={"primary"} onClick={callAPI} text={'Call Kanye'}/>
        </>
    )
}

export default Kanye;