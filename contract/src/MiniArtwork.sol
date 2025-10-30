// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract MiniArtWork {
    error ArtistAlreadyRegistered(address artist);
    error ArtistUnknown(uint artistId);

    address public immutable OWNER;
    address[] private artists;

    mapping(address => bool) private isRegistered;
    mapping(address => uint) private artistId;

    event NewArtistRegistered(address indexed artist, uint artistId);
    event ArtistRemoved(address indexed artist);

    modifier artistExists(uint _artistId) {
        if (_artistId > artists.length) revert ArtistUnknown(_artistId);
        address artist = artists[_artistId];
        if (artist == address(0)) revert ArtistUnknown(_artistId);
        if (!isRegistered[artist]) revert ArtistUnknown(_artistId);

        _;
    }

    constructor() {
        OWNER = msg.sender;
    }

    function registerArtist(address _artist) external {
        if (isRegistered[_artist]) revert ArtistAlreadyRegistered(_artist);

        uint _artistId = artists.length;

        artists.push(_artist);
        artistId[_artist] = _artistId;
        isRegistered[_artist] = true;

        emit NewArtistRegistered(_artist, _artistId);
    }

    function getArtistById(
        uint256 _artistId
    ) external view artistExists(_artistId) returns (address artist) {
        artist = artists[_artistId];
    }

    function getAllArtists() external view returns (address[] memory) {
        return artists;
    }

    function deleteArtist(uint _artistId) external artistExists(_artistId) {
        address artist = artists[_artistId];
        uint index = artistId[artist] - 1;

        artists[index] = address(0);
        isRegistered[artist] = false;

        emit ArtistRemoved(artist);
    }
}
