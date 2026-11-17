export const adminAuth = (req,res, next) =>{
    console.log("Admin auth is getting checked")
    let token = "xyz";
    let isAdminAuthorized = token = "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized token");
    }else{
        next();
    }

};