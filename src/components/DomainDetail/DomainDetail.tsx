import React, {
  useState,
  useCallback,
  cloneElement,
  ElementType,
  isValidElement,
} from "react";
// import useI18n from "hooks/useI18n";
// import { useApprove } from "hooks/useApprove";
// import { StyledLink } from "./DomainDetail.styled";

const DomainDetail = (): JSX.Element => {
  // const [requestedApproval, setRequestedApproval] = useState(false);

  // const handleApprove = useCallback(async () => {
  //   try {
  //     setRequestedApproval(true);
  //     await onApprove();
  //     setRequestedApproval(false);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [onApprove]);

  // const renderApprovalOrStakeButton = () => {
  //   return isApproved ? (
  //     <StakeAction
  //       stakedBalance={stakedBalance}
  //       tokenBalance={tokenBalance}
  //       tokenName={lpName}
  //       pid={pid}
  //       addLiquidityUrl={addLiquidityUrl}
  //     />
  //   ) : (
  //     <Button
  //       mt="8px"
  //       width="100%"
  //       disabled={requestedApproval}
  //       onClick={handleApprove}
  //     >
  //       {TranslateString(758, "Approve Contract")}
  //     </Button>
  //   );
  // };

  return (
    <>
      <div>domain in auction...</div>
    </>
  );
};

export default DomainDetail;
