import React from 'react';
import { Box, Media, Content, Image, Level, Button, Icon } from 'reactbulma';

export const ButtonInverted = () => {
  return (
    <div className="block">
      <Button color="primary" state="inverted">Inverted</Button>
      <Button color="info" state="inverted">Inverted</Button>
      <Button color="success" state="inverted">Inverted</Button>
      <Button color="danger" state="inverted">Inverted</Button>
    </div>
  );
};

export default ButtonInverted;
