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

export const SButton = css`
    font-size: 14px;
    height: 34px;
    &:first-of-type {
        background-color: white;
        border: 1px solid #dbdbdb;
    }

    &:last-child {

        color: white;
        background-color: #3498DB;
        border: 1px solid #357ebd;
    }
`;