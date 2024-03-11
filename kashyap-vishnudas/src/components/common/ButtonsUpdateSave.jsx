import { Button, Stack } from '@mui/material';
import { useState } from 'react';

const ButtonsUpdateSave = ({ update, save }) => {
  const [isSave, setIsSave] = useState(false);

  const handleSave = () => {
    save();
  };

  const handleUpdate = () => {
    setIsSave(true);
    update();
    // setIsSave(false);
  };

  return (
    <Stack direction="row" justifyContent="space-between" p={2}>
      <Button variant="contained" size="small" onClick={handleUpdate}>
        Update
      </Button>
      <Button
        variant={isSave ? 'contained' : 'disabled'}
        size="small"
        color="success"
        onClick={handleSave}
      >
        Save
      </Button>
    </Stack>
  );
};

ButtonsUpdateSave.defaultProps = {
  save: () => {},
  update: () => {},
};

export default ButtonsUpdateSave;
