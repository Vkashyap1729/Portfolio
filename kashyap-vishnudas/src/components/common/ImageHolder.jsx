import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, MenuItem, Menu, Collapse } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

ImageHolder.defaultProps = {
  src: '',
  altText: 'Image',
  handleDelete: null,
  handleEdit: null,
  index: 0,
};
export default function ImageHolder({
  src,
  altText,
  handleDelete,
  handleEdit,
  index,
}) {
  console.log(src);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [imageSrc, setImageSrc] = useState(false);
  const [previewImage, setPreviewImage] = useState([]);
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  const imgHeight = 115;
  const imgWidth = 115;

  useEffect(() => {
    const isBase64 = (str) => {
      try {
        return btoa(atob(str)) == str;
      } catch (err) {
        return false;
      }
    };

    const loadImageSrc = () => {
      if (src instanceof File) {
        console.log('in if base 64');
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageSrc(e.target.result);
        };
        reader.readAsDataURL(src);
      } else {
        setImageSrc(src);
      }
    };

    loadImageSrc();
  }, [src]);

  const handleImagePreviewClose = () => {
    setPreviewImage(null);
    setIsHovered(false);
    setShowPreviewImage(false);
  };
  const handleImagePreview = (optionImage) => {
    console.log(optionImage);
    setIsHovered(false);
    setPreviewImage(optionImage);
    setShowPreviewImage(true);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsHovered(false);
  };
  const fileInputRef = useRef(null);
  const handelEditClick = () => {
    fileInputRef.current.click();
  };
  const handlePreviewImage = (src) => {
    // console.log("clicking image preview")
    setPreviewImage(true);
  };
  const handleClosePreview = () => {
    console.log('closing');
    setPreviewImage(false);
  };
  const handlleImageDelete = (index) => {
    setAnchorEl(null);
    handleDelete(index);
  };
  const handleImageEdit = (index, file) => {
    setAnchorEl(null);
    handleEdit(index, file);
  };

  const [isHovered, setIsHovered] = useState(false);
  const handelOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handelOnMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    // <Collapse in={true} timeout={2000}>
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
        position: 'relative',
      }}
      onMouseEnter={handelOnMouseEnter}
      onMouseLeave={handelOnMouseLeave}
    >
      <img
        onClick={() => handleImagePreview(imageSrc)}
        // onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
        src={imageSrc}
        style={{
          maxHeight: `${imgHeight}px`,
          cursor: 'pointer',
          maxWidth: `${imgWidth}px`,
          display: 'inline',
        }}
        alt={altText}
      />

      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            p: 2,
            bgcolor: '#00000080',
            top: 0,
            left: 0,
            borderRadius: '10px',
            opacity: '50%',
            cursor: 'pointer',
          }}
        >
          <Box
            onClick={() => handleImagePreview(imageSrc)}
            sx={{
              width: `${imgWidth}px`,
              height: `${imgHeight}px`,
              ml: 3,
            }}
          ></Box>
          <IconButton
            sx={{
              position: 'absolute',
              top: '-7px',
              right: '-10px',
              color: '#FFFFFF',
            }}
            disableRipple={true}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
      )}
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem key={'Edit'} onClick={handelEditClick}>
          <label htmlFor={`opt${index}Image`} style={{ cursor: 'pointer' }}>
            Edit
            <input
              ref={fileInputRef}
              id={`opt${index}Image`}
              type="file"
              accept="image/*"
              style={{
                display: 'none',
                position: 'absolute',
                left: '-9999px', // Move the input field off-screen
              }}
              onChange={(e) => handleImageEdit(index, e.target.files[0])}
            />
          </label>
        </MenuItem>
        <MenuItem key={'Delete'} onClick={(e) => handlleImageDelete(index)}>
          Delete
        </MenuItem>
      </Menu>
      <ImagePreview
        source={previewImage}
        open={showPreviewImage}
        onCloseImagePreview={handleImagePreviewClose}
      />
    </Box>
    // </Collapse>
  );
}
