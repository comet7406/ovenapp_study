import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Layout from './components/Layout/Layout';
import * as S from "./styles/commons";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <Layout>
        <Routes>
          <Route path="/projects/my" />
          <Route path="/projects/share"/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
