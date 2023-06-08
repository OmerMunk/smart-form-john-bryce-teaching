
interface IAmountPresentorProps {
    amountToPresent: number
}

const AmountPresentor = (props: IAmountPresentorProps) => {
    return (
        <>
            <h3>
                I am amount presentor
            </h3>
            <p>
                Amount is: {props.amountToPresent}
            </p>
        </>
    )
}

export default AmountPresentor