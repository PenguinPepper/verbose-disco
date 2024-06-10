const { v4: uuidv4 } = require('uuid');

// Import necessary files

class Posts {
    constructor(userid, community, caption, image) {
        this.id = uuidv4();
        this.userid = userid;
        this.community = community;
        this.caption = caption;
        this.image = image;
        this.createdAt = new Date();
        this.comments = [];
    }
}

module.exports = Posts;