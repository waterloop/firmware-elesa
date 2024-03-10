const helloWorld = (req, res, next) => {
    res.send("Hello World");
}
const postBMS = (BMS_Data, req, res, next) => {
    res.json({message: "POST new tea"});
}
const getBMS = (BMS_Data, req, res, next) => { 
    res.json({message: "GET new tea"});
}

module.exports = {
    helloWorld,
    getBMS,
    postBMS
};