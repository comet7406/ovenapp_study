import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { HiCog, HiPlusCircle } from 'react-icons/hi';
import { AiOutlineCaretDown } from "react-icons/ai";
import BoardImg from '../../../src/assets/BoardImg.png';

function ProjectListBoard(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SButtonGroup}>
                <button css={S.SButtonLeft}>모두 선택</button>
                <button css={S.SButtonRight}>
                    <HiPlusCircle css={S.SHiPlusIcon}/>
                    <span css={S.SAddButton}>새로운 프로젝트 만들기</span>
                </button>
            </div>
            <div css={S.SBoardLayout}>
                <div css={S.SBoardContainer}>
                    <div css={S.SBouardHeader}>
                        <input type="checkbox" />
                        <button css={S.SButtonIconGroup}>
                            <HiCog />
                            <AiOutlineCaretDown css={S.SCaretIcon}/>
                        </button>
                    </div>
                    <img css={S.SBoardImg} src={BoardImg}/>
                    <div css={S.SBoardFooterBox}>
                        <a css={S.SBoardTitle} href="">Mobile_row</a>
                        <div>
                            <div>
                                
                            </div>
                            {/* <button></button> */}
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default ProjectListBoard;