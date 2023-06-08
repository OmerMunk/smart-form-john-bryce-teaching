
interface ICheckerProps {
    amountToCheck: number;
    nameToCheck: string;
}

const Checker = (props: ICheckerProps) => {


    const checkEquals = () => {
        const namesLength: number = props.nameToCheck.split(' ').length;
        if (namesLength === props.amountToCheck){
            alert('Success')
        } else {
            alert(`FAIL: , names length is: ${namesLength} and amount is: ${props.amountToCheck}`)
        }
    }

    return (
        <>
        <h1>Checker</h1>
            <button onClick={checkEquals}>
                CHECK
            </button>
        </>
    )
}

export default Checker