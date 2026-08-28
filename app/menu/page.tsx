import type { Metadata } from 'next';
import KofiPage from '../KofiPage';
export const metadata: Metadata = { title:'Menu — KOFI Miami', description:'Coffee, matcha and signature drinks from KOFI Miami.', openGraph:{ title:'KOFI Miami Menu', description:'Pick your KOFI mood.', images:['/kofi-gems.jpg'] } };
export default function MenuPage() { return <KofiPage view="menu" />; }
