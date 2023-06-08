import {useState} from "react";

interface INameChangerProps {
    nameAdder: (stringToAdd: string) => void;
    namesToAdd: string[]
}

const NameChanger = (props: INameChangerProps) => {
    const [amountNamesAdded, setAmountNamesAdded] = useState<number>(1)

    const nameAddHandler = () => {
        if (amountNamesAdded < props.namesToAdd.length){
            props.nameAdder(props.namesToAdd[amountNamesAdded])
            setAmountNamesAdded(prevState => prevState + 1)
        } else {
            alert('No more name man!')
        }
    }

    return (
        <>
            <h2>
                I am name changer
            </h2>
            <button onClick={nameAddHandler}>
                One more name please!
            </button>
        </>
    )
}

export default NameChanger