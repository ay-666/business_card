const express = require('express');
const zod = require('zod');
const { cardSchema } = require('./types');
const { Card }  = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.post('/cards/addCard',async function(req,res){
    const card = req.body;

    const check = cardSchema.safeParse(card);

    if(!check.success){
        res.status(411).json({
            msg:'Incorrect input'
        });
        return ;
    }
    const newCard = await Card.create({
        name:card.name,
        description:card.description,
        interests:card.interests
    });

    if(newCard){
        res.json({
            msg:'Card created successfully'
        })
    }else{
        res.json({
            msg:'!some error occured!'
        });
    }



});

app.get('/cards',async function (req,res){
    const cards = await Card.find({});
    res.json({
        cards
    });

});

app.put('/cards/updateCard',async function(req,res){
    const id = req.body.id;

    let tobeUpdated = {};
    if(req.body.hasOwnProperty('name')){
        tobeUpdated['name'] = req.body.name;
    }
    if(req.body.hasOwnProperty('description')){
        tobeUpdated['description'] = req.body.description;
    }
    if(req.body.hasOwnProperty('interests')){
        tobeUpdated['interests'] = req.body.interests;
    }


    try{
        const updatedCard = await Card.updateOne({_id:id},tobeUpdated);
        res.json({
            msg:'Card updated successfully'
        })

    }catch(e){
        res.json({
            msg:'!some error occured!',
            eror:e
        });
    }

    

    
     
});

app.delete('/cards/deleteCard',async function(req,res){
    const id = req.body.id;
    try{
        await Card.deleteOne({_id:id});
        res.json({
            msg:'Deleted successfully'
        })
    }catch(e){
        res.json({
            msg:e
        });
    }
    

});


app.listen(3000);
