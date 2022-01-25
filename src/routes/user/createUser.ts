import  express from 'express';
import User from '../../entities/user';
import {v4 as uuidv4} from 'uuid';
const router = express.Router();

interface UserInput {
    firstName: string;
    middleName?: string;
    lastName: string;
    mobile: string;
    email: string;
}
// KÜSIMÄRK middleName JÄREL TÄHENDAB, ET VÄLI ON OPTIONAL TÄITMISEKS
router.post('/', async (req, res)=>{
    try {
        let {
            firstName, 
            middleName, 
            lastName, 
            mobile, 
            email 
        } = req.body as UserInput;

        // User SUURE TÄHEGA TULI user.ts FAILIST class VÄÄRTUSELT
        const user = new User();
        user.id = uuidv4();
        user.firstName = firstName;
        user.middleName = middleName =! null ? middleName : '';
        user.lastName = lastName;
        user.mobile = mobile;
        user.email = email;

        let newUser = await user.save();
        if(!newUser){
            throw new Error();
        }
        
        return res.send(newUser);
    }   catch(error){
        if (error instanceof Error) {
            return res.send({
                error: 'Unable to create new user', 
                message: error.message
            });
        }
        
        return res.send({
            error: 'VIGA createUser.ts',
            message: error.message
        });
    }    
});

export default router; 