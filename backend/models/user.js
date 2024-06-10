class User {
    constructor(username, communities, posts, createdAt, alerts) {
        this.username = username;
        this.communities = communities;
        this.posts = posts;
        this.createdAt = createdAt;
        this.alerts = alerts;
        this.id = Math.random().toString(36).substr(2, 9);
    }
}