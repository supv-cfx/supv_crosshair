import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Props } from '../typings';

export const AnimatedButton: React.FC<Props> = ({
  iconAwesome,
  text,
  onClick,
  color,
  args,
  isDisabled
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      disabled={isDisabled}
      size='xs'
      variant='subtle'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rightIcon={
        <FontAwesomeIcon
          icon={ iconAwesome }
          shake={ isHovered }
          style={{ transition: 'transform 0.5s' }}
        />
      }
      color={ color }
      onClick={() => onClick(args)}
    >
      {text}
    </Button>
  );
};