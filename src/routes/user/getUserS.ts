import express from "express";
import { getConnection } from "typeorm";
import User from "../../entities/user";
const router = express.Router();

router.get('/', async (req, res)=> {
    try{
        const users = await User.find();
        if (!users){
            return res.send({message: 'no user found given ID'});
        }

        return res.send(users);
    }   catch (error) {
        return res.send({
            error: 'Unable to create new user',
            message: error.message
        });
    }
});

export default router;