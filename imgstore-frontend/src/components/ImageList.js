import React from "react";
import axios from "axios";
import Image from "./Image";
import styled from "styled-components";

const ImageList = (props) => {

  const [images, setImages] = React.useState([])

  const updateImageIds = async () => {
    const response = await axios.get("http://localhost:8080/images")
    setImages(response.data)
  }

  React.useEffect(() => {
    if (!props.isUploading) {
      updateImageIds()
    }
  }, [props.isUploading])

  return (
    <List>
      {images.map(image => (
        <ImageWapper  key={image.imageId}>
          <Image image={image}/>
        </ImageWapper>
      ))}
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ImageWapper = styled.div`
  padding: 10px
`

export default ImageList
