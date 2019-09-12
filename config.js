const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://dbuser:zaqxsw21@cluster0-7osnb.mongodb.net/test',
    port : process.env.PORT || 3000,
    host :process.env.HOST || 'localhost',
    publicRoute : process.env.PUBLIC_ROUTE || 'app'

};

module.exports = config