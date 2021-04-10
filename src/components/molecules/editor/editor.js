import './editor.scss'

import {useState} from 'react'
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';

const Editor = ({onExport}) =>  {
    const [note, setNote] = useState('dd')

    return (
        <div className="editor">
            <div className="editor__controls">
                <Button onClick={() => onExport(note)}>Export</Button>
            </div>
            <Textarea 
                placeholder="Start writing" 
                text={note} 
                onTextChange={setNote}
                rows={30}
            />
        </div>
    )
}

export default Editor