import './textarea.scss'

import {useRef} from 'react'

const Textarea = ({text, onTextChange, onKeyDown, onKeyUp, placeholder, rows}) => {
    const input = useRef()

    const keyDown = e => {
        switch (e.keyCode) {
            case 9:
                e.preventDefault()
                const start = e.target.selectionStart
                onTextChange(e.target.value.substring(0, start) + '\t' + e.target.value.substring(start, e.target.value.length))
                setTimeout(() => {
                    input.current.selectionStart = input.current.selectionEnd = start + 1
                }, 50)
                break
            default:
                if (onKeyDown) onKeyDown(e)
        }
    }

    const keyUp = e => {
        if (onKeyUp) onKeyUp(e)
    }

    return (
        <textarea 
            ref={input}
            placeholder={placeholder} 
            className="textarea" 
            onChange={e => onTextChange(e.target.value)}
            onKeyUp={e => keyUp(e)}
            onKeyDown={e => keyDown(e)}
            rows={rows}
            value={text}
        ></textarea>
    )
}

export default Textarea;