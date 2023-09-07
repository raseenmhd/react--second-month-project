import React from 'react'
import { styled } from "styled-components";
// import Select from 'react-select/dist/declarations/src/Select';
function Summary() {
  return (
    <>
        <SummaryContainer>
            <Header>
                <SearchBar>
                    <SearchBarInput placeholder='Search here'/>
                    <SearchBarIcon>
                        <SearchIcon src={require("../../Assets/images/search.svg").default}/>
                    </SearchBarIcon>
                </SearchBar>
            </Header>
            <StatisticsContainer>
                <StatisticsTop>
                    <StatisticsHeading>
                        Statistics
                    </StatisticsHeading>
                    <MonthlyStatements>
                        <MonthOptions>
                            6 Months
                        </MonthOptions>
                        <MonthOptions>
                            3 Months
                        </MonthOptions>
                        <MonthOptions>
                            1 Month
                        </MonthOptions>
                        <MonthOptions>
                            1 year
                        </MonthOptions>
                    </MonthlyStatements>
                </StatisticsTop>
                <StatisticsMain>
                    <LeftContainer>
                        <TopBox>
                            <DeliveryIcon>
                                <DeliveryIconImage src={require("../../Assets/images/Group 49.svg").default} />
                            </DeliveryIcon>
                            <ContentText>
                                Awaiting Delivery
                            </ContentText>
                            <OrderCount>
                                150k Orders
                            </OrderCount>
                        </TopBox>
                        <BottomBox>
                            <DeliveryIcon>
                                <DeliveryIconImage src={require("../../Assets/images/Group 49.svg").default} />
                            </DeliveryIcon>
                            <ContentText>
                                Awaiting Delivery
                            </ContentText>
                            <OrderCount>
                                150k Orders
                            </OrderCount>
                        </BottomBox>
                    </LeftContainer>
                    <RightContainer>
                        <SaleGraphImage src={require("../../Assets/images/Group 26.svg").default}/>
                    </RightContainer>
                </StatisticsMain>
            </StatisticsContainer>
            <MarkrtingContainer>
                <AddSection>
                    <AddContentText>
                        Create Ads for Your Business
                    </AddContentText>
                    <AddBusinessImage>
                        <BusinessImage src={require("../../Assets/images/Group 52.svg").default}/>
                    </AddBusinessImage>
                </AddSection>
                <PaymentsSection>
                    <PaymentsText>
                        Secure Your Payments
                    </PaymentsText>
                    <PaymentImageSection>
                        <PaymentImage src={require("../../Assets/images/businessman-svgrepo-com (2) 2.svg").default}/>
                    </PaymentImageSection>
                </PaymentsSection>
            </MarkrtingContainer>
        </SummaryContainer>
    </>
  )
}
const SummaryContainer =styled.section`
    padding: 35px 60px ;
    width: 45%; 
`;
const Header = styled.header`
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
const StatisticsContainer = styled.section`
    margin-top: 70px;
`;
const StatisticsTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StatisticsHeading = styled.h2`
    font-size: 27px;
    font-family: 'Poppins-medium';
`;
const MonthlyStatements = styled.select`
    font-size: 16px;
    width: 20%;
    font-family: 'Poppins-medium';
`;
const MonthOptions = styled.option`
`;
const StatisticsMain = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px
`;
const LeftContainer = styled.div`
    width: 45%;
   
`;
const TopBox = styled.div`
    background-color: #f4e7e4;
    padding: 30px 20px;
    border-radius: 15px;
    margin-bottom: 40px;
`;
const DeliveryIcon = styled.div`
    width: 50px;
`;
const DeliveryIconImage = styled.img`
    display: block;
    width: 100%;
`;
const ContentText = styled.h4`
    font-size: 18px;
    font-family: 'Poppins-medium';
`;
const OrderCount = styled.h5`
    font-size: 20px;
    font-family: 'Poppins-bold';
`;
const BottomBox = styled.div`
    background-color: #e6f4ff;
    padding: 30px 20px;
    border-radius: 15px;
`;
const RightContainer = styled.div`
    width: 50%;
`;
const SaleGraphImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;
`;
const MarkrtingContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
`;
const AddSection = styled.div`
    width: 45%;
    margin-left: 20px;
`;
const AddContentText = styled.p`
    font-size: 18px;
    font-family: 'Poppins-medium';
    max-width: 180px;
    line-height: 35px;
`;
const AddBusinessImage = styled.div`
    width: 100px;
    margin: 15px 0 0 40px;
`;
const BusinessImage = styled.img`
    display: block;
    width: 100%;
`;
const PaymentsSection = styled.div`
    width: 45%;
    margin-left: 20px;
`;
const PaymentsText = styled.p`
    font-size: 18px;
    font-family: 'Poppins-medium';
    max-width: 160px;
`;
const PaymentImageSection = styled.div`
    width: 110px;
    margin-top: 124px;
`;
const PaymentImage = styled.img`
    display: block;
    width: 100%;
`;
export default Summary;
