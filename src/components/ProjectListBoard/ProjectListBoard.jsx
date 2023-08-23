import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiPlusCircle } from 'react-icons/hi';

function ProjectListBoard(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SButtonGroup}>
                <button css={S.SButton}>모두 선택</button>
                <div>
                    <HiPlusCircle />
                    <button css={S.SButton}>새로운 프로젝트 만들기</button>
                </div>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default ProjectListBoard;