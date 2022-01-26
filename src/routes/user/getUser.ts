import express from "express";
import { getConnection } from "typeorm";
import User from "../../entities/User";
const router = express.Router();

router.get('/:id', async (req, res)=> {
    try{
        const {id} = req.params;
        const user = await User.findOne({id: id});
        if (!user){
            return res.json({message: 'no user with given ID'});
        }

        return res.json(user);
    }   catch (error) {
        return res.json({
            error: 'VIGA getUser.ts',
            message: error.message
        });
    }
});

export default router;