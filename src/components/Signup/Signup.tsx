import Button from "../Button/Button";

interface ISignupProps {
    hideSignup: () => void
}

const Signup = (props: ISignupProps) => {
    return (
        <>
            <h2>This is Signup</h2>
            <Button
                buttonType={'reject'}
                onClick={props.hideSignup}
                text={'Close'}/>
        </>
    )

}

export default Signup