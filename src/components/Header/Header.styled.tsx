import styled from "styled-components";
import { Text, Heading, Link, Image } from "@pancakeswap-libs/uikit";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  right: 0;
  height: 54px;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 1px solid #f0f0f0;

  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
`;

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
