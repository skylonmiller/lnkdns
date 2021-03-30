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

import { HeaderWrapper, LayoutWrapper, StyledImage } from "./Header.styled";

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
      <LayoutWrapper>
        <UnlockButton mt="8px" width="200px" height="48px" />
      </LayoutWrapper>
      <Flex alignItems="flex-end" justifyContent="right">
        <Button scale="sm" mr="8px">
          {TranslateString(452, "Max")}
        </Button>
      </Flex>
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
