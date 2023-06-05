import './Button.css';

interface IButtonProps {
    buttonType: 'primary' | 'secondary' | 'reject';
    onClick: () => void;
    text: string;
}



const Button = (props: IButtonProps) => {
    return (
        <button
            className={`${props.buttonType}-button`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )

}

export default Button;