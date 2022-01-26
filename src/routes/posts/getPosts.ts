import express from "express";
import Post from "../../entities/Post";
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const {userId, skip, take} = req.query;

// ÜKS VARIANT POST FIND
/*         const posts = await Post.find({
            take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0,
            order: {
                createdAt: 'DESC'
            }
        }); */

// TEINE VARIANT QUERY BUILDER
        // console.log(...posts)
        const postsQuery = Post.createQueryBuilder('post')
            .innerJoinAndSelect('post.author', 'author')
            .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
            .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

        if(userId != undefined) {
            postsQuery.where('id = :userId', {userId: userId});
        }

        const posts = await postsQuery.getMany();

        return res.json({posts: posts});
    
    }   catch(error){
        if (error instanceof Error) {
            return res.json({
                error: 'VIGA getPosts.ts',
                message: error.message
            });
        }
        
    }
    
});

export default router;