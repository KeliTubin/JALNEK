import express from "express";
import { getConnection } from "typeorm";
import User from "../../entities/user";
const router = express.Router();

router.get('/:id', async (req, res)=> {
    try{
        const {id} = req.params;
        const user = getConnection().getCustomRepository(User).findOne({id: id});
        if (!user){
            return res.send({message: 'no user found given ID'});
        }

        return res.send({id: id});
    }   catch (error) {
        return res.send({
            error: 'Unable to create new user',
            message: 'unknown error'
        });
    }
});

export default router;