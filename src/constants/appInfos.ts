import type { Metadata } from 'next';

export const appInfo = {
  logo: '/icons/og_logo.svg', //web logo
  title: 'Vietstrix®', //app name
  description: 'app description', //app description
  domain: 'https://vietstrix.com',
  ogImage: '/icons/og_logo.svg', //og image
  themeColor: '#ffffff',
  keywords: [
    // Từ khóa tiếng Anh
    'web development',
    'website',
    'web design',
    'frontend development',
    'backend development',
    'full-stack development',
    'web application',
    'responsive design',
    'e-commerce development',
    'CMS development',
    'SEO optimization',
    'web solutions',

    // Từ khóa tiếng Việt
    'thiết kế website',
    'phát triển web',
    'dịch vụ web',
    'thiết kế web chuyên nghiệp',
    'xây dựng website',
    'phát triển ứng dụng web',
    'thiết kế web responsive',
    'phát triển thương mại điện tử',
    'tối ưu SEO',
    'dịch vụ web toàn diện',
    'lập trình website',
    'giải pháp web',
  ],
};

export const metadata: Metadata = {
  title: appInfo.title,
  description: appInfo.description,
  keywords: appInfo.keywords,
  applicationName: appInfo.title,
  generator: 'Next.js',

  icons: {
    icon: appInfo.logo,
    apple: appInfo.logo,
    shortcut: appInfo.logo,
  },
  themeColor: appInfo.themeColor,

  openGraph: {
    type: 'website',
    title: appInfo.title,
    description: appInfo.description,
    siteName: appInfo.title,
    url: appInfo.domain,
    images: [
      {
        url: `${appInfo.domain}${appInfo.ogImage}`,
        width: 1200,
        height: 630,
        alt: appInfo.title,
      },
    ],
    locale: 'vi_VN',
  },

  twitter: {
    card: 'summary_large_image',
    title: appInfo.title,
    description: appInfo.description,
    images: [`${appInfo.domain}${appInfo.ogImage}`],
    creator: '@vietstrix',
    site: '@vietstrix',
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  alternates: {
    canonical: appInfo.domain,
    languages: {
      'en-US': `${appInfo.domain}/en`,
      'vi-VN': `${appInfo.domain}`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },

  category: 'Marketing Agency',
  creator: '@vietstrix',
  publisher: 'Vietstrix',
};

// Function to generate metadata for child pages
export function PageMetadata(
  pageTitle: string,
  pageDescription?: string
): Metadata {
  return {
    ...metadata,
    title: `${pageTitle} | ${appInfo.title}`,
    description: pageDescription || metadata.description,
    openGraph: {
      ...metadata.openGraph,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
    twitter: {
      ...metadata.twitter,
      title: `${pageTitle} | ${appInfo.title}`,
      description: pageDescription || (metadata.description as string),
    },
  };
}
