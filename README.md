# WEB3 FRONTEND INTEGRATION

---

## 🚀 Tech Stack

- **Frontend:** [Vite](https://vitejs.dev/), [React](https://reactjs.org/) (or your framework), [Tailwind CSS](https://tailwindcss.com/)
- **Web3 Integration:** [Wagmi](https://wagmi.sh/)
- **Smart Contracts:** [Solidity](https://docs.soliditylang.org/en/v0.8.20/)
- **Contract Development:** [Foundry](https://book.getfoundry.sh/) (Forge, Cast)
- **Local Blockchain:** [Anvil](https://book.getfoundry.sh/anvil/)

---

## 🛠️ Installation & Setup

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18+)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- A browser wallet like [MetaMask](https://metamask.io/)

### 1. Clone the Repository

```bash
git clone /obah/web3-fe-integration-lesson
cd web3-fe-integration-lesson
```

### 2. Install Frontend Dependencies

Navigate to your frontend directory (e.g., `ui`, `frontend`, or root) and install the necessary packages.

```bash
# Assuming your frontend is in the root or a folder like /frontend
cd frontend/
npm install
# or yarn install / pnpm install
```

### 3. Install Contract Dependencies

Navigate to your contracts directory and install the Foundry dependencies.

```bash
# Assuming your contracts are in a folder like /contracts
cd contract
forge install
```

### 4. Compile the Contracts

Compile your smart contracts to ensure everything is set up correctly.

```bash
# Still in the /contract directory
forge build
```

---

## 💻 Running Locally with Anvil

Follow these steps to deploy your contract to a local Anvil instance and connect your frontend.

### Step 1: Start Your Local Anvil Chain

Open a **new terminal window**. This terminal must remain running in the background.

```bash
anvil
```

Anvil will start and print out a list of available accounts and their corresponding private keys. It will also show the RPC server URL, which is typically `http://127.0.0.1:8545`.

**Keep this terminal open.**

### Step 2: Deploy Your Smart Contract

Open a **second terminal window** and navigate to your contracts directory.

Use a `forge script` command to deploy your contract. You will need to use one of the private keys from the Anvil output to pay for the gas.

```bash
# Be sure you are in the /contract directory
forge script script/Deploy.s.sol --rpc-url [http://127.0.0.1:8545](http://127.0.0.1:8545) --broadcast --private-key [PASTE_A_PRIVATE_KEY_FROM_ANVIL_OUTPUT]
```

> **Note:**
>
> - Replace `[PASTE_A_PRIVATE_KEY_FROM_ANVIL_OUTPUT]` with one of the keys from Step 1 (e.g., `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`).

After running the command, Foundry will output the **deployed contract address**. **Copy this address.**
You would also get the ABI in `contract/out/MiniArtwork.sol` (incase you make any changes to the contract)

### Step 3: Configure and Run the Frontend

1.  Go to your frontend code and find the file where you configure your Wagmi client and contract addresses (e.g., `frontend/src/lib/contract.ts`).
2.  Paste the **deployed contract address** and ABI(you can leave as it is if you didn't make any changes to the contract) from Step 2 into the appropriate variable.
3.  In your frontend directory, start the Vite development server.

```bash
# In your /frontend directory
npm run dev
```

Your application should now be running, typically at `http://localhost:5173`.

### Step 4: Connect MetaMask to Anvil

To interact with your application, you must connect your browser wallet to your local Anvil chain.

1.  Open MetaMask and click on the network selection dropdown (it might say "Ethereum Mainnet").
2.  Click "**Add network**" or "**Custom RPC**".
3.  Fill in the following details:
    - **Network Name:** `Anvil Localhost`
    - **New RPC URL:** `http://127.0.0.1:8545`
    - **Chain ID:** `31337` (This is the default for Anvil)
    - **Currency Symbol:** `ETH`
4.  Click "**Save**". Your MetaMask will now be connected to your local chain.

### Step 5: Add an Anvil Account to MetaMask

You need test ETH to send transactions. The easiest way is to import one of the funded Anvil accounts.

1.  Go back to the terminal where Anvil is running (from Step 1).
2.  Copy one of the **Private Keys** listed (the same one you used to deploy, or a different one).
3.  In MetaMask, click the "accounts" circle icon in the top-right.
4.  Select "**Import account**".
5.  Paste the Anvil private key and click "**Import**".

You will now see an account with 10,000 test ETH. You can now connect this account to your frontend application and start interacting with your smart contract!

---
