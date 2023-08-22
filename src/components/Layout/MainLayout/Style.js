import { css } from "@emotion/react";

export const SLayout = css`
    margin: 0 auto;
    width: 1170px;
    padding: 0px 15px;
`;

export const SPageheader = css`
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 20px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 9px;
    width: 100%;
    height: 80px;
`;

export const SPagetitle = css`
    margin-top: 20px;
    font-size: 36px;
`;

export const SToolbar = css`
    display: flex;
    align-items: center;
    margin-top: 25px;
    height: 34px;
`;

export const Searchbarbox = css`
    position: relative;
    display: flex;
`;

export const SearchIcon = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 93%;
    font-size: 18px;
`;

export const Searchbar = css`
    padding: 6px 12px;
    width: 226px;
    height: 34px;
`;

export const SButtongroup = css`
    margin-left: 20px;
`;

export const SRadiobutton = css`
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 6px 12px;
    font-size: 14px;
    width: 40px;
    height: 34px;
`;

export const SRadiohidden = css`
    display: none;
`;

export const SPagemain = css`
    display: flex;
    width: 100%;
    height: 558px;
`;

export const SProjectMenuList = css`
    width: 25%;
    height: 100%;
`;

export const SProjectMenuListBar = (isSelected) => css`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    height: 40px;
    color: #333;
    ${isSelected && "background-color: #3498db; color: #fff"};
`;

export const SProjectContainer = css`
    border: 1px solid #dbdbdb;
    width: 75%;
`;
