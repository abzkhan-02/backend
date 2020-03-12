
let array=[
    {
        apikey:1,
        email:"abz@gmail.com",
        fName:'abz',
        lName:"kh",
        password:"test",
        phone:123,
        address:{
            street:"xyz",
            city:"banglore",
            state:"KA",
            pincode:26627
        }
    }
];

const fetchUserByApikey = (req,res,next) => {
        let { apikey } = req.params;
        apikey=parseInt(apikey)
        console.log(typeof(apikey));
        let findUser=array.filter(u=>u.apikey===apikey); 
        res.json({message:"by controller", findUser});

};

const registerUser = (req, res, next) => {
    console.log(req.body);
    const { email, lName, fName, password, phone} = req.body ;
    let userObj=    {
        apikey:2,email,fName,lName,password,phone,
        address:{
            street:null,
            city:null,
            state:null,
            pincode:null
        }
    }
    array.push(userObj)
    console.log(array);
    res.json({message:"User Registred Successfull...", array});
    
};

const sendUserAdmin = (req,res,next) => {
        res.json({message:"I am Arbazzz"});
    }




// 
exports.fetchUserByApikey=fetchUserByApikey;
exports.registerUser=registerUser;
exports.sendUserAdmin=sendUserAdmin;











