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
            {/*
            TODO: Task 1: make NameChanger component to be able not only to add names, but also to remove names
            TODO: Task 2: add a css file to each component, and style every element that is presented, make the app look less ugly (or pretty) - add classes and style everything
            TODO: Task 3: make another 2 buttons in AmountChanger.tsx, that will do the same as the current buttons, but will increase/decrease 5 each click.
            TODO: Task 4: make the 'names' array into an useState(instead of just a variable like now), and add, anywhere and anyway you want - the ability to take a text input from the user, and add name to the end of the array
            TODO: Task 5: prepare for next lesson: add another Route in app.tsx and NavLink in Navigator.tsx, the if you click on it, you will move to another page called /x-mix-drix. and make a component the called XMixDrix.tsx, what will just present 3X3 board with 9 squares(use css to get it done)
            */}


        </>

    )
}

export default AboutUs