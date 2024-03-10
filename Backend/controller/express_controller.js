const helloWorld = (req, res, next) => {
    res.send("Hello World");
}
const postBMS = (BMS_Data, req, res, next) => {
    res.json({message: "POST new tea"});
}
const getBMS = (BMS_Data, req, res, next) => { 
    res.json({message: "GET new tea"});
}

const postBMSMessage = (BMS_DATA_MESSAGE, req, res, next) => {
    res.json({message: "POST new BMS Data Message"});
}
const getBMSMessage = (BMS_DATA_MESSAGE, req, res, next) => { 
    res.json({message: "GET new BMS Data Message"});
}

const postLIMMessage = (LIM_DATA_MESSAGE, req, res, next) => {
    res.json({message: "POST new LIM Data Message"});
}
const getLIMMessage = (LIM_DATA_MESSAGE, req, res, next) => { 
    res.json({message: "GET new LIM Data Message"});
}

const postIMUMessage = (IMU_DATA_MESSAGE, req, res, next) => {
    res.json({message: "POST new IMU Data Message"});
}
const getIMUMessage = (IMU_DATA_MESSAGE, req, res, next) => { 
    res.json({message: "GET new IMU Data Message"});
}

const postPressureMessage = (PRESSURE_SENSOR_MESSAGE, req, res, next) => {
    res.json({message: "POST new Pressure Sensor Data Message"});
}
const getPressureMessage = (PRESSURE_SENSOR_MESSAGE, req, res, next) => { 
    res.json({message: "GET new Pressure Sensor Data Message"});
}

const postStatusUpdate = (STATUS_UPDATE_MESSAGE, req, res, next) => {
    res.json({message: "POST new Status Update"});
}
const getStatusUpdate = (STATUS_UPDATE_MESSAGE, req, res, next) => { 
    res.json({message: "GET new Status Update"});
}

const postAllErrorMessage = (CATCH_ALL_ERROR_MESSAGE, req, res, next) => {
    res.json({message: "POST new Catch All Error Message"});
}
const getAllErrorMessage = (CATCH_ALL_ERROR_MESSAGE, req, res, next) => { 
    res.json({message: "GET new Catch All Error Message"});
}

module.exports = {
    helloWorld,
    getBMS,
    postBMS, 
    postBMSMessage, 
    getBMSMessage, 
    postLIMMessage, 
    getLIMMessage, 
    postIMUMessage, 
    getIMUMessage, 
    postPressureMessage, 
    getPressureMessage, 
    postStatusUpdate, 
    getStatusUpdate, 
    postAllErrorMessage, 
    getAllErrorMessage
};