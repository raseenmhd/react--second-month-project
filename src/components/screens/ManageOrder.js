import React from 'react'
import { styled } from 'styled-components';
import { Helmet } from 'react-helmet';

function ManageOrder() {
  return (
    <>  
        <Helmet>
            <title>ManageOrder</title>
        </Helmet>
        <Header>
            <SearchBar>
                <SearchBarInput placeholder='Search here'/>
                <SearchBarIcon>
                    <SearchIcon src={require("../../Assets/images/search.svg").default}/>
                </SearchBarIcon>
            </SearchBar>
            <MainContainer>
                <Heading>Coming Soon...!</Heading>
            </MainContainer>
        </Header>
        
    </>
  )
}
const Header = styled.header`
    padding: 45px 60px ;
    width: 45%; 
`;
const SearchBar = styled.div`
    background-color: #d9d9d9;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;
const SearchBarInput = styled.input`
    width: 95%;
    font-size: 15px;
    font-family: 'Poppins-Medium';
`;
const SearchBarIcon = styled.div`
    width: 20px;
`;
const SearchIcon = styled.img`
    display: block;
    width: 100%;
`;
const MainContainer = styled.section`
    text-align: center;
    margin-top: 100px;
`;
const Heading = styled.h1`
    font-size: 30px;
    font-family: 'Poppins-Medium';
`;

export default ManageOrder
