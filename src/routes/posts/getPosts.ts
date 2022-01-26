import express from "express";
import Post from "../../entities/Post";
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const {skip, take} = req.query;

// ÜKS VARIANT POST FIND
        const posts = await Post.find({
            take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0,
            order: {
                createdAt: 'DESC'
            }
        });

// TEINE VARIANT QUERY BUILDER
    //     console.log(...posts)
    //     const postForUser = await Post.createQueryBuilder('post')
    //     .innerJoin('post.author', 'author')
    //     .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
    //     .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0)
    //     .getMany();
    
    // res.send(postForUser);

        if (!posts) {
            return res.send({message: 'no posts with given ID'});
        }
        return res.send(posts);
    
    }   catch(error){
        return res.send({
            error: 'VIGA getPosts.ts',
            message: error.message
        });
    }
    
});

export default router;