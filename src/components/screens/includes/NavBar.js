import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
function NavBar() {
  return (
    <>
     <Wrapper>
        <Header>
            <NavLogo>
                <Logo src={require("../../../Assets/images/logo.svg").default} />
            </NavLogo>
            <NavItems>
                <Navitem to="/" classname={({isActive})=>(isActive ? "active" : "")}>
                    Summary 
                    <NavItemImage src={require("../../../Assets/images/Book.svg").default}/>
                </Navitem>
                <Navitem to="products">
                    Products
                    <NavItemImage src={require("../../../Assets/images/slide.svg").default}/>
                </Navitem>
                <Navitem to="/Hotselling">
                    Hot Selling
                    <NavItemImage src={require("../../../Assets/images/fire.svg").default}/>
                </Navitem>
                <Navitem to="/ManageOrder">
                    Manage Order
                    <NavItemImage src={require("../../../Assets/images/oder.svg").default}/>
                </Navitem>
                <Navitem to="/Payments">
                    Payments
                    <NavItemImage src={require("../../../Assets/images/Wallet.svg").default}/>
                </Navitem>
                <Navitem to="/Settings">
                    Settings
                    <NavItemImage src={require("../../../Assets/images/Settings.svg").default}/>
                </Navitem>
            </NavItems>
            <NavBottom>
                <NavBottomBox>
                    <NavBottomBoxImage>
                        <BottomImg src={require("../../../Assets/images/Group 11.svg").default}/>
                    </NavBottomBoxImage>
                    <NavBottomContent>
                        Power up your Business
                    </NavBottomContent>
                    <BottomContainer>
                        <Content>
                            Go Pro!
                        </Content>
                        <ArrowImage>
                            <ArrowImg src={require("../../../Assets/images/Settings-1.svg").default}/>
                        </ArrowImage>
                    </BottomContainer>
                </NavBottomBox>
            </NavBottom>
        </Header>
     </Wrapper>
    </>
  )
}
export default NavBar;
const Wrapper = styled.section`
    width : 20%;
    border-right : 2px solid #d3d3d3;
`;
const Header = styled.header`
    padding: 50px 45px;
`;
const NavLogo = styled.a`
    display: block;
    width: 100%;
`;
const Logo = styled.img`
    display: block;
`;
const NavItems = styled.div`
    padding: 30px 0;
`;
const Navitem = styled(NavLink)`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #5a5a5a;
    margin-top: 40px;
    font-family: 'Poppins-Medium';
    &:hover {
        filter: invert(8%) sepia(33%) saturate(6876%) hue-rotate(235deg)
          brightness(90%) contrast(124%);
      }
      &.active {
        filter: invert(8%) sepia(33%) saturate(6876%) hue-rotate(235deg)
          brightness(90%) contrast(124%);
          border-right: 2px solid ;
          padding-right: 20px; 
      }
`;
const NavItemImage = styled.img`
    display: block;
    &:hover {
        color: #3522ff;
      }
    &.active {
        color: #3522ff;
    }
`;
const NavBottom = styled.div`
    background-color: #f1f1f3;
    padding: 25px 30px;
    border-radius: 15px;
    margin-top: 180px;
    text-align: center;
`;
const NavBottomBox =styled.div`
`;
const NavBottomBoxImage = styled.div`
    width: 100%;
`;
const BottomImg = styled.img`
    display: block;
    width: 100%;
`;
const NavBottomContent = styled.p`
    font-size: 20px;
    font-family: 'Poppins-bold';
    margin: 5px 0 10px;
`;
const BottomContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333889;
    border-radius: 15px;
    padding: 15px 10px;
    &:hover{
        transform:translateX(6px);
        cursor: pointer;
    }
`;
const Content =styled.h4`
    color: #fff;
    font-size: 15px;
    font-family: 'Poppins-medium';
`
const ArrowImage =styled.div`
    transform : rotate(-90deg);
    width: 16px;
    margin-left: 5px;
   
`;
const ArrowImg =styled.img`
    display: block;
    width: 100%;
`;