import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    background-color: #383d40;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    width: 1170px;
    height: 50px;
`;

export const SLogo = css`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const SBrandname = css`
    color: #fff;
    font-size: 22px;
`;

export const SVersion = css`
    display: inline-block;
    margin-top: -15px;
    margin-left: 2px;
    font-size: 11px;
    font-weight: 400;
    color: #aaa;
`;

export const SProfile = css`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: -15px;
    padding: 15px;
    width: 124px;
    height: 50px;
    cursor: pointer;
    &:hover {
        background-color: #0000001a;
    }
`;

export const SProfileimg = css`
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
`;

export const SProfilename = css`
    margin: 0px 10px 0px 35px;
    font-size: 14px;
    color: rgba(255,255,255,.9);
    &:hover {
        color: white;
    }
`;


export const SCaret = css`
    & * {
        color: rgba(255,255,255,.9);
        &:hover {
        color: white;
    }
    }
`;

export const SDropdownmenu = css`
    position: absolute;
    top: 100%;
    left: -40px;
    z-index: 1000;
    border: 1px solid rgba(0,0,0,.15);
    padding: 5px 0px;
    font-size: 14px;
    min-width: 160px;
    width: 164px;
    height: 148px;
    background-color: rgba(255, 255, 255,.95);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
`;

export const SMenulist = css`
    padding: 6px 22px;
    height: 32px;
`;

export const SDivider = css`
    margin: 5px 0px;
    border: 1px solid #eee;
`;

export const SLogout = css`
    padding: 6px 22px;
    height: 32px;
`;