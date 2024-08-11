module.exports = (req, res) => {
    if(req.url === "/api/movies"){
        try{
            console.log("Req body:", req.body) ;
        }catch(err){
            console.log(err);
        }
    }
}