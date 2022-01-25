import  express from 'express';
import User from '../../entities/user';
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
        user.firstName = firstName;
        user.middleName = middleName =! null ? middleName : '';
        user.lastName = lastName;
        user.mobile = mobile;
        user.email = email;

        let newUser = user.save();
    }   catch (error) {
        if (error instanceof Error) {
            return res.send({
                error: 'Unable to create new user',
                message: error.message
            });
        }
        return res.send({
            error: 'Unable to create new user',
            message: 'unknown error'
        });
    }
    // )
    //     if(!newUser){
    //         throw new Error();
    //     }
    //     res.send(newUser);
    // }
    // catch(error){
    //     res.send({error 'Unable to create new user', message: error.message});
    // }
});