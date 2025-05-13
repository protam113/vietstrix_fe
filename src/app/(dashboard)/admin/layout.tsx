'use client';

import Head from 'next/head';
// import Loading from '@/components/Loading/shuffle-loader';
// import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AuthProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div>{children}</div>;
    </>
  );

  //   isAuthenticated ?
  //    : null;
}
