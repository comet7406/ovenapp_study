import { css } from "@emotion/react";

export const SLayout = css`
    width: 75%;
    padding-left: 15px;
`;

export const SButtonGroup = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SButtonLeft = css`
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 6px 12px;
    font-size: 14px;
    height: 34px;
`;

export const SButtonRight = css`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #357ebd;
    border-radius: 3px;
    padding: 6px 12px;
    font-size: 14px;
    height: 34px;
    color: white;
    background-color: #3498DB;

`;

export const SHiPlusIcon = css`
    align-items: center;
    font-size: 18px;
    & * {
        position: absolute;
        color: white;
    }
`;

export const SAddButton = css`
    color: white;
`;

export const SBoardLayout = css`
    margin-top: 16px;
    padding: 0px 15px;
`;

export const SBoardContainer = css`
    width: 200px;
    height: 350px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 6px;
`;

export const SBouardHeader = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
`;

export const SButtonIconGroup = css`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;;
    
    & * {
        color: #888;
    }
`;

export const SCaretIcon = css`
    font-size: 10px;
`;

export const SBoardImg = css`
    display: flex;
    justify-content: center;
    width: 186px;
`;

export const SBoardFooterBox = css`
    margin-top: 6px;
    padding: 9px;
    width: 186px;
    height: 164px;
    background-color: #dbdbdb;
`;

export const SBoardTitle = css`
    font-size: 24px;
    text-decoration: none;
    color: #3498db;
`;