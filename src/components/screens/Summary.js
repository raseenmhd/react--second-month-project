import React,{useState}from 'react'
import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import Chart from "react-apexcharts";

function Summary() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectchange = (event) => {
    setSelectedOption(event.target.value);
  };
  const data = {
    series: [
      {
        name: "Income",
        data: [1.7,0.97,1.2,0.72,1.45,3.1,0.11,0.8,1.5,1.8],
      },
      {
        name: "Saving",
        data: [0.9,1.9,1.0,2.2,1.3,1.4,2.6,1.5,1.5,1.8],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 8,
          opacity: 0.2,
        
        },
        toolbar: {
          show: true, 
        },
      },
      colors: ["lightblue", "darkblue"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        min: 0.01,
        max: 3.30,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const data1 = {
    series: [
      {
        name: "Income",
        data: [1.7,0.97,3.2,2.72,0.45,3.1,0.9,3.8,0.5,2.9],
      },
      {
        name: "Saving",
        data: [0.4,1.9,1.0,2.2,3.3,1.4,0.6,1.5,3.5,1.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: true,
        },
      },
      colors: ["lightblue", "darkblue"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        min: 0.01,
        max: 3.30,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const data2 = {
    series: [
      {
        name: "Income",
        data: [1.7,0.97,3.9,2.72,0.45,3.1,0.9,2.8,0.5,0.9],
      },
      {
        name: "Saving",
        data: [3.4,1.9,1.0,0.2,3.3,1.7,3.6,1.5,2.5,1.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: true,
        },
      },
      colors: ["lightblue", "darkblue"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        min: 0.01,
        max: 4,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const data3 = {
    series: [
      {
        name: "Income",
        data: [2.2,2.97,0.2,3.72,2.45,0.1,1.11,2.8,0.5,3.8],
      },
      {
        name: "Saving",
        data: [0.9,3.9,2.0,1.2,3.3,0.4,2.6,3.5,0.5,3.8],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: true,
        },
      },
      colors: ["lightblue", "darkblue"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        min: 0.01,
        max: 4,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const getChartData = () => {
    switch (selectedOption) {
      case "one-month":
        return data;
      case "3-months":
        return data1;
      case "6-months":
        return data2;
      case "1-year":
        return data3;
      default:
        return data; 
    }
  };
  return (
    <>  
        <Helmet>
            <title>Summary</title>
        </Helmet>
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
                    <SelectOption value={selectedOption} onChange={handleSelectchange}>
                        <Options value="one-month" >
                        1 Month
                        </Options>
                        <Options value="3-months">3 Month</Options>
                        <Options value="6-months">6 Months</Options>
                        <Options value="1-year">1 Year</Options>
                    </SelectOption>
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
                        
                            <Chart
                             options={getChartData().options} 
                             series={getChartData().series}
                             type="line"
                             height={350}
                            />
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
    padding: 45px 60px ;
    width: 45%; 
    @media (max-width: 1280px){
      padding: 120px 60px;
      width: 60%;
    }
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
    margin-top: 63px;
    @media (max-width: 1380px){
        margin-top: 55px;
    }
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
const SelectOption = styled.select`
    font-size: 16px;
    width: 20%;
    font-family: 'Poppins-medium';
    @media (max-width: 1380px){
        width: 25%;
    }
`;
const Options = styled.option`
`;
const StatisticsMain = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
`;
const LeftContainer = styled.div`
    width: 46%;
`;
const TopBox = styled.div`
    background-color: #f4e7e4;
    padding: 25px 20px;
    border-radius: 15px;
    margin-bottom: 30px;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    };
    @media (max-width: 1380px){
        padding: 20px;
        margin-bottom: 25px;
    }
    
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
    padding: 25px 20px;
    border-radius: 15px;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    };
    @media (max-width: 1380px){
        padding: 20px;
        margin-bottom: 25px;
    }
`;
const RightContainer = styled.div`
    width: 50%;
    height: 340px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
    &:hover{
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    };
    @media (max-width: 1380px){
      height: 320px;
    }
`;

const MarkrtingContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1380px){
        margin-top: 50px;
    }
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
