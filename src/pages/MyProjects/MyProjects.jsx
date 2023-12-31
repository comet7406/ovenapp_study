import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import TitleContainer from '../../components/TitleContainer/TitleContainer';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';
import ProjectOption from '../../components/ProjectOption/ProjectOption';
import ProjectSidebar from '../../components/Sidebars/ProjectSidebar/ProjectSidebar';
import ProjectListBoard from '../../components/ProjectListBoard/ProjectListBoard';

function MyProjects(props) {
    return (
        <>
            <TitleContainer title={"프로젝트 대쉬보드"}>
                <ProjectOption />
            </TitleContainer>
            <ProjectContainer>
                <ProjectSidebar />
                <ProjectListBoard />
            </ProjectContainer>
        </>
    );
}

export default MyProjects;