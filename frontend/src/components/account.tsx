import React from "react";
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useBalance,
} from "wagmi";

export function Account() {
  const { address, chain } = useAccount();
  const { isLoading, isError, error, data } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  // React.useEffect(() => {
  //   if (isLoading) return;
  //   if (data) console.log(data);
  //   if (chain) console.log(chain.name);
  // }, [isLoading, data, chain]);

  return (
    <div>
      {ensAvatar && (
        <img
          alt="ENS Avatar"
          src={ensAvatar}
          className="w-10 h-10 rounded-full"
        />
      )}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
