import express from "express";
import { getConnection } from "typeorm";
import User from "../../entities/user";
const router = express.Router();

router.get('/:id', async (req, res)=> {
    try{
        const {id} = req.params;
        const user = await User.findOne({id: id});
        if (!user){
            return res.send({message: 'no user found given ID'});
        }

        return res.send(user);
    }   catch (error) {
        return res.send({
            error: 'Unable to create new user',
            message: error.message
        });
    }
});

export default router;