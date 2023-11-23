import React from "react";
import { SignIn } from "@clerk/nextjs";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn />;
    </div>
  );
};

export default SignInPage;
