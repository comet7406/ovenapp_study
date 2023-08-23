import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiSearch, HiViewGrid, HiViewList } from 'react-icons/hi';

function ProjectOption(props) {
    return (
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
    );
}

export default ProjectOption;