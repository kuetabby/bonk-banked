"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { useIsMounted } from "@/hooks/useIsMounted";

import telegram from "@/assets/telegram-1.png";
import twitter from "@/assets/twitter-1.png";

import AppLogo from "@/assets/logo-app.png";

import "./style.css";

const tokenAddress = "";

interface Props {}

// const contractAddress = "0x016c4225ae87FEC52A5230158fb9dF7f93B87921";
// const pairAddress = "0x1e053b6d2f0a578505bfd8bfe344295a9a08bbd2";

const Home: React.FC<Props> = () => {
  // const [isVisionVisible, setIsVisionVisible] = useState(false);
  // const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  // const visionRef = useRef<HTMLDivElement | null>(null);
  // const featuresRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsVisionVisible(entry.isIntersecting);
  //     });

  //     observer.observe(visionRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);`

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsFeaturesVisible(entry.isIntersecting);
  //     });

  //     observer.observe(featuresRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="homepage-container">
      <Image
        src={AppLogo}
        alt="app-logo"
        className="w-full h-auto object-cover"
      />

      <div className="w-full sm:px-8 lg:px-14">
        <div className="w-full xl:w-4/5 text-center mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-white py-6 lg:px-8">
          <span className="text-app-main mx-1">Bonk Banked</span>
        </div>
        <div className="w-full xl:w-4/5 text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-white lg:px-8">
          did you missed{" "}
          <span className="text-secondary font-bold mx-1">bonk?</span> now is a
          second chance to not miss the BBONK is a decentralized meme project
          focused on the BONK community buying BONK ATH. This is a second
          chance.
        </div>
        <div className="w-full xl:w-4/5 text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-white lg:px-8 py-4">
          Contract Address : {tokenAddress}
        </div>
        <div className="w-full xl:w-4/5 flex flex-wrap justify-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-2">
          <Link
            href="https://t.me/BONKBANKED"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={telegram}
              alt="tg-logo"
              className="w-10 sm:w-30 h-auto mr-3 object-cover"
            />
          </Link>
          <Link
            href="https://x.com/bonkbanked"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={twitter}
              alt="tw-logo"
              className="w-10 sm:w-30 h-auto ml-3 object-cover"
            />
          </Link>
        </div>
        <div className="w-full xl:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-2">
          <Link
            href={`https://dexscreener.com/solana/${tokenAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full xs:w-2/5 sm:w-36 text-white bg-primary hover:bg-secondary active:bg-secondary focus:bg-secondary">
              Chart
            </Button>
          </Link>

          <Link
            href={`https://solscan.io/token/${tokenAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full xs:w-2/5 sm:w-40 text-white sm:mx-4 my-3 xs:my-0 bg-primary hover:bg-secondary active:bg-secondary focus:bg-secondary">
              Contract Address
            </Button>
          </Link>

          <Link
            href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${tokenAddress}&fixed=in`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full xs:w-2/5 sm:w-36 text-white xs:mt-2 sm:mt-0 bg-primary hover:bg-secondary active:bg-secondary focus:bg-secondary">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
