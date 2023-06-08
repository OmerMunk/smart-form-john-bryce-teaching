interface IAmountChangerProps {
    changeAmount: () => void
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
            <button
            onClick={props.changeAmount}
            >
                MORE AMOUNT PLEASE
            </button>
        </>
    )
}

export default AmountChanger