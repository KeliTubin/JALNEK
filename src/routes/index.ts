import express from 'express';
// import fs from 'fs';
import createUser from './user/createUser';
import getUser from './user/getUser';
import getUserS from './user/getUserS';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';

const router = express.Router();
// var userRoutes: String[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function(file){
//     userRoutes.push(file.substring(0, file.indexOf('.')));
// });
router.use('/users', [createUser, getUser, getUserS]);
router.use('/posts', [getPost, getPosts])

export default router;






