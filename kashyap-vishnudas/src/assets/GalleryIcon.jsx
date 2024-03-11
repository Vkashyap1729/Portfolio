import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ImageHolder from './ImageHolder';
import { GalleryIcon } from '../../assets/Svg/GalleryIcon';
const ImageBox = ({
  image,
  setImage,
  handleImageUpload,
  index,
  altText,
  icon,
  iconText,
}) => {
  return (
    <StyledImageBox image={image} onClick={handleImageUpload}>
      {!image ? (
        <>
          {icon}
          <Typography variant="caption1" component="div">
            {iconText}
          </Typography>
        </>
      ) : (
        <ImageHolder
          src={image}
          altText={altText}
          handleDelete={() => setImage()}
          handleEdit={handleImageUpload}
          index={index}
        />
      )}
    </StyledImageBox>
  );
};
ImageBox.defaultProps = {
  icon: <GalleryIcon />,
  iconText: 'Upload image here',
};

const StyledImageBox = styled(Box)(
  ({ image }) => `
    padding: ${
      image ? '4px' : '16px'
    }; // Conditionally apply padding based on questionImage presence
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${
        image ? '' : '#F4F6F8'
      }; // Conditionally apply background color on hover
    }
    border-radius: 10px;
    text-align: center;
    height: 145px;
    cursor: pointer;
    position: relative;
    border: 1px solid #DFE3E8;
  `
);

export default ImageBox;
