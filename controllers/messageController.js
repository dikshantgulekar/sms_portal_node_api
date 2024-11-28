import messageModel from "../models/MessageModel.js";


const addMessage = async function (req, res) {
    console.log(req.body)

    try{
        var messageInstance = new messageModel(req.body);
        var result = await messageInstance.save()
        console.log(result)

        res.send({msg : "Message Added", data : result})
    }
    catch(err){
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
}

const showMessage = async function (req, res) {
    try{
        var result = await messageModel.find()
        console.log(result)

        res.send({msg : "showing Message", data : result})
    }
    catch(err){
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
}


const showMessageWitId = async(req, res)=>{
    console.log(req.params.idFromReact)
    try{
        var result = await messageModel.find({libid : req.params.idFromReact})
        res.send({ data : result})
    }
    catch(err){
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
    // res.send("ROUTE CALLED")
}
export{
    addMessage,
    showMessage,
    showMessageWitId
}