import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function TitleContainer({ title, children }) {
    return (
        <div css={S.SPageheader}>
            <h2 css={S.SPagetitle}>{title}</h2>
            {children}
        </div>
    );
}

export default TitleContainer;