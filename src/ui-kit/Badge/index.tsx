import React from 'react';
import {Text} from '../Typography/Text';
import {BadgeWrapper} from './styles';
import {BadgeProps} from './types';

export const Badge: React.FC<BadgeProps> = ({isActive, text, ...props}) => {
  return (
    <BadgeWrapper $isActive={isActive} {...props}>
      <Text size={16} height={20} color={isActive ? 'blue' : 'white'}>
        {text}
      </Text>
    </BadgeWrapper>
  );
};
