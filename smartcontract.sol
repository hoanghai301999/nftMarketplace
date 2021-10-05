// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TicketNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    mapping(uint => bool) public forSell; // check sell or not
    mapping(uint => uint) public forPrice; // mapping tokenURI => Price 
    // struct 
    // array chua id struct nft dang sell 
    constructor() ERC721("TicketNFT", "Ticket") {}
    
    modifier onlyNFTOwner(uint256 _tokenId) {
        require(msg.sender == ownerOf(_tokenId));
        _;
    }
    
    function currentCounter() public view returns(uint256){
        return(_tokenIdCounter.current());
    }
    
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

   
    function FreeMint(string memory url) public payable{
         require(msg.value == 0.03 ether);
         _safeMint(msg.sender, _tokenIdCounter.current());
         _setTokenURI(_tokenIdCounter.current(),url);
        forSell[_tokenIdCounter.current()] = false;
        forPrice[_tokenIdCounter.current()] = 0;
        _tokenIdCounter.increment();
       
    }
    
    function setSell(uint256 tokenId, uint nftPrice) public onlyNFTOwner(tokenId) {
        require(tokenId >= 0 && tokenId < _tokenIdCounter.current() && nftPrice >= 1000000000000000 );  /// gia min for sell la 0.001ether
        forSell[tokenId] = true;
        forPrice[tokenId] = nftPrice;
    }

    function offSell(uint256 tokenId ) public onlyNFTOwner(tokenId) {
       require(tokenId >= 0 && tokenId < _tokenIdCounter.current() );
       forSell[tokenId] = false;
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721) {
        require(!forSell[tokenId], "NFT Listing");
        super._beforeTokenTransfer(from, to, tokenId);
    }
    
    function buy(uint256 tokenId) public payable {
        require(forSell[tokenId] == true && msg.value == forPrice[tokenId] && ownerOf(tokenId) != msg.sender );
        forSell[tokenId] = false; // not for sell
        payable(ownerOf(tokenId)).transfer(msg.value);
        _transfer(ownerOf(tokenId), msg.sender, tokenId);
    }

    function getNftPrice( uint256 tokenId) public view returns(uint){
        return forPrice[tokenId];
    }
    
    function isForSell(uint256 tokenId) public view returns (bool){
        return forSell[tokenId];
    } 
    function Withdraw(uint amount) public onlyOwner {
        payable(msg.sender).transfer(amount);
    }
}