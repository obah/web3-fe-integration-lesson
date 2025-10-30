// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Script} from "forge-std/Script.sol";
import {MiniArtWork} from "../src/MiniArtwork.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();
        new MiniArtWork();
        vm.stopBroadcast();
    }
}
