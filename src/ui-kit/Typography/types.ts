import React from 'react';

export type TextBaseProps = {
  weight?: 'regular' | 'medium';
  size?: number;
  height?: number;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: TextColor;
  children: React.ReactNode;
};

export type TextColor = 'white' | 'blue' | 'black' | 'gray';
