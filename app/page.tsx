"use client"

import { avalanche, avalancheFuji } from "wagmi/chains";
import { echo } from "./chains/definitions/echo";

import { ICTT, PoweredByAvalanche, Web3Provider } from "@0xstt/avalanche-builder-kit";
import { Info } from 'lucide-react';

export default function Home() {

  const chains = [avalanche, avalancheFuji, echo];

  const tokens = [
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
    }
  ];

  return (
    <Web3Provider appName="Flows - ICTT" projectId="YOUR_PROJECT_ID" chains={chains}>
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
