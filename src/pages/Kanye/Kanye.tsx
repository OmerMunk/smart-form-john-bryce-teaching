/**
Component Imports
 */

import axios from "axios";
import Button from "../../components/Button/Button";
import {useState} from "react";
import Box from "../../components/Box/Box";


/**
 * Component Definitions
 */
const API_URL: string = 'https://api.kanye.rest'
const Kanye = () => {

    const [quote, setQuote] = useState<string>('')


    const callAPI =  async () => {
        const response = await axios.get(API_URL);
        setQuote(response.data.quote)
    }

    return (
        <>
            <Button buttonType={"primary"} onClick={callAPI} text={'Call Kanye'}/>
            <Box color={'gray'} title={'Kanye West Quote'}>
                {quote}
            </Box>
        </>
    )
}

export default Kanye;