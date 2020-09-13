import React from "react";
import axios from "axios";
import styled from "styled-components";

const Image = (props) => {

  const [imageUrl, setImageUrl] = React.useState()

  const getImageBlob = async (imageId) => {
    const response = await axios.get(
      `http://localhost:8080/images/${imageId}`,
      {
        responseType: "arraybuffer"
      }
    )
    const blob = new Blob([response.data], {type: "application/octet-stream"})
    const url = window.URL || window.webkitURL
    setImageUrl(url.createObjectURL(blob))
  }

  React.useEffect(() => {
    getImageBlob(props.image.imageId)
  }, [props.image.imageId])

  return (
    <ImageWrapper>
      {imageUrl !== null &&
      <>
        <ImageFile src={imageUrl} alt={props.image.caption}/>
        <Caption>{ props.image.caption }</Caption>
      </>
      }
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  width: 300px;
`
const ImageFile = styled.img`
  width: 100%;
`

const Caption = styled.p`
  text-align: center;
`

export default Image;
