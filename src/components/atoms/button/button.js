import './button.scss'

const Button = ({children, onClick}) => {
    return (
        <a onClick={e => {
            e.preventDefault()
            onClick()
        }} className="button">
            {children}
        </a>
    )
}

export default Button;