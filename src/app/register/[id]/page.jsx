import { logo } from "@/assets";
import Image from "next/image";
import { useCallback } from "react";
import Step1 from "./Step1";

const Register = () => {
  const onCenterContainer1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return <Step1 />;
};

export default Register;
