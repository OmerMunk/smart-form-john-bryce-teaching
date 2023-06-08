import {useState} from "react";
import AmountPresentor from "./AmountPresentor";
import AmountChanger from "./AmountChanger";


const aboutUsTitle: string = 'This is About Us Component'



const AboutUs = () => {

    const [amount, setAmount] = useState<number>(0)

    const amountUpHandler = () => {
        setAmount(prevAmount => prevAmount + 1)
    }


    return(
        <>
            <h1>
                {aboutUsTitle}
            </h1>
            <AmountPresentor amountToPresent={amount}  />
            <AmountChanger changeAmount={amountUpHandler}/>



        </>

    )
}

export default AboutUs