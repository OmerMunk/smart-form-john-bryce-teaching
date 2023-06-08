import {useState} from "react";
import AmountPresentor from "./AmountPresentor";
import AmountChanger from "./AmountChanger";


const aboutUsTitle: string = 'This is About Us Component'



const AboutUs = () => {

    const [amount, setAmount] = useState<number>(0)

    return(
        <>
            <h1>
                {aboutUsTitle}
            </h1>
            <AmountPresentor/>
            <AmountChanger/>



        </>

    )
}

export default AboutUs