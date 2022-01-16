import React from "react";
import nftHackLogo from "../assets/klee_nfthack.jpg";

const Header = () => {
  return (
    <>
      <a
        href="https://hackathons.filecoin.io/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Klee NFTHack Logo"
          style={{ height: "200px" }}
          src={nftHackLogo}
        ></img>
      </a>
      <p className="header gradient-text">Klee NFT Faucet</p>
      <p className="sub-text">
        Free Klee NFTs @ EthGlobal NFTHack 2022
      </p>
    </>
  );
};

export default Header;
