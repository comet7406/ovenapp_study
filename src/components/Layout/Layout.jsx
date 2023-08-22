import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import HeaderLayout from './HeaderLayout/HeaderLayout'
import MainLayout from './MainLayout/MainLayout';

function Layout({ children }) {
    return (
        <div css={S.SLayout}>
            <HeaderLayout />
            <MainLayout />
            {children}
        </div>
    );
}

export default Layout;