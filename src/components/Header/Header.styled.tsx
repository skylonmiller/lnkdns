import styled from "styled-components";
import { Text, Heading, Link, Image } from "@pancakeswap-libs/uikit";
// import logoPic from "./images/leftuplogo.png";

// top: 0;
//   left: 0;
//   width: 100%;
//   right: 0;
//   height: 54px;
//   background-color: #fff;
//   border-bottom: 1px solid #f0f0f0;

//   margin: 0 auto 40px;
//   display: flex;
//   flex-direction: column;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

// export const Logo = styled.a.attrs({
//   href: "/",
// })`
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: block;
//   width: 117px;
//   height: 23px;
//   background: url(${logoPic});
//   background-size: contain;
// `;

export const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled(Image)`
  align-self: left;
  padding-top: 16px;
  top: 13px;
  float: left;
  width: 117px;
  height: 23px;
`;

export const LnkNav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;
// background: green;
// background-color: red;

export const NavItem = styled.a`
  display: block;
  font-size: 17px;
  line-height: 56px;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #2873c9;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
