import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiSearch, HiViewGrid, HiViewList } from 'react-icons/hi'

const isSelected = true

function MainLayout(list) {
    return (
        <div css={S.SLayout}>
            <div css={S.SPageheader}>
                <h2 css={S.SPagetitle}>프로젝트 대쉬보드</h2>
                <div css={S.SToolbar}>
                    <div css={S.Searchbarbox}>
                        <HiSearch css={S.SearchIcon}/>
                        <input css={S.Searchbar} type="text" placeholder='프로젝트 검색'/>
                    </div>
                    <div css={S.SButtongroup}>
                        <label css={S.SRadiobutton} for='view_type1'>
                            <input css={S.SRadiohidden} type="radio" id='view_type1'/>
                            <HiViewList/>
                        </label>
                        <label css={S.SRadiobutton} for='view_type2'>
                            <input css={S.SRadiohidden} type="radio" id='view_type2'/>
                            <HiViewGrid />
                        </label>
                    </div>
                </div>
            </div>
            <div css={S.SPagemain}>
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
            </div>
        </div>
    );
}

export default MainLayout;