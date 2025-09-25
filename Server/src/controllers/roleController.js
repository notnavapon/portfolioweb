import Role from "../models/roleModel.js";


export const getRoleOfUser = async(req , res) =>{
    try{
        const { email } = req.query;
        const user = await Role.findOne({ email: email })
        res.status(200).json(user.role)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


// set role for user
export const setRoleOfUser = async(req , res) => {
    const {email, role} = req.body;

    try {
        if(!email || !role) 
            return res.status(400).json({ message: "All fields are required" });

        const user = await Role.findOne({ email });
        if (user) 
            return res.status(400).json({ message: "Email already exists" });

        const setRole = new Role({ email, role });
        const savedRole = await setRole.save(); // await

        return res.status(201).json({
            message: "Role created successfully",
            role: savedRole
        });

    } catch (error) {
        console.error("Error in setRoleOfUser:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const changeRoleOfUser = async(req , res) =>{

}
