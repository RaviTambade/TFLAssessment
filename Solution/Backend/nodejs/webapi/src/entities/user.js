class User {
    constructor({
        id = null,
        contact = null,
        password = null,
        status = null,
        createdAt = null,
        updatedAt = null
    } = {}) {
        this.id = id;
        this.contact = contact;
        this.password = password;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = User;