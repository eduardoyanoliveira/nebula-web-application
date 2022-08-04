import React from 'react'
import { ISubject } from '../../application/Domain/Entities/ISubject';
import { useStaleWhileRevalidate } from '../../application/hooks/useStaleWhileRevalidate';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import Button from '../../components/Buttons/Button';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import SearchInputComponent from '../../components/Inputs/SearchInput';
import { Container, Title, Header } from './styles';

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);


function SubjectsPage() {

    const { data: subjectData, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpAxiosGetClient, 10);

    return (
        <Container>
            <Title>
                Tópicos:
            </Title>
            <Header>
                <SearchInputComponent  margin='0 25px 0 0'/> 
                <Button text={'Novo'} maxWidth={'200px'} backgroundColor={ButtonColors.primaryGradient}/>
            </Header>
            {
                subjectData?.map((item) => {
                    return <h3>{item.name}</h3>
                })
            }
        </Container>
    );
};

export default SubjectsPage;