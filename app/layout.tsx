import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'KOFI Miami — Mobile Coffee Shop',
  description: 'Colorful coffee, matcha and good energy from Miami’s cutest mobile coffee shop.',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '48x48' },
      { url: `${basePath}/favicon-32.png`, type: 'image/png', sizes: '32x32' },
      { url: `${basePath}/favicon-192.png`, type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  openGraph: { title: 'KOFI Miami — Coffee with main character energy', description: 'Find the pink KOFI truck popping up around Miami.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: 'KOFI Miami', description: 'Coffee with main character energy.', images: ['/og.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
