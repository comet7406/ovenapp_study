import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiSearch, HiViewGrid, HiViewList } from 'react-icons/hi';

function ProjectOption(props) {
    const view_type = [useRef(), useRef()];

    return (
        <div css={S.SToolbar}>
            <div css={S.Searchbarbox}>
                <HiSearch css={S.SearchIcon}/>
                <input type="text" placeholder='프로젝트 검색'/>
            </div>
            <div css={S.SButtongroup}>
                <input type="radio" id='view_type1' name="view_type" defaultChecked={true} ref={view_type[0]}/>
                <label css={S.SRadiobutton} for='view_type1'>
                    <HiViewList/>
                </label>
                <input type="radio" id='view_type2' name="view_type" ref={view_type[1]}/>
                <label css={S.SRadiobutton} for='view_type2'>
                    <HiViewGrid />
                </label>
            </div>
        </div>
    );
}

export default ProjectOption;