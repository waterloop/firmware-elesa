class BMS_Data {
    constructor() {
        this.temperature = new Array();
        this.voltage = new Array();
        this.pack1_current = 0;
        this.pack2_current = 0;
        this.pack1_Voltage = 0;
        this.pack2_Voltage = 0;
    }
}
class BMS_DATA_MESSAGE {
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.voltage = 0.0;
        this.current = 0.0;
        this.battery_temperature = new Array(6);
        this.error_message = "";
    }   
}

class LIM_DATA_MESSAGE{
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.temperature = new Array(6);
    }   
}

class IMU_DATA_MESSAGE{
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.imu_data =  0.0;
    }   
}

class PRESSURE_SENSOR_MESSAGE{
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.pressure_sensor_data =  0.0;
    }   
}

class STATUS_UPDATE_MESSAGE{
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.state = "";
    }   
}

class CATCH_ALL_ERROR_MESSAGE{
    constructor() {
        this.id = 0;
        this.timestamp = "";
        this.errors = "";
    }   
}
