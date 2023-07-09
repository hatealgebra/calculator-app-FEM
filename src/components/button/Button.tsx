import{ CalcButton } from './button.styled'


interface ButtonProps {
    children: string | number;
    handleClick: (value: string | number)  => void;
}

const Button = ({children, handleClick}: ButtonProps) => {

    return (
        <CalcButton onClick={() => handleClick(children)}>{children}</CalcButton>
    )

}

export default Button