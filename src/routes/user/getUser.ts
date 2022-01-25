import express from "express";
const router = express.Router();

router.post('/:id', async (req, res)=> {
    try{
        const {id} = req.params;

        return res.send({id: id});
    }   catch (error) {
        return res.send({
            error: 'Unable to create new user',
            message: 'unknown error'
        });
    }
});

export default router;