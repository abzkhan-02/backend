const sendUser = (req,res,next) => {

    res.json({message:"by controller"});

}

const sendUserAdmin = (req,res,next) => {
        res.json({message:"I am Arbazzz"});
    }

exports.sendUser=sendUser;
exports.sendUserAdmin=sendUserAdmin;











