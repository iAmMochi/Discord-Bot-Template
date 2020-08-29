// Exportations to get our models easier.
module.exports = {
    // Our system models.
    Datifier: require('./System/Datifier'),
    Logger: require('./System/Logger'),

    // Our main models.
    Client: require('./Main/Client'),

    // Our extendable models.
    Listener: require('./Extendables/Listener'),
    Command: require('./Extendables/Command'),

    // Our handler models.
    ListenerHandler: require('./Handlers/ListenerHandler'),
    CommandHandler: require('./Handlers/CommandHandler')
};