
interface INamePresentorProps {
    nameToPresent: string
}

const NamePresentor = (props: INamePresentorProps) => {
    return (
        <>
            <h3>
                I am name presentor
            </h3>
            <p>
                Amount is: {props.nameToPresent}
            </p>
        </>
    )
}

export default NamePresentor