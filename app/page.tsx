import { Inter } from "@next/font/google";
import Banner from './components/Banner/Page'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>      <Banner />
      </div>
    </main>
  );
}
