import { useState,  useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
//actions
import { setImage } from '../../redux/actions';
//css
import styled from 'styled-components'; 

export const Cloudinary = () => {

  const [uploadedImage, setUploadedImage] = useState();
  const dispatch = useDispatch();

  const createWidget = () => {
    if ('cloudinary' in window) {
      return window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
          uploadPreset: 'pokemons',
          maxFiles: 1,
          sources: ['local', 'image_search', 'unsplash'],
          searchBySites: ['https://unsplash.com/', 'https://pixabay.com/'],
          resourceType: 'image',
          googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
          styles: {
            palette: {
              window: '#252525',
              windowBorder: '#aaa',
              tabIcon: 'rgb(255, 222, 0)',
              menuIcons: '#fff',
              textDark: '#fff',
              textLight: '#3B3B3B',
              inactiveTabIcon: '#ccc',
              sourceBg: 'rgba(0, 0, 0, 0.25)',
              action: 'rgb(255, 222, 0)',
              link: 'rgb(255, 222, 0)',
            },
            frame: {
              background: '#18181890',
            },
          },
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log(result);
            setUploadedImage(result.info.secure_url);
            dispatch(setImage(result.info.secure_url)); 
          }
        },
      );
    }
  };



  //widget config
  const widgetRef = useRef();

  useEffect(() => {
    const onIdle = () => {
      if (!widgetRef.current) {
        widgetRef.current = createWidget();
      }
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 0);
    }
  }, []);

  const openWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  return (
    <StyledDiv>
      <StyledDivButton>
        <StyledButtons onClick={openWidget} id="upload-button">Upload Button</StyledButtons>
      </StyledDivButton>
      {uploadedImage && 
      <UploadedImg 
      src={uploadedImage}
      alt="Uploaded Cloudinary"
      />}
    </StyledDiv>
  );
};


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDivButton = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 10px;
`

const StyledButtons = styled.div`
  background: none;
  cursor: pointer;
  border: 0.125em solid var(--main-hover);
  border-radius: 6px;
  padding: 5px;

  &:hover {
    color: #FFF;
    background-color: var(--main-hover);
    box-shadow: var(--button-hover) 0 8px 15px;
    transform: translateY(-2px);
  }
`

const UploadedImg = styled.img`
  width: 350px;
  height: 300px;
`