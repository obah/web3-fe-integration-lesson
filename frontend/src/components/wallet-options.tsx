import * as React from "react";
import { useConnect } from "wagmi";

export function WalletOptions() {
  const [showWallets, setShowWallets] = React.useState<boolean>(false);
  const { connectors, connect } = useConnect();

  return (
    // <>
    //   {showWallets ? (
    //     <>
    //       {connectors.map((connector) => (
    //         <button key={connector.uid} onClick={() => connect({ connector })}>
    //           {connector.name}
    //         </button>
    //       ))}
    //     </>
    //   ) : (
    //     <button
    //       className="bg-green-300 px-4 py-3 rounded-lg text-black"
    //       onClick={() => setShowWallets(!showWallets)}
    //     >
    //       Connect Wallet
    //     </button>
    //   )}
    // </>
    <div className="space-y-2">
      <button
        className="bg-green-300 px-4 py-3 rounded-lg text-black"
        onClick={() => setShowWallets(!showWallets)}
      >
        Connect Wallet
      </button>

      {showWallets && (
        <div className="flex flex-col gap-1  items-start ">
          {connectors.map((connector) => (
            <button key={connector.uid} onClick={() => connect({ connector })}>
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
