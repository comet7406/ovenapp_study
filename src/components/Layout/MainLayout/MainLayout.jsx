import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiSearch, HiViewGrid, HiViewList } from 'react-icons/hi'

const isSelected = true

function MainLayout({ children }) {
    return (
        <div>
            {children}
            {/* <div css={S.SPagemain}>
                <div css={S.SProjectMenuList}> 
                    <ul>
                        <li css={S.SProjectMenuListBar(isSelected)} >나의 프로젝트</li>
                        <li css={S.SProjectMenuListBar(!isSelected)}>나에게 공유된 프로젝트</li>
                    </ul>
                </div>
                <div css={S.SProjectContainer}>
                    <button></button>
                    <button></button>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

export default MainLayout;