import React from 'react';
import {StyledText} from './styles';
import {TextBaseProps} from './types';

export type TextProps = TextBaseProps & {as?: keyof JSX.IntrinsicElements};

export const Text: React.FC<TextProps> = StyledText;
