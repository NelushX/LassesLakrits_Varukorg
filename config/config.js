if (process.env.NODE_ENV !== 'production') 

const config = {
    databaseURL: process.env.DATABASE,
    mail: process.env.MAIL
}

module.exports = config;