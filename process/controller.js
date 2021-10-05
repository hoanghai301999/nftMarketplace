const e = require("express");
var fs = require ("fs");
var nftstorage = require("nft.storage");
var multer = require('multer');
module.exports = function(app,obj){

    app.get("/testmint",function(req,res){
        res.render("testMint");
    })

    app.get("/",function(req,res){
      res.render("index2");  
    })
    app.get("/author",function(req,res){
      res.render("author");  
    })
    /// Create IPFS
    app.post("/mint",async function(req,res){
        if(!req.body.Name||!req.body.File||!req.body.Day||!req.body.Description){
            res.json({ketqua:0,status:"Thieu Tham So"});
        }
        else{
            try {
                url_ipfs = await ipfs(req.body.Name,req.body.File,req.body.Day,req.body.Description);
           
            } catch (e) {
                res.json({ketqua:0,status:e});
            }
            finally {
                res.json({ketqua:1,status:url_ipfs});
            }
        }
    })

    async function ipfs(fname,file,day,des){
        const client = new nftstorage.NFTStorage({ token: obj.nftapi })
        const metadata = await client.store({
        name: fname,
        date: day,
        description: des, 
        imagename:file,
        image: new nftstorage.File([await fs.promises.readFile('./public/images/'+file)], file, {
            type: 'image/jpg',
          }),
        })
        console.log(metadata.url)
        return metadata.url;
    }
    /// Multer 
    // SET STORAGE
   var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
    })
    
    var upload = multer({ 
        storage: storage ,
        limits:{filesize:100000}
    }).single('myImage');

    app.post('/upload',function(req,res){
      upload(req,res,function(err) {
          if(err) {
              return res.send("Error uploading file. " + err);
          }
          res.send(req.file.filename);
      });
  });

}