const User = require('./user');
const Post = require('./post');
const { v4: uuidv4 } = require('uuid');

// Import necessary files

class Community {
    constructor() {
        this.id = uuidv4();
        this.users = [];
        this.posts = [];
    }
}

module.exports = Community;