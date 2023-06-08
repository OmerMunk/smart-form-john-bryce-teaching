import {useState} from "react";
import AmountPresentor from "./AmountPresentor";
import AmountChanger from "./AmountChanger";


const aboutUsTitle: string = 'This is About Us Component'



const AboutUs = () => {

    const names=['bilbi', 'bat', 'gerev', 'mi', 'lochnes', 'vila', 'vilekula']

    const [amount, setAmount] = useState<number>(0)
    //TODO: write a state that its initial value is: bilbi

    const amountUpHandler = () => {
        setAmount(prevAmount => prevAmount + 1)
    }

    const amountDownHandler = () => {
        setAmount(prevAmount => prevAmount - 1)
    }


    return(
        <>
            <h1>
                {aboutUsTitle}
            </h1>
            <AmountPresentor amountToPresent={amount}  />
            <AmountChanger increaseAmount={amountUpHandler} decreaseAmount={amountDownHandler}/>
            {/*task 2: name presentor */}
            {/*task 3: name changer*/}
            {/*task 4: check equals will have a button that if the amount and the names length is the same: will alert success*/}
            <NamePresentor/>
            {/*<NameChanger/>*/}
            {/*<CheckEquals/>*/}



        </>

    )
}

export default AboutUs