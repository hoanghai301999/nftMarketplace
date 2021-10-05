
$(document).ready(function(){
    $(".author").hide();
    $("#Create-Form").hide();
      $(".loader").hide();
    var currentAccount = null;
    var currentImage = null;
    var smAbi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "buy",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "url",
                    "type": "string"
                }
            ],
            "name": "FreeMint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "offSell",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "nftPrice",
                    "type": "uint256"
                }
            ],
            "name": "setSell",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentCounter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "forPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "forSell",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getNftPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "isForSell",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    var smAddress = "0xf121d4e7D23D3dad8F6A0ce823cBdEF8cA649b04";
    // SM
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    var contract_MM = new web3.eth.Contract(smAbi,smAddress);
    console.log(contract_MM);
    //infura
    var provider = new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/536fdf7a651e4d42b7027d9a477a4f4e")
    var web3_infura = new Web3(provider);
    var contract_Infura = web3_infura.eth.Contract(smAbi,smAddress);
    console.log(contract_Infura);

    contract_Infura.events.Transfer({filter:{},fromBlock:'latest'},function(err,data){
        if(err){
            console.log("Error to get event from sm");

        }else{
            $(".loader").hide();
            console.log("tu infura, nhan duoc id: "+data.returnValues[2]);
            alert("It takes a minute to load your NFT");
            getimage();
        }
    })
    //

    check_MetaMask();
    
    $("#btn_connect_MM").click(function(){
        connect_MetaMask()
        .then((data)=>{
            currentAccount = data[0];
            console.log("Current Account:"+currentAccount);
            maxLength = currentAccount.length;
            $("#btn_connect_MM").text(currentAccount.substr(0, 7)+"..."+currentAccount.substr(maxLength-4, maxLength));
            $("#auth_address").text(currentAccount.substr(0, 7)+"..."+currentAccount.substr(maxLength-4, maxLength))
            getimage();
        })
        .catch((err)=>{
            console.log(err);
        });
    });

    $("#btn_Send").click(function(){
        if(currentAccount==null){
           alert("Vui lòng login Meta Mask");
        }else{
            var txt = $("#txt_Content").val();
            var eth = $("#txt_Money").val();
            contract_MM.methods.sendDonate(txt).send({
                from: currentAccount,
                value: web3.utils.toWei(eth,'ether')
            })
        }
    });

    $("#MintNft").click(function(){
        if(currentAccount==null){
            alert("Vui lòng login Meta Mask");
         }
         else if(currentImage == null){
             alert("Vui lòng chọn Ảnh")
         }
         else{
            $(".loader").show();
             // create metadata
            $.post("/mint",{
                Name: $("#NFTname").val(),
                File: currentImage,
                Day: new Date().toISOString().slice(0, 10),
                Description: $("#NFTDescription").val()
            },function(data){
                if(data.ketqua == 0){
                    $(".loader").hide();
                    alert("Error!, status: "+data.status);
                }
                else{
                    console.log(data.status);
                    contract_MM.methods.FreeMint(data.status).send({
                        from: currentAccount,
                        value: web3.utils.toWei('0.03','ether')
                    })
                }
            })
         }

    })
    getimage();
   
    async function getimage(){
        $("#allimage").empty();
        $("#appendmodal").empty();
        $("#tab1").empty();
        $("#tab2").empty();
        $("#allimage").append(`<!-- title -->
        <div class="col-12">
            <div class="main__title main__title--center">
                <h2>Explore exclusive digital assets</h2>
            </div>
        </div>
        <!-- end title -->`)
        contract_MM.methods.currentCounter().call().then(async function(counter){
            console.log(parseInt(counter));
            for(let i = 0; i <parseInt(counter);i++ ){
                contract_MM.methods.tokenURI(i).call().then(async function(nft){
                    var metalink = nft.replace("ipfs://","https://ipfs.io/ipfs/");
                    const response = await fetch(metalink);
                    if(!response.ok)
                    throw new Error(response.statusText);
                    const json = await response.json();

                    var imageurl = "/images/"+json.imagename;
                    var owner = await contract_MM.methods.ownerOf(i).call();
                    var ownerlength = owner.length;
                    var  ownernft = owner.substr(0, 5)+"....."+owner.substr(ownerlength-4, ownerlength)
                    // get price
                    var price = 1;
                    await contract_MM.methods.getNftPrice(i).call().then((pr) => {
                        price = web3.utils.fromWei(pr+"", 'ether');
                    })
                    var argument1 = false;
                    var argument2 = false;
                    await contract_MM.methods.forSell(i).call().then((sellornot) => {
                        
                        if(sellornot == true){
                            $("#allimage").append(`
                            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <!-- card -->
                            <div class="card">
                                <a href="#modal-asset_${i}" class="card__cover open-modal">
                                    <div class = "crop">
                                    <img id="urlimage_`+i+`" src="`+imageurl+`" alt="">
                                    </div>
                                </a>
                                <h3 class="card__title"><a id="name_`+i+`" href="#modal-asset" class="open-modal">`+json.name+`</a></h3>
                                <div class="card__author">
                                    <img src="img/avatars/avatar4.jpg" alt="">
                                    <a class="thisowner" id="owner_`+i+`" value = "`+owner+`">`+ownernft+`</a>
                                </div>
                                <div class="card__info">
                                    <div class="card__price">
                                        <span>Reserve price</span>
                                        <span>`+price+ ` ETH</span>
                                    </div>
                                    
                                    <button class="card__likes card__likes--active" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                        <span>37</span>
                                    </button>
                                </div>
                            </div>
                            <!-- end card -->
                            </div>
                            `)
                            $("#appendmodal").append(`
                            <!-- modal asset -->
                            <div id="modal-asset_`+i+`" class="zoom-anim-dialog mfp-hide modal modal--asset">
                                <button class="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
                        
                                <div class="row">
                                    <!-- content -->
                                    <div class="col-12 col-xl-8">
                                        <div class="asset__item">
                                            <img src="`+imageurl+`" alt="">
                        
                                            <!-- share -->
                                            <div class="share share--asset">
                                                <a href="#" class="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"/></svg> <span>share</span></a>
                                                <a href="#" class="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z"/></svg> <span>tweet</span></a>
                                                <a href="#" class="share__link share__link--link"><svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"/></svg> <span>copy link</span></a>
                                            </div>
                                            <!-- end share -->
                        
                                            <!-- likes -->
                                            <button class="asset__likes" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
                                                <span>358</span>
                                            </button>
                                            <!-- end likes -->
                                        </div>
                                    </div>
                                    <!-- end content -->
                        
                                    <!-- sidebar -->
                                    <div class="col-12 col-xl-4">
                                        <div class="asset__info">
                                            <div class="asset__desc">
                                                <h2>Descriptions</h2>
                                                <p>`+json.description+`</p>
                                            </div>
                                            <ul class="asset__authors">
                                                <li>
                                                    <span>Creator</span>
                                                    <div class="asset__author asset__author--verified">
                                                        <img src="img/avatars/avatar5.jpg" alt="">
                                                        <a class="thisowner">`+ ownernft+`</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Collection</span>
                                                    <div class="asset__author ">
                                                        <img src="img/avatars/avatar9.jpg" alt="">
                                                        <a href="`+metalink+`" target="_blank">The Meta Key</a>
                                                    </div>
                                                </li>
                                            </ul>
                        
                                            </div>
                                            <!-- end tabs -->
                                            <div class="asset__wrap">
                                                <div class="asset__price">
                                                    <span>Price</span>
                                                    <span>`+ price+` ETH</span>
                                                </div>
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <!-- actions -->
                                            <div class="asset__btns">
                                                <button class="asset__btn asset__btn--full asset__btn--clr Buy_NFT" id="Buy_`+i+`" type="button" style="bottom: 0;">Buy</button>
                                            </div>
                                            <!-- end actions -->
                                        </div>
                                    </div>
                                    <!-- end sidebar -->
                                </div>
                            </div>
                            <!-- end modal asset -->
                            `)
                            argument1 = true;
                        }
                    })
                   
                        if(owner.toLowerCase() == currentAccount){
                            $("#tab1").append(`
                            <div class="col-12 col-sm-6 col-lg-4">
                            <!-- card -->
                            <div class="card">
                                <a href="#modal-asset_`+i+`_owner" class="card__cover open-modal">
                                    <div class = "crop">
                                    <img id="urlimage_`+i+`" src="`+imageurl+`" width="300" height="300" alt="">
                                    </div>
                                </a>
                                <h3 class="card__title"><a id="name_`+i+`" href="#modal-asset" class="open-modal">`+json.name+`</a></h3>
                            </div>
                            <!-- end card -->
                            </div>
                            `)
                            $("#appendmodal").append(`
                            <!-- modal asset -->
                            <div id="modal-asset_`+i+`_owner" class="zoom-anim-dialog mfp-hide modal modal--asset">
                                <button class="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
                        
                                <div class="row">
                                    <!-- content -->
                                    <div class="col-12 col-xl-8">
                                        <div class="asset__item">
                                            <img src="`+imageurl+`" alt="">
                        
                                            <!-- share -->
                                            <div class="share share--asset">
                                                <a href="#" class="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"/></svg> <span>share</span></a>
                                                <a href="#" class="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z"/></svg> <span>tweet</span></a>
                                                <a href="#" class="share__link share__link--link"><svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"/></svg> <span>copy link</span></a>
                                            </div>
                                            <!-- end share -->
                        
                                            <!-- likes -->
                                            <button class="asset__likes" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
                                                <span>358</span>
                                            </button>
                                            <!-- end likes -->
                                        </div>
                                    </div>
                                    <!-- end content -->
                        
                                    <!-- sidebar -->
                                    <div class="col-12 col-xl-4">
                                        <div class="asset__info">
                                            <div class="asset__desc">
                                                <h2>Descriptions</h2>
                                                <p>`+json.description+`</p>
                                            </div>
                                            <ul class="asset__authors">
                                                <li>
                                                    <span>Creator</span>
                                                    <div class="asset__author asset__author--verified">
                                                        <img src="img/avatars/avatar5.jpg" alt="">
                                                        <a class="thisowner">`+ ownernft+`</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Collection</span>
                                                    <div class="asset__author ">
                                                        <img src="img/avatars/avatar9.jpg" alt="">
                                                        <a href="`+metalink+`" target="_blank">The Meta Key</a>
                                                    </div>
                                                </li>
                                            </ul>
                        
                                            </div>
                                            <!-- end tabs -->
                                            <div class="asset__wrap">
                                                <div class="asset__timer">
                                                    <span> Set the Price for Sell </span>
                                                    <br>
                                                    <span>
                                                   
                                                    <input class ="input_get_price" style="padding-top:4px;" type="text" id="SetSell_`+i+`" name="fname"><br>
                                                    </span>
                                                    </div>
                        
                                                <div class="asset__price">
                                                    <span>Current Price</span>
                                                    <span>`+ price+` ETH</span>
                                                </div>
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <!-- actions -->
                                            <div class="asset__btns">
                                                <button class="asset__btn asset__btn--full asset__btn--clr Sell_NFT" id="Sell_`+i+`" type="button" style="bottom: 0;">Sell/Set NFT Price</button>
                                            </div>
                                            <!-- end actions -->
                                        </div>
                                    </div>
                                    <!-- end sidebar -->
                                </div>
                            </div>
                            <!-- end modal asset -->
                            `)
                            argument2 = true;
                        }
                        if( argument1 && argument2){
                            $("#tab2").append(`
                            <div class="col-12 col-sm-6 col-lg-4">
                            <!-- card -->
                            <div class="card">
                                <a href="#modal-asset_`+i+`_cancel" class="card__cover open-modal">
                                    <div class = "crop">
                                    <img id="urlimage_`+i+`" src="`+imageurl+`" width="300" height="300" alt="">
                                    </div>  
                                </a>
                                <h3 class="card__title"><a id="name_`+i+`" href="#modal-asset" class="open-modal">`+json.name+`</a></h3>
                                <div class="card__author">
                                    <img src="img/avatars/avatar4.jpg" alt="">
                                    <a class="thisowner" id="owner">`+ownernft+`</a>
                                </div>
                                <div class="card__info">
                                    <div class="card__price">
                                        <span>Reserve price</span>
                                        <span>`+price+` ETH</span>
                                    </div>
                                    
                                    <button class="card__likes card__likes--active" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                        <span>37</span>
                                    </button>
                                </div>
                            </div>
                            <!-- end card -->
                            </div> 
                            `)
                            $("#appendmodal").append(`
                            <!-- modal asset -->
                            <div id="modal-asset_`+i+`_cancel" class="zoom-anim-dialog mfp-hide modal modal--asset">
                                <button class="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
                        
                                <div class="row">
                                    <!-- content -->
                                    <div class="col-12 col-xl-8">
                                        <div class="asset__item">
                                            <img src="`+imageurl+`" alt="">
                        
                                            <!-- share -->
                                            <div class="share share--asset">
                                                <a href="#" class="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"/></svg> <span>share</span></a>
                                                <a href="#" class="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z"/></svg> <span>tweet</span></a>
                                                <a href="#" class="share__link share__link--link"><svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"/></svg> <span>copy link</span></a>
                                            </div>
                                            <!-- end share -->
                        
                                            <!-- likes -->
                                            <button class="asset__likes" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
                                                <span>358</span>
                                            </button>
                                            <!-- end likes -->
                                        </div>
                                    </div>
                                    <!-- end content -->
                        
                                    <!-- sidebar -->
                                    <div class="col-12 col-xl-4">
                                        <div class="asset__info">
                                            <div class="asset__desc">
                                                <h2>Descriptions</h2>
                                                <p>`+json.description+`</p>
                                            </div>
                                            <ul class="asset__authors">
                                                <li>
                                                    <span>Creator</span>
                                                    <div class="asset__author asset__author--verified">
                                                        <img src="img/avatars/avatar5.jpg" alt="">
                                                        <a class="thisowner">`+ ownernft+`</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Collection</span>
                                                    <div class="asset__author ">
                                                        <img src="img/avatars/avatar9.jpg" alt="">
                                                        <a href="`+metalink+`" target="_blank">The Meta Key</a>
                                                    </div>
                                                </li>
                                            </ul>
                        
                                            </div>
                                            <!-- end tabs -->
                                            <div class="asset__wrap">
                                                <div class="asset__price">
                                                    <span>Price</span>
                                                    <span>`+ price+` ETH</span>
                                                </div>
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <!-- actions -->
                                            <div class="asset__btns">
                                                <button class="asset__btn asset__btn--full asset__btn--clr Remove_NFT" id="Remove_`+i+`" type="button" style="bottom: 0;">Remove From Market</button>
                                            </div>
                                            <!-- end actions -->
                                        </div>
                                    </div>
                                    <!-- end sidebar -->
                                </div>
                            </div>
                            <!-- end modal asset -->
                            `)
                        }
                        $('.open-modal').magnificPopup({
                
                            fixedContentPos: true,
                            fixedBgPos: true,
                            overflowY: 'auto',
                            type: 'inline',
                            preloader: false,
                            focus: '#username',
                            modal: false,
                            removalDelay: 300,
                            mainClass: 'my-mfp-zoom-in',
                   
                        });
                        $('.modal__close').on('click', function (e) {
                            e.preventDefault();
                            $.magnificPopup.close();
                        });


                }      
                ).catch((err)=>{console.log(err)})        
            }
        }).catch((err)=>{console.log(err)})
        
    }
    $(document).on('click', '.Remove_NFT', async function(){
        var id = this.id.split("_");
        contract_MM.methods.offSell(id[1]).send({from:currentAccount},function(err,res){
            if(err){
                console.log(err);
            }
            else{
                alert("This NFT is removing From the Market Place");
              //  getimage();
            }
        })
    });
    $(document).on('click', '.Buy_NFT', async function(){
        var id = this.id.split("_");
        let owner = await contract_MM.methods.ownerOf(id[1]).call();
        console.log(owner);
        if( currentAccount == null){
            alert("Please logging metamask");
        }
        else if (owner.toLowerCase() == currentAccount){
            alert("You cannot buy your own NFT");
        }else{
            
            buyNFT(id[1]);
        }
    });
    //

    
    $(document).on('click', '.Sell_NFT', async function(){
        var id = this.id.split("_");
        var price = web3.utils.toWei($("#SetSell_"+id[1]).val()+"",'ether');
        if (price < 0.001){
            alert("The value should be more than 0.001");
        }
        contract_MM.methods.setSell(id[1],price).send({from:currentAccount},function(err,res){
            if(err){
                console.log(err);
                
            }
            else{
                alert("You just set Your NFT at Price "+ web3.utils.fromWei(price+"","ether")+" Eth");
              //  getimage();
            }
        })
    });



    async function buyNFT (id){
        let buyprice;
        await contract_MM.methods.getNftPrice(id).call().then((pr) => {
            buyprice = web3.utils.fromWei(pr+"", 'ether');
        })
        await contract_MM.methods.buy(id).send({
            from: currentAccount,
            value: web3.utils.toWei(buyprice+"",'ether')
        })
    }


    $('#uploadForm').submit(function(e) {
        e.preventDefault();
        var fd = new FormData($(this)[0]);
        $("#status").empty().text("File is uploading...");
        $.ajax({
            url: '/upload',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                console.log(data);
                currentImage = data;
                $("#showImage").attr("src","images/"+data);
            }
        });
        //Very important line, it disable the page refresh.
    return false;
    });    
    $('#head_home').click(()=>{
            $("#allimage").show()
            $(".home").show()
            $(".author").hide()
            $("#Create-Form").hide()
            currentImage = null;
    })

    $('#head_profile').click(()=>{
        if(currentAccount == null){
            alert("Please connect the Metamask");
        }
        else{
            $("#allimage").hide()
            $(".home").hide()
            $(".author").show()
            $("#Create-Form").hide()
            currentImage = null;
        }
    })
    $("#Refresh").click(()=>{getimage();  $(".loader").hide();})
    // {}
    // open-modal 
    $('#create, #Tab-Create').click(()=>{
        if(currentAccount == null){
            alert("Please connect the Metamask");
        }
        else{
        $("#allimage").hide()
        $(".home").hide()
        $("#Create-Form").show()
        $(".author").hide()
        currentImage = null;
        $("#NFTname").empty();
        $("#NFTDescription").empty();
        $("#showImage").attr("src","");
        $("#userimage").empty();
        }
    })



    window.ethereum.on('accountsChanged',function(accounts){
        currentAccount = accounts[0];
        console.log("Current Account:"+currentAccount);
        maxLength = currentAccount.length;
        $("#btn_connect_MM").text(currentAccount.substr(0, 7)+"..."+currentAccount.substr(maxLength-4, maxLength));
        $("#auth_address").text(currentAccount.substr(0, 7)+"..."+currentAccount.substr(maxLength-4, maxLength));
        getimage();
    })
});


async function connect_MetaMask(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts
}
function check_MetaMask(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        $("#mm").hide(0);
        $("#login").show(0);
      }else{
          console.log('MetaMask is not install!');
          $("#mm").show(0);
          $("#login").hide(0);
      }
}

