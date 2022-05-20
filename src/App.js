import './App.css';
const axios = require('axios')

const { useState } = require('react')

function App() {

  const [files, setFiles] = useState([])

  const onChange1 = (e) => {
    let file = e.target.files[0]
    console.log(file)
    file.document_code = 'OTH01001'
    setFiles([...files, file])
  }

  const onChange2 = (e) => {
    let file = e.target.files[0]
    file.document_code = 'OTH01002'
    setFiles([...files, file])
  }

  const onChange3 = (e) => {
    let file = e.target.files[0]
    file.document_code = 'OTH01003'
    setFiles([...files, file])
  }

  const onChange4 = (e) => {
    let file = e.target.files[0]
    file.document_code = 'OTH01004'
    setFiles([...files, file])
  }

  const handleUpload = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      if (files.length) {
        console.log('append...')
        // formData.append('attachments', files[0], 'OTH01001')
        // formData.append('attachments', files[1], 'OTH01002')
        // formData.append('attachments', files[2], 'OTH01003')
        // formData.append('attachments', files[3], 'OTH01004')
        for (let file of files) {
          console.log('file -> ', file)
          formData.append('attachments', file, file.document_code)
        }
      }
      console.log(formData)

      formData.append('ams_std_id', 79)

      // await axios.post(`http://localhost:8081/admission/attachment`, formData)
      await axios.post(`
      https://sxc34irdu7.execute-api.ap-southeast-1.amazonaws.com/dev/uxt/admission/attachments`, formData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <input type="file" onChange={onChange1} />
      <input type="file" onChange={onChange2} />
      <input type="file" onChange={onChange3} />
      <input type="file" onChange={onChange4} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}

export default App;
