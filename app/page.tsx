"use client"

import { avalanche, avalancheFuji } from "wagmi/chains";
import { echo } from "./chains/definitions/echo";

import { ICTT, PoweredByAvalanche, Web3Provider } from "@0xstt/avalanche-builder-kit";
import { Info } from 'lucide-react';

export default function Home() {

  const chains = [avalanche, avalancheFuji, echo];

  const tokens = [
    { address: "native", wrapped_address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7", name: "Avalanche", symbol: "AVAX", decimals: 18, chain_id: 43114 },
    {
      address: "native",
      wrapped_address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
      chain_id: 43113
    },
    // tokens
    {
      address: "0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d",
      name: "TOK",
      symbol: "TOK",
      decimals: 18,
      chain_id: 43113,
      supports_ictt: true,
      transferrer: "0xD63c60859e6648b20c38092cCceb92c5751E32fF",
      mirrors: [
        {
          address: "0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d",
          transferrer: "0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d",
          chain_id: 173750,
          decimals: 18
        }
      ]
    },
    {
      address: "0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d",
      name: "TOK",
      symbol: "TOK",
      decimals: 18,
      chain_id: 173750,
      supports_ictt: true,
      is_transferrer: true,
      mirrors: [
        {
          address: "0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d",
          transferrer: "0xD63c60859e6648b20c38092cCceb92c5751E32fF",
          chain_id: 43113,
          decimals: 18
        }
      ]
    },
    { address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", name: "TetherToken", symbol: "USDt", decimals: 6, chain_id: 43114 },
    { address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7", name: "Wrapped AVAX", symbol: "WAVAX", decimals: 18, chain_id: 43114 },
    { address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c", name: "Wrapped AVAX", symbol: "WAVAX", decimals: 18, chain_id: 43113 },
    { address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e", name: "USD Coin", symbol: "USDC", decimals: 6, chain_id: 43114 },
    { address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70", name: "Dai Stablecoin", symbol: "DAI.e", decimals: 18, chain_id: 43114 },
    { address: "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab", name: "Wrapped Ether", symbol: "WETH.e", decimals: 18, chain_id: 43114 },
    { address: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd", name: "JoeToken", symbol: "JOE", decimals: 18, chain_id: 43114 },
    { address: "0x59414b3089ce2af0010e7523dea7e2b35d776ec7", name: "Yak Token", symbol: "YAK", decimals: 18, chain_id: 43114 },
    { address: "0x8729438eb15e2c8b576fcc6aecda6a148776c0f5", name: "BENQI", symbol: "QI", decimals: 18, chain_id: 43114 },
    { address: "0x111111111117dc0aa78b770fa6a738034120c302", name: "1INCH Token", symbol: "1INCH", decimals: 18, chain_id: 1 }
  ];

  return (
    <Web3Provider appName="Example Swap App" projectId="YOUR_PROJECT_ID" chains={chains}>
      <div className="grid grid-cols-12 text-white text-sm items-center">
        {/* ICTT Example */}
        <div className="col-span-12 flows-bg w-full h-screen">
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            <ICTT tokens={tokens} token_in="0x8D6f0E153B1D4Efb46c510278Db3678Bb1Cc823d" source_chain_id={43113} destination_chain_id={173750}></ICTT>
            <a className="flex items-center gap-2 text-primary-foreground hover:underline" href="https://academy.avax.network/course/interchain-token-transfer" target="_blank">
              <Info size={16} />
              <p className="text-xs">What is ICTT?</p>
            </a>
            <a className="w-[120px]" href="https://subnets.avax.network/" target="_blank">
              <PoweredByAvalanche className={"w-full h-full"}></PoweredByAvalanche>
            </a>
          </div>
        </div>
      </div>
    </Web3Provider>
  );
}
