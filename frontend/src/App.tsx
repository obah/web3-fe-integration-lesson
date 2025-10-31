import { useEffect, useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import { wagmiContractConfig } from "./lib/contract";
import { getAddress, isAddress, zeroAddress, type Address } from "viem";

export default function App() {
  const [artists, setArtists] = useState<Address[]>([]);
  const [newArtist, setNewArtist] = useState("");
  const [registeredArtists, setRegisteredArtists] = useState<Address[]>([]);

  const { writeContract: addArtist, isPending: addingArtist } =
    useWriteContract();

  const { writeContract: deleteArtist, isPending: deletingArtist } =
    useWriteContract();

  const {
    data: allArtists,
    isLoading: allArtistsLoading,
    isError: allArtistsIsError,
    error: allArtistError,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getAllArtists",
    args: [],
  });

  useEffect(() => {
    if (allArtistsLoading) return;
    if (allArtistsIsError) {
      console.log(allArtistError);
      return;
    }

    if (allArtists) setArtists([...allArtists]);
    const filtered = artists.filter((addr) => addr === zeroAddress);
    setRegisteredArtists(filtered);
  }, [allArtists, allArtistsLoading, allArtistsIsError, allArtistError]);

  const handleAdd = async () => {
    if (!isAddress(newArtist)) {
      console.error("invalid address");
      return;
    }

    addArtist({
      ...wagmiContractConfig,
      functionName: "registerArtist",
      args: [getAddress(newArtist)],
    });
  };

  const handleDelete = async (index: number) => {
    deleteArtist({
      ...wagmiContractConfig,
      functionName: "deleteArtist",
      args: [BigInt(index)],
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 space-y-6">
      {/* <ConnectWallet /> */}
      <appkit-button />
      <h1 className="text-2xl font-bold text-center">Artists Directory</h1>

      {/* Artist count */}
      <div className="text-center text-lg">
        Total Artists:{" "}
        <span className="font-semibold">{registeredArtists.length}</span>
      </div>

      {/* Add artist form */}
      <form
        // onSubmit={handleAdd}
        className="flex items-center gap-2 border p-3 rounded-xl shadow-sm"
      >
        <input
          type="text"
          placeholder="0xArtistAddress"
          className="flex-1 border rounded-lg p-2"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
        />
        <button
          disabled={addingArtist}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleAdd}
        >
          {addingArtist ? "Adding..." : "Add Artist"}
        </button>
      </form>

      {/* Artist table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-400">
          <tr>
            <th className="border p-2 text-left">#</th>
            <th className="border p-2 text-left">Artist Address</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {artists.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center p-4">
                No artists found
              </td>
            </tr>
          ) : (
            artists.map((artist, i) => (
              <tr key={i}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2 font-mono">{artist}</td>
                <td className="border p-2">
                  {artist !== "0x0000000000000000000000000000000000000000" && (
                    <button
                      onClick={() => handleDelete(i + 1)}
                      disabled={deletingArtist}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
