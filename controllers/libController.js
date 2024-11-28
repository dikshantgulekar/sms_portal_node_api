import libModel from "../models/libModel.js";

const addLibrary = async function (req, res) {
    console.log("addLibrary");
    console.log(req.body);
    try {
        const libInstance = new libModel(req.body); 
        const result = await libInstance.save(); 
        console.log(result);
        res.status(201).send({ msg: "Library Added", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
};

const showLibrary = async function (req, res) {
    try {
        const result = await libModel.find(); 
        console.log(result);
        res.status(200).send({ msg: "Showing Libraries", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err, "error");
    }
};

const showLibraryById = async (req,res)=>{
    try{
        var ans = await libModel.findById(req.params.libraryId)
        console.log(ans)
        res.status(200).send({ msg : "Showing Library By Id", data:ans });
    }
    catch(err){
        res.status(500).send({err:err.message})
    }
}

const updateLibraryById = async function (req,res){
    try{
        var ans = await libModel.findByIdAndUpdate(req.params.libraryId, req.body);
        console.log(ans)
        res.status(200).send({msg : "Library updated", data : ans})
    }
    catch{
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}

const deleteLibraryById = async function(req, res) {
    try{
        var ans = await libModel.findByIdAndDelete(req.params.libraryId);
        console.log(ans)
        res.status(200).send({msg:"Library Deleted", data : null, status:true})
    }
    catch{
        console.log(err.message);
        res.status(403).send({data:null , message:'No Document Found'});
    }
}

export { 
    addLibrary, 
    showLibrary,
    showLibraryById,
    updateLibraryById,
    deleteLibraryById
};
