'use client';

import ScrollToTopButton from '@/components/button/ScrollToTopButton';
import DefaultLayout from '@/components/layouts/default-layout/default.layout';
import ShuffleLoader from '@/components/loading/shuffle-loader';
import React, { useState } from 'react';

export default function CustomerLayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ShuffleLoader onLoadingComplete={() => setLoading(false)} />}
      {!loading && (
        <DefaultLayout>
          <div>{children}</div>
          <ScrollToTopButton />
        </DefaultLayout>
      )}
    </>
  );
}
