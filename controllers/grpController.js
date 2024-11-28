import grpModel from "../models/grpModel.js"


const addGrp = async function (req, res) {
    // console.log(req.body)
    try{
        const grpInstance = new grpModel(req.body)
        var result = await grpInstance.save();
        console.log(result);
        res.status(201).send({msg : "Group Addedd", data: result})
    }
    catch(error){
        res.send({error: error.message})
    }
}

const showGroup = async function (req, res) {
    try{
        var result = await grpModel.find()

        res.send({msg : "Showing Groups", data : result})

    }
    catch(err){
        res.send ({msg : err})
    }
}

const showGroupById = async function (req, res) {
    try{
        var result = await grpModel.findById(req.params.grpId)

        res.send({msg : "Showing Groups", data : result})

    }
    catch(err){
        res.send ({msg : err})
    }
}

const updateGroupById = async function(req, res) {
    try{
        var dbData = await grpModel.findByIdAndUpdate(req.params.grpId, req.body);
        res.status(200).send({data:null, status:true , message:"Group Updated SuccessFully"})
    }
    catch{
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}

const deleteGroupById = async function(req, res) {
    try{
        var dbData = await grpModel.findByIdAndDelete(req.params.grpId);
        res.status(200).send({data:null , status:true, message:'Group Deleted successfully'})
    }
    catch(err){
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}

export {
    addGrp,
    showGroup,
    showGroupById,
    updateGroupById,
    deleteGroupById
}