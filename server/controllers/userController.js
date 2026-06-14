import User from '../models/user.js';
const userController={
    createUser:(req,res)=>{
        const userData=req.body;
        User.create(userData, (error, result) => {
            if (error) {
                console.error('Error creating user:', error);
                res.status(500).json({ error: 'Failed to create user' });
            } else {
                res.status(201).json({ message: 'User created successfully', userId: result.insertId });
            }
        });
    }
}
export default userController;