import {useState} from "react";
import AmountPresentor from "./AmountPresentor";
import AmountChanger from "./AmountChanger";
import NamePresentor from "./NamePresentor";
import NameChanger from "./NameChanger";
import Checker from "./Checker";


const aboutUsTitle: string = 'This is About Us Component'


const AboutUs = () => {

    const names: string[] = ['bilbi', 'bat', 'gerev', 'mi', 'lochnes', 'vila', 'vilekula']

    const [amount, setAmount] = useState<number>(0)

    const [name, setName] = useState<string>(names[0])

    const amountUpHandler = () => {
        setAmount(prevAmount => prevAmount + 1)
    }

    const amountDownHandler = () => {
        setAmount(prevAmount => prevAmount - 1)
    }

    const nameAdder = (stringToAdd: string) => {
        setName(prevName => prevName + ' ' + stringToAdd)
    }


    return (
        <>
            <h1>
                {aboutUsTitle}
            </h1>
            <AmountPresentor amountToPresent={amount}/>
            <AmountChanger increaseAmount={amountUpHandler} decreaseAmount={amountDownHandler}/>
            <NamePresentor nameToPresent={name}/>
            <NameChanger nameAdder={nameAdder} namesToAdd={names}/>
            <Checker amountToCheck={amount} nameToCheck={name}/>


        </>

    )
}

export default AboutUs