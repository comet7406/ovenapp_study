import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import TitleContainer from '../../components/TitleContainer/TitleContainer';
import ProjectOption from '../../components/ProjectOption/ProjectOption';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';
import ProjectSidebar from '../../components/Sidebars/ProjectSidebar/ProjectSidebar';

function MyShareProjects(props) {
    return (
        <>
            <TitleContainer title={"프로젝트 대쉬보드"}>
                <ProjectOption />
            </TitleContainer>
            <ProjectContainer>
                <ProjectSidebar />

            </ProjectContainer>
        </>
    );
}

export default MyShareProjects;