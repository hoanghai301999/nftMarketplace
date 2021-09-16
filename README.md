# nftMarketplace
1) Tổng quan project
- Người dùng có thể tạo NFT:
               + Upload hình ảnh
	+ Điền tên NFT
	+ Description
	+ Mất 1 khoảng phí nhỏ để Mint 
- Bán NFT
	+ Lựa chọn NFT của mình
	+ Đặt giá bán (setSell(uint256 tokenId, uint nftPrice))
	+ Approve cho Smart Contract có thể transferfrom vật phẩm của mình cho người khác
- Mua NFT
	+ Có thể mua NFT của người bán bằng Ether (buy(uint256 tokenId))
2) Giao diện ( 3 giao diện ) 
- Giao diện màn hình chính:
	+ Hiển thị tất cả NFT đang bán 
		+ Lấy tổng số NFT đã Mint trong SmartContract ( currentCounter() )
		+ Loop qua từng NFT để check xem đây có phải là sản phẩm đang được 			   bán không isForSell(tokenId)
		+ Nếu trả về True tức là NFT này đang được rao bán 
		+ Gọi lên hàm tokenURI(uint256 tokenId) để lấy metadata
		+ Từ link metada có link ảnh + thông tin, display ra fontend
- Giao diện màn hình tạo NFT ( create )
	- Bên Frontend
	+ Người dùng upload ảnh
	+ Điền thông tin vào Form 
		+ Name , description, ...
	+ Submit để tạo NFT 
- Backend
	+ Upload ảnh lên Server sử dụng Multer hay 1 số thư viện khác
	+ Từ ảnh đã Upload, sử dụng thư viện https://nft.storage/ Tạo ra file 		Metadata và hình ảnh
	+ Lên Smartcontract gọi hàm FreeMint(address to,string metadata)  trả 	1 khoảng phí để mint NFT
		+ Đợi infura trả về kết quả 
- Giao diện màn hình hiển thị NFT của owner 
	+ Lấy tổng số NFT đã Mint trong SmartContract ( currentCounter() )
	+ Loop qua từng NFT, sử dụng hàm ownerOf, kiểm tra so sánh với địa chỉ của 	currentAccount mà Metamask đang kết nối
	+ Nếu bằng nhau thì có thể hiển thị
	+ Gọi lên hàm tokenURI(uint256 tokenId) để lấy metadata
	+ Từ link metada có link ảnh + thông tin, display ra fontend
