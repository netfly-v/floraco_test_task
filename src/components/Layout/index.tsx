import React, {PropsWithChildren} from 'react';
import {StyledLayout, Main} from './styles';

export const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <StyledLayout>
      <Main>{children}</Main>
    </StyledLayout>
  );
};
