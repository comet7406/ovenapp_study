import { css } from "@emotion/react";

// export const SLayout = css`
//     margin: 0 auto;
//     width: 1170px;
//     padding: 0px 15px;
// `;

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
