import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALPINE Webdevelopment',
  description: 'ALPINE Webdevelopment Studios Portfolio',
}

export default function AlpineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/png" href="/assets/logo/favicon32.png" sizes="32x32" />
      <link rel="stylesheet" href="/assets/style.css" />
      {children}
    </>
  )
}
