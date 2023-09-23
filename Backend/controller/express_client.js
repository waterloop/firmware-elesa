
const postBMS = (BMS_Data, req, res, next) => {
    res.json({message: "POST new tea"});
}
const getBMS = (BMS_Data, req, res, next) => { 
    res.json({message: "GET new tea"});
}

module.exports = {
    getBMS,
    postBMS
};