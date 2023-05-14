import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AddProjectForm} from './components/Project/AddProjectForm';
import {Result} from './components/Project/Result';
import {route} from './constants/route';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={route.addProject} element={<AddProjectForm />} />
      <Route path={route.result} element={<Result />} />
    </Routes>
  );
};
