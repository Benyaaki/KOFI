import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KOFI Miami — Mobile Coffee Shop',
  description: 'Colorful coffee, matcha and good energy from Miami’s cutest mobile coffee shop.',
  openGraph: { title: 'KOFI Miami — Coffee with main character energy', description: 'Find the pink KOFI truck popping up around Miami.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: 'KOFI Miami', description: 'Coffee with main character energy.', images: ['/og.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
