import React, {
  useState,
  cloneElement,
  ElementType,
  isValidElement,
} from "react";
import { Button, Flex, Text } from "@pancakeswap-libs/uikit";

import useI18n from "hooks/useI18n";
import UnlockButton from "components/UnlockButton";

// import getExternalLinkProps from "../../util/getExternalLinkProps";
// import StyledButton from "./StyledButton";
// import { ButtonProps, scales, variants } from "./types";

import {
  HeaderWrapper,
  // Logo,
  // LayoutWrapper,
  StyledImage,
  LnkNav,
  NavItem,
  Addition,
} from "./Header.styled";

const Header = (): JSX.Element => {
  const [requestedApproval, setRequestedApproval] = useState(false);
  const TranslateString = useI18n();
  // const {
  //   startIcon,
  //   endIcon,
  //   external,
  //   className,
  //   isLoading,
  //   disabled,
  //   children,
  //   ...rest
  // } = props;
  // const internalProps = external ? getExternalLinkProps() : {};
  // const isDisabled = isLoading || disabled;
  // const classNames = className ? [className] : [];

  // if (isLoading) {
  //   classNames.push("pancake-button--loading");
  // }

  // if (isDisabled && !isLoading) {
  //   classNames.push("pancake-button--disabled");
  // }

  return (
    // <StyledButton
    //   $isLoading={isLoading}
    //   className={classNames.join(" ")}
    //   disabled={isDisabled}
    //   {...internalProps}
    //   {...rest}
    // >
    //   <>
    //     {isValidElement(startIcon) &&
    //       cloneElement(startIcon, {
    //         mr: "0.5rem",
    //       })}
    //     {children}
    //     {isValidElement(endIcon) &&
    //       cloneElement(endIcon, {
    //         ml: "0.5rem",
    //       })}
    //   </>
    // </StyledButton>
    <HeaderWrapper>
      <StyledImage
        src="/images/leftuplogo.png"
        alt="left up logo"
        width={163}
        height={140}
      />
      {/* <Logo /> */}

      <LnkNav style={{ marginRight: "400px" }}>
        <NavItem className="right">委托购买</NavItem>
        <NavItem className="right">提交出售</NavItem>
        <NavItem className="right">区块链域名</NavItem>
        <NavItem className="right">互联网域名</NavItem>
        <NavItem className="right active">首页</NavItem>
      </LnkNav>
      {/* <LayoutWrapper>
        
      </LayoutWrapper> */}
      <Addition>
        <UnlockButton mt="8px" mr="50px" width="120px" height="38px" />

        <Button scale="sm" mr="58px">
          {TranslateString(452, "使用教程")}
        </Button>
      </Addition>
    </HeaderWrapper>
  );
};

// Header.defaultProps = {
//   isLoading: false,
//   external: false,
//   variant: variants.PRIMARY,
//   scale: scales.MD,
//   disabled: false,
// };

export default Header;
