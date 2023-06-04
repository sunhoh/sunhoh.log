import Image from 'next/image';
import { Inter } from 'next/font/google';
import Helmet from '@/components/html-head/Helmet';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Helmet title="달달" description="달달 main" image="" url="" />
      <div>home</div>
    </>
  );
}
