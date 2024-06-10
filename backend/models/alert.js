const uuid = require('uuid');

class Alert {
    constructor() {
        this.id = uuid.v4();
        this.createdAt = new Date();
    }
}

module.exports = Alert;