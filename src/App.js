import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import * as S from "./styles/commons";
import MainLayout from './components/Layout/MainLayout/MainLayout';
import HeaderLayout from './components/Layout/HeaderLayout/HeaderLayout';
import MyProjects from './pages/MyProjects/MyProjects';
import MainContainer from './components/Containders/MainContainer/MainContainer';
import MyShareProjects from './pages/MyShareProjects/MyShareProjects';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <HeaderLayout />
        <MainContainer>
          <Routes>
            <Route path="/projects/my" element={<MyProjects />}/>
            <Route path="/projects/share" element={<MyShareProjects />}/>
          </Routes>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
