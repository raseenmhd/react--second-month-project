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
                <ProductsListSection>
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
                </ProductsListSection>
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
    @media (max-width: 1280px){
        padding: 120px 60px 90px;
        width: 40%;
      }
    max-width: 1080px){
        padding: 120px 40px 50px;
        width: 40%;
    }
    @media (max-width: 980px){
    padding: 120px 30px 90px;
    }
    @media (max-width: 760px){
        width: 53%;
    }
    @media (max-width: 640px){
        width: 40%;
    }
    @media (max-width: 640px){
        padding: 120px 30px 0px;
    }
    @media (max-width: 480px){
        display: none;
    }
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px){
        justify-content: end;
    }
`;
const NavLeft = styled.div`
    width: 20%;
    @media (max-width: 980px){
        width: 25%;
    }
`;
const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const NavItem = styled.li`
    width: 25px;
    &:hover{
        cursor: pointer;
    } 
`;
const ImageContainer = styled.a`
    @media (max-width: 640px){
        display: block;
        width: 25px;
        
    }
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const NavRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px){
        display: none;
    }
    &:hover{
        cursor: pointer;
    }
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
    @media (max-width: 1320px){
        font-size: 24px;
    }
    @media (max-width: 1080px){
        font-size: 19px;
    }
    @media (max-width: 980px){
        font-size: 18px;
    }
    @media (max-width: 640px){
        font-size: 20px;
    }
 `;
 const MoreButton = styled.a`
    font-size: 16px; 
    font-family: 'Poppins-medium';
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 640px){
        display: none;
    }
 `;
const ProductsListSection = styled.div`
`;
const ProductsList = styled.ul`
`;
const ProductsItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 37px 0 35px;
    @media (max-width: 640px){
        display: block;
    }
`;
const ProductImageContainer = styled.div`
    width: 20%;
    @media (max-width: 980px){
        width: 23%;
    }
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 640px){
        width: 45%;
    }
    
`;
const ProductImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;

`;
const ProductContentText = styled.p`
    width : 60%;
    font-size: 15px;
    font-family: 'Poppins-medium';
    @media (max-width: 760px){
        width: 55%;
    }
    @media (max-width: 640px){
        width: 100%;
        margin: 10px 0;
    }
`;
const Label = styled.span`
    display: block;
    font-size: 12px;
    font-family: 'Poppins-bold';
    @media (max-width: 760px){
        display: none;
    }
`;
const ProductPrice = styled.div`
    margin-bottom: 15px;
    @media (max-width: 640px){
        width: 30%;
    }
`;
const PriceTag = styled.img`
    display: block;
    width: 100%;
`;
const ContactSection = styled.div`
    width: 90%;    
    margin: 60px 0 0px 20px;
    @media (max-width: 1380px){
        margin: 0px 0 0px 20px;
    }
    @media (max-width: 980px){
        margin: 0;
        width: 100%;
    }
    @media (max-width: 640px){
        display: none;
      }
`;
const HelpText = styled.h3`
     font-size: 19px;
     font-family: 'Poppins-medium';
     max-width: 180px;
     @media (max-width: 1080px){
        font-size: 17px;
    }
    @media (max-width: 980px){
        margin-bottom: 30px;
        margin-top: 100px;
    }
`;
const ChatSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 980px){
        display: block;
    }
    
`;
const LeftContainer = styled.div`
    width : 50%;
    display: flex;
    align-items: center;
    &:hover{
        transform:translateX(10px);
        cursor: pointer;
    } 
    @media (max-width: 980px){
        width: 100%;
        margin-bottom: 30px;
        justify-content: center;
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
    width: 150px;
    @media (max-width: 980px){
        margin-left: 50px;
    }
`;
const Communicationimage = styled.img`
    display: block;
    width: 100%;
`;

 
export default siderbar;
