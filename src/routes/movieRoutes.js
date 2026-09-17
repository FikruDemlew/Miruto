import express from 'express';

const router = express.Router();

router.get('/id', (req,res) => {
    res.json({message: "hello"});
})

export default router;