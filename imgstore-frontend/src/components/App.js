import React from 'react';
import PostForm from "./PostForm";
import ImageList from "./ImageList";
import styled from "styled-components";

function App() {

  const [isUploading, setIsUploading] = React.useState(false)

  return (
    <div className="App">
      <Container>
        <Title>imgstore</Title>
        <PostForm setIsUploading={setIsUploading}/>
        {isUploading ? <p>uploading...</p> : null}
        <ImageList isUploading={isUploading}/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

export default App;
