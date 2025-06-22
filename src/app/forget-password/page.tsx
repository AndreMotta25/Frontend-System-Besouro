// app/forget-password/page.js

import React, { Suspense } from 'react';
import ForgetPasswordPage from './ForgetPasswordPage';

const ForgetPasswordWrapper = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ForgetPasswordPage />
    </Suspense>
  );
};

export default ForgetPasswordWrapper;
