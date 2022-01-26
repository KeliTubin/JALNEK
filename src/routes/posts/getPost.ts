import express from "express";
import Post from "../../entities/Post";
const router = express.Router();

router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;

        const post = await Post.findOne({id: id});

        if(!post){
            return res.send({
                message: 'no post with given ID'
            })
        }
        return res.send(post);
    }   catch(error){
        if (error instanceof Error){
            return res.send({
                error: 'VIGA getPost.ts',
                message: error.message
            });
        }

    }
    
});
export default router;