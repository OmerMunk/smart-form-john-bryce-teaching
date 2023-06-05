import React, {useState} from 'react';
import './styles/styles.css'
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";

function App() {
    const [amount, setAmount] = React.useState<number>(0);
    const [myString, setMyString] = useState<string>('a');

    const increment = () => {
        setAmount(prevState => prevState + 1);
    };

    const decrement = () => {
        setAmount(prevState => prevState - 1);
    }

    const addA = () => {
        setMyString(prevState => prevState + 'a')
    }

    const removeA = () => {
        setMyString(prevState => prevState.slice(0, prevState.length - 1))
    }
    return (
        <>
            <button>Home</button>
            <button>About us</button>
            <button>Contact us</button>
            <Box color={'red'} width={'100px'} height={'100px'}>
                <h1>Box 1</h1>
            </Box>

            <Box color={'blue'} width={'50px'} height={'50px'}/>

            <Box title={`Amount: ${amount.toString()}`} color={'white'}/>

            <Box title={`String: ${myString}`} color={'white'}/>

            <Button buttonType={"primary"} onClick={increment} text={'Click Me!'}/>
            <Button buttonType={"secondary"} onClick={decrement} text={'Click Me2!'}/>

            <Button buttonType={'primary'} onClick={addA} text={'Add "a"'}/>
            <Button buttonType={'secondary'} onClick={removeA} text={'remove "a"'}/>
        </>
    );
}

export default App;
