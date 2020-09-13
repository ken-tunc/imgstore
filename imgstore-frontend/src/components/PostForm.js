import React from "react";
import axios from "axios";
import styled from "styled-components";

const PostForm = (props) => {

  const [file, setFile] = React.useState()
  const [caption, setCaption] = React.useState()

  const handleFileChange = (event) => setFile(event.target.files[0])
  const handleCaptionChange = (event) => setCaption(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.setIsUploading(true)

    const params = new FormData()
    params.append("binary", file)
    params.append("caption", caption)

    try {
      await axios.post(
        "http://localhost:8080/images",
        params,
        {
          headers: {
            "Content-Type": 'multipart/form-data'
          }
        })
    } finally {
      props.setIsUploading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <Input type="file" onChange={handleFileChange}/>
      </label>
      <br/>
      <label>
        Caption:
        <Input type="text" onChange={handleCaptionChange}/>
      </label>
      <br/>
      <Input type="submit"/>
    </Form>
  )
}

const Form = styled.form`
  text-align: center;
`

const Input = styled.input`
  margin-bottom: 20px;
`

export default PostForm
