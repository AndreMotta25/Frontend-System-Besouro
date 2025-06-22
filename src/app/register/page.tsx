import React, { Suspense } from "react";
import Register from "./Register";

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>Página não disponível no momento!</div>}>
      <Register />
    </Suspense>
  );
};

export default RegisterPage;
