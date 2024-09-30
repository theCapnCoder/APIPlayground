import React, { PropsWithChildren } from "react";
import Loading from "../Loading/Loading";
import ErrorMessage from "../Error/ErrorMessage";

type Props = PropsWithChildren<{
  isLoading: boolean;
  error: string | null;
}>;

const LoadingErrorHandler: React.FC<Props> = ({
  isLoading,
  error,
  children,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  return <>{children}</>;
};

export default LoadingErrorHandler;
