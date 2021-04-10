import './editor.scss'

import {useState} from 'react'
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';

const Editor = ({onExport}) =>  {
    const [note, setNote] = useState('')
    const [ctrlIsDown, setCtrlIsDown] = useState(false)

    const onEditorKeyDown = (e) => {
        if (e.keyCode === 17) {
            setCtrlIsDown(true)
            console.log("ctrl down")
        } else if (e.keyCode === 69 && ctrlIsDown) {
            console.log("export")
            onExport()
        }
    }

    const onEditorKeyUp = (e) => {
        if (e.keyCode === 17) {
            console.log("ctrl up")
            setCtrlIsDown(false)
        }
    }

    return (
        <div className="editor">
            <div className="editor__controls">
                <Button onClick={() => onExport(note)}>Export</Button>
            </div>
            <Textarea 
                placeholder="Start writing" 
                text={note} 
                onTextChange={setNote}
                onKeyDown={onEditorKeyDown}
                onKeyUp={onEditorKeyUp}
                rows={30}
            />
        </div>
    )
}

export default Editor