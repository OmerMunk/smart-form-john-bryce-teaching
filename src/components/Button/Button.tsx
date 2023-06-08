/**
 * Components imports
 */
import './Button.css';

/**
 * Components definitions (interfaces, variables, functions)
 */
interface IButtonProps {
    buttonType: 'primary' | 'secondary' | 'reject';
    onClick: () => void;
    text: string;
}


/**
 * Component UI / Render - what we see
 * @param props
 */
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