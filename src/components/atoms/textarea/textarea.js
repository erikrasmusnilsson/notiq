import './textarea.scss'

const Textarea = ({text, onTextChange, placeholder, rows}) => {
    return (
        <textarea 
            placeholder={placeholder} 
            className="textarea" 
            onChange={e => onTextChange(e.target.value)}
            rows={rows}
        >{text}</textarea>
    )
}

export default Textarea;