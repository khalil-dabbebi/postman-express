const contactSchema = require ('../Model/Contact');

const getAllcontactsById= async(req, res)=>{
    try {
        const {id}=req.params;
        console.log("id",id);
        const contact= await contactSchema.findById(id);
        res.status(200).json ({msg:'contact', contact}); 
    } catch (error) {   
        console.log(error);
        res.send('you have a problem');
    }
}

const updatecontact = async(req,res)=>{
    try {
        const {id}=req.params;
        console.log("id",id);
        const updatecontact = await contactSchema.findByIdAndupdate(id,{$set:{...req.body}});
        console.log("Updated  contact",updatecontact);
        res.status(200).json({msg:'contact updated',updatecontact});
    } catch (error) {
        console.log(error);
        res.send ('you have a problem')
    }
}

const getAllcontacts= async(req,res)=>{
    try {
        const contact =await contactSchema.find();
        res.status(200).json({msg:'you got all the contacts',contact});
    } catch (error) {
        console.log(error);
        res.send('you havea problem');
    }
}




const addNewcontact= async(req,res)=>{
    try {
        const newcontact = new contactSchema(req.body);
        console.log("new contact",req.body);
        await newcontact.save();
        res.status(200).json({msg:'you added new contact',newcontact})
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
    }
};


const removecontact = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedContact = await ContactSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Contact', deletedContact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

module.exports={addNewcontact,getAllcontacts,getAllcontactsById,updatecontact,removecontact}; 