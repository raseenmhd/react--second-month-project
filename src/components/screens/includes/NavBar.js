import React, {useState}from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";


function NavBar() {
    const [navClose, setNavClose] = useState(false);
    return (
    <>
     <Wrapper>
        <Header>
            <Menu onClick={() => setNavClose(!navClose)}>
                <MenuIcon src={require("../../../Assets/images/menu.svg").default} />
            </Menu>
            <NavLogo>
                <Logo src={require("../../../Assets/images/logo.svg").default} />
            </NavLogo>
            <NavContainer className={navClose ? "navclose" : ""}>
            <Menu onClick={() => setNavClose(!navClose)}>
                <MenuIcon src={require("../../../Assets/images/Cross.svg").default} />
            </Menu>
            <NavItems>
                <Navitem to="/" classname={({isActive})=>(isActive ? "active" : "")}>
                    Summary 
                    <NavItemImage src={require("../../../Assets/images/Book.svg").default}/>
                </Navitem>
                <Navitem to="/products" classname={({isActive})=>(isActive ? "active" : "")} >
                    Products
                    <NavItemImage src={require("../../../Assets/images/slide.svg").default}/>
                </Navitem>
                <Navitem to="/Hotselling" classname={({isActive})=>(isActive ? "active" : "")}>
                    Hot Selling
                    <NavItemImage src={require("../../../Assets/images/fire.svg").default}/>
                </Navitem>
                <Navitem to="/ManageOrder" classname={({isActive})=>(isActive ? "active" : "")}>
                    Manage Order
                    <NavItemImage src={require("../../../Assets/images/oder.svg").default}/>
                </Navitem>
                <Navitem to="/Payments" classname={({isActive})=>(isActive ? "active" : "")}>
                    Payments
                    <NavItemImage src={require("../../../Assets/images/Wallet.svg").default}/>
                </Navitem>
                <Navitem to="/Settings" classname={({isActive})=>(isActive ? "active" : "")}>
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
            </NavContainer>
            <ProfileIcon>
                <ProfileIconImage src={require("../../../Assets/images/Group 38.jpg")} />
            </ProfileIcon>
        </Header>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
    width : 20%;
    border-right : 2px solid #d3d3d3;
    @media (max-width: 1280px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #d3d3d3;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
        width: 100%;
      }
`;
const Header = styled.header`
    padding: 50px 45px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
    @media (max-width: 1280px) {
        width: 100%;
        padding: 22px 40px;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
      }
`;
const NavLogo = styled.a`
    display: block;
    width: 100%;
    @media (max-width: 1280px) {
        width: 18%;
    }
    @media (max-width: 760px)  {
    width: 26%;
    }
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const NavItems = styled.div`
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
    @media (max-width: 1380px) {
        font-size: 20px;
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
    @media (max-width: 1380px) { 
        padding: 25px 20px;
        margin-top: 150px;
    }
`;
const NavBottomBox =styled.div`
`;
const NavBottomBoxImage = styled.div`
    width: 100%;
    margin: 0 auto;
    
`;
const BottomImg = styled.img`
    display: block;
    width: 100%;
`;
const NavBottomContent = styled.p`
    font-size: 20px;
    font-family: 'Poppins-bold';
    margin: 5px 0 10px;
    @media (max-width: 1380px) {
        font-size: 20px;
    }
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
const ProfileIcon = styled.div`
  display: none;
  width: 45px;
  @media (max-width: 1280px) {
    display: block;
  }
`;
const ProfileIconImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;
const Menu = styled.div``;
const MenuIcon = styled.img`
    display: none;
    width: 25px;
    height: 25px;
    @media (max-width: 1280px) {
        display: block;
    }
`;
const NavContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding-top: 30px;
    transition: 200ms ease-in-out;
    background: #fff;
    transform: translateX(0);
    @media (max-width: 1280px) {
        padding: 35px 40px;
        transform: translateX(-100%);
        position: fixed;
        z-index: 3;
        overflow-y: auto;
        top: 0;
        left: 0;
        border-right: 1px solid #000;
        background: #fff;
        width: 30%;
    }
    &.navclose {
        transform: translateX(0);
    }
`;
export default NavBar;