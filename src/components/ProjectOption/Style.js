import { css } from "@emotion/react";

export const SToolbar = css`
    display: flex;
    align-items: center;
    margin-top: 25px;
    height: 34px;
`;

export const Searchbarbox = css`
    position: relative;
    margin-right: 20px;

    & > input {
        transition: all 0.1s ease;
        border: 1px solid #dbdbdb;
        outline: none;
        border-radius: 3px;
        padding: 6px 12px;
        width: 226px;
        height: 34px;
        &:focus {
            border-color: #3498DB;
            box-shadow: 0px 0px 10px 0px #3f9fDf77;
        }
    }
`;

export const SearchIcon = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 93%;
    font-size: 18px;
`;

export const SButtongroup = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > input {
        display: none;
    }

    & > input:checked + label {
        background-color: #e6e6e6;
        box-shadow: inset 0px 0px 10px 0px #bbb;
    }
`;

export const SRadiobutton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    font-size: 18px;
    width: 40px;
    height: 34px;

    &:first-of-type {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    &:last-child {
        border-left: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 39px;
    }
    cursor: pointer;
`;

export const SRadiohidden = css`
    display: none;
`;