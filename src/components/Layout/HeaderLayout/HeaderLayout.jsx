import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import { isMenuOpenState } from '../../../stores/MenuStore';
import profile from '../../../assets/profile.png';

function HeaderLayout(props) {
    const [ isOpen, setIsOpen ] = useRecoilState(isMenuOpenState);

    const handleMenuToggleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen)
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SLogo}>
                    <h1 css={S.SBrandname}>Oven</h1>
                    <span css={S.SVersion}>BETA</span>
                </div>
                <ul>
                    <li css={S.SProfile} onClick={handleMenuToggleClick}>
                        <span>
                            <img css={S.SProfileimg} src={profile} />
                        </span>
                        <span css={S.SProfilename}>comet</span>
                        <AiOutlineCaretDown css={S.SCaret}/>
                        {isOpen && (<ul css={S.SDropdownmenu}>
                            <li css={S.SMenulist}>프로젝트 대쉬보드</li>
                            <li css={S.SMenulist}>계정 설정하기</li>
                            <li css={S.SMenulist}>헬프데스크</li>
                            <li css={S.SDivider}></li>
                            <li css={S.SMenulist}>로그아웃</li>
                        </ul>)}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderLayout;