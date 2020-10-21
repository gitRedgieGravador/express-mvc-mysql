var Encryptor = require('simple-encryptor');

class Encryption {
    constructor() {
        this.masterkey = "mymasterkey123456"
        this._crypto = Encryptor(this.masterkey)
    }
    encrypt(data) {
        return this._crypto.encrypt(data);
    }
    decrypt(cyphertext) {
        return this._crypto.decrypt(cyphertext)
    }
}

module.exports = Encryption;