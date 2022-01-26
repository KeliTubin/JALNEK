import  express from 'express';
import Post from '../../entities/Post';
import {v4 as uuidv4} from 'uuid';
import User from '../../entities/User';
const router = express.Router();

interface PostInput {
    authorId: string;
    title: string;
    summary: string;
    content: string;
}

router.post('/', async (req, res) => {
    try{

        const {authorId, title, summary, content} = req.body as PostInput;
    
        const user = await User.findOne({id: authorId});
        if(!user) {
            return res.json({message: 'No user found. Can not post.'});
        }
    
        const post = Post.create({
            id: uuidv4(),
            authorId: user.id,
            title: title,
            metaTitle: title.replace(/\s/g,'-'),
            summary: summary,
            content: content,
            published: false
        });
        
    
        const newPost = await post.save();
        if(!newPost) {

            console.log({error: 'No user found. Can not post.'});

            return res.json({
                error: 'Unable to create new post (createPost.ts)',
                message: 'typeorm save'
            });
        }   

        return res.json(newPost);
    }   catch(error){
        console.log('Unknow database error createPost.ts');
        if(error instanceof Error) {
            return res.json({
                error: 'Unable to create new post (createPost.ts)',
                message: error.message
            });
        }
    }
});


export default router;