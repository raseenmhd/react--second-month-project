import React from 'react'
import { styled } from 'styled-components';

function siderbar() {
  return (
    <>
        <Wrapper>
            <Header>
                <NavLeft>
                    <NavItems>
                        <NavItem>
                            <ImageContainer>
                                <Image src={require("../../../Assets/images/bell.svg").default} />
                            </ImageContainer>
                        </NavItem>
                        <NavItem>
                            <ImageContainer>
                                <Image src={require("../../../Assets/images/chat.svg").default}/>
                            </ImageContainer>
                        </NavItem>
                    </NavItems>
                </NavLeft>
                <NavRight>
                    <NavProfile>
                        <NavProfileImage src={require("../../../Assets/images/Group 38.jpg")}/>
                    </NavProfile>
                    <NavArrow>
                        <NavArrowImage src={require("../../../Assets/images/Settings-1-black.svg").default}/>
                    </NavArrow>
                </NavRight>
            </Header>
            <NotificationBar>
                <TopSection>
                    <Heading>
                        Hot SellingProducts
                    </Heading>
                    <MoreButton>
                        See all
                    </MoreButton>
                </TopSection>
                <ProductsList>
                    <ProductsItem>
                        <ProductImageContainer>
                            <ProductImage src={require("../../../Assets/images/Buy Bronx Wooden Dominoes from the Next UK online shop 1.jpg")}/>
                        </ProductImageContainer>
                        <ProductContentText>
                            Dominoes Coffee Table Game
                            <Label>
                                50k Sales
                            </Label>
                        </ProductContentText>
                        <ProductPrice>
                            <PriceTag src={require("../../../Assets/images/$28.jpg")}/>
                        </ProductPrice>
                    </ProductsItem>
                    <ProductsItem>
                        <ProductImageContainer>
                            <ProductImage src={require("../../../Assets/images/The Top 20 BEST Gifts For RV Enthusiasts - Living Bite Sized 1.jpg")}/>
                        </ProductImageContainer>
                        <ProductContentText>
                            Photive Wirless Speakers
                            <Label>
                                44k Sales
                            </Label>
                        </ProductContentText>
                        <ProductPrice>
                            <PriceTag src={require("../../../Assets/images/$28.jpg")}/>
                        </ProductPrice>
                    </ProductsItem>
                    <ProductsItem>
                        <ProductImageContainer>
                            <ProductImage src={require("../../../Assets/images/Tot 55_ Korting Urbanears Multiroom Speakers Baggen, Stammen Of Lotsen Voor Vanaf €89,95 Bij IBOOD - DealsTracker_nl 1.jpg")}/>
                        </ProductImageContainer>
                        <ProductContentText>
                            Urbanears Lotson Speakers
                            <Label>
                                42k Sales
                            </Label>
                        </ProductContentText>
                        <ProductPrice>
                            <PriceTag src={require("../../../Assets/images/$28.jpg")}/>
                        </ProductPrice>
                    </ProductsItem>
                    <ProductsItem>
                        <ProductImageContainer>
                            <ProductImage src={require("../../../Assets/images/Aeo URBANEARS Plattan 2 Headphones 1.jpg")}/>
                        </ProductImageContainer>
                        <ProductContentText>
                            Platttan 2 HeadPhones
                            <Label>
                                38k Sales
                            </Label>
                        </ProductContentText>
                        <ProductPrice>
                            <PriceTag src={require("../../../Assets/images/$28.jpg")}/>
                        </ProductPrice>
                    </ProductsItem>
                    <ProductsItem>
                        <ProductImageContainer>
                            <ProductImage src={require("../../../Assets/images/Emergency Solar Hand Crank Radio @ Sharper Image 2.jpg")}/>
                        </ProductImageContainer>
                        <ProductContentText>
                            Solar Hand Crank Radio
                            <Label>
                                30k Sales
                            </Label>
                        </ProductContentText>
                        <ProductPrice>
                            <PriceTag src={require("../../../Assets/images/$28.jpg")}/>
                        </ProductPrice>
                    </ProductsItem>
                </ProductsList>
            </NotificationBar>
            <ContactSection>
                <HelpText>
                    What can We help you with?
                </HelpText>
                <ChatSection>
                    <LeftContainer>
                        <ChatText>
                            Chat with us
                        </ChatText>
                        <ArrowIcon>
                            <IconImage src={require("../../../Assets/images/Settings-1-blue.svg").default}/>
                        </ArrowIcon>
                    </LeftContainer>
                    <RightContainer>
                        <CommunicationSectionImage>
                            <Communicationimage src={require("../../../Assets/images/businessman-svgrepo-com (3) 1.svg").default}/>
                        </CommunicationSectionImage>
                    </RightContainer>
                </ChatSection>
            </ContactSection>
        </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
    width: 35%;
    background-color: #f1f1f3;
    padding: 50px 55px;
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavLeft = styled.div`
    width: 20%;
`;
const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavItem = styled.li`
    width: 25px;
`;
const ImageContainer = styled.a`
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const NavRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavProfile = styled.div`
    width: 50px;
`;
const NavProfileImage = styled.img`
    display: block;
    width:100%;
    border-radius: 15px;
`;
const NavArrow = styled.div`
    width: 20px;
    margin-left: 5px;
`;
const NavArrowImage = styled.img`
    display: block;
    width: 100%;
`;
 const NotificationBar = styled.div`
 `;
 const TopSection = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 `;
 const Heading = styled.h2`
    font-size: 27px; 
    font-family: 'Poppins-medium';
 `;
 const MoreButton = styled.a`
    font-size: 16px; 
    font-family: 'Poppins-medium';
 `;
const ProductsList = styled.div`
`;
const ProductsItem = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 30px 0 35px;
`;
const ProductImageContainer = styled.li`
    width: 20%;
`;
const ProductImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;

`;
const ProductContentText = styled.li`
    width : 60%;
    font-size: 15px;
    font-family: 'Poppins-medium';
`;
const Label = styled.span`
    display: block;
    font-size: 12px;
    font-family: 'Poppins-bold';
`;
const ProductPrice = styled.li`
    margin-bottom: 15px
`;
const PriceTag = styled.img`
    display: block;
    width: 100%;
`;
const ContactSection = styled.div`
    width: 90%;    
    margin: 60px 0 0px 20px;
`;
const HelpText = styled.h3`
     font-size: 19px;
     font-family: 'Poppins-medium';
     max-width: 180px;
     
`;
const ChatSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const LeftContainer = styled.div`
    width : 50%;
    display: flex;
    align-items: center;
    &:hover{
        transform:translateX(10px);
        cursor: pointer;
    } 
`;
const ChatText = styled.a`
    color: #40448e;
    font-size: 17px;
    font-family: 'Poppins-medium';
`;
const ArrowIcon = styled.div`
    transform: rotate(-90deg);
    width: 20px;
`;
const IconImage = styled.img`
    width: 100%;
    display: block;
`;                  
const RightContainer = styled.div`
    width:  50%;
`;
const CommunicationSectionImage = styled.div`
    width: 140px;
`;
const Communicationimage = styled.img`
    display: block;
    width: 100%;
`;

 
export default siderbar;
