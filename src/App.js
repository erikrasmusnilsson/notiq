import './App.css'

import FileDownload from 'js-file-download'
import Editor from './components/molecules/editor'
import notiq from './providers/notiq'

function App() {
  const onEditorExport = async content => {
    try {
      const response = await notiq.post("/notes", {
        filename: "output.pdf",
        content
      }, {
        responseType: "blob"
      })
      FileDownload(response.data, "test.pdf")
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="App">
      <Editor onExport={onEditorExport}/>
    </div>
  );
}

export default App;
