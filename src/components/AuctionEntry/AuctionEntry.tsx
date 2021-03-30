import React, { cloneElement, ElementType, isValidElement } from "react";
import useI18n from "hooks/useI18n";
import { StyledLink } from "./AuctionEntry.styled";

const AuctionEntry = (): JSX.Element => {
  const TranslateString = useI18n();

  return (
    <StyledLink href="https://docs.pancakeswap.finance/lottery-1">
      {TranslateString(610, "Read more")}
    </StyledLink>
  );
};

export default AuctionEntry;
