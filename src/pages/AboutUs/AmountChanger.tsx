interface IAmountChangerProps {
    increaseAmount: () => void;
    decreaseAmount: () => void;
}

const foo = () => {
    console.log('Hi')
}

const AmountChanger = (props: IAmountChangerProps) => {
    return (
        <>
            <h3>
                I am amount changer
            </h3>
            <button onClick={props.increaseAmount}>
                MORE AMOUNT PLEASE
            </button>

            <button onClick={props.decreaseAmount}>
                LESS AMOUNT PLEASE
            </button>
        </>
    )
}

export default AmountChanger