// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Script} from "forge-std/Script.sol";
import {MiniArtWork} from "../src/MiniArtwork.sol";

contract Deploy is Script {
    // uint constant BASE_SEPOLIA_CHAIN_ID = 84532;

    function run() external {
        // vm.selectFork(BASE_SEPOLIA_CHAIN_ID);
        vm.startBroadcast();
        new MiniArtWork();
        vm.stopBroadcast();
    }
}
