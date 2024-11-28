import contactModel from "../models/contactModel.js";



const addContact = async function(req, res) {
    console.log(req.body);
    try {
        const contactInstance = new contactModel(req.body); 
        const result = await contactInstance.save(); 
        console.log(result);
        res.status(201).send({ msg: "Contact Added", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
}

const showContact = async function(req, res) {
    try{
        const result = await contactModel.find()
        res.status(200).send({ msg: "Showing Contacts", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err, "error");
    }
}


const showContactWithId = async (req, res)=>{
    console.log(req.params.idFromReact);
    try{
        var result = await contactModel.find({ groupid : req.params.idFromReact })
        res.send({ data : result});
    }
    catch(err){
        res.status(500).send({ err: err.message });
        console.log(err, "error"); 
    }
}

export {
    addContact,
    showContact,
    showContactWithId
}