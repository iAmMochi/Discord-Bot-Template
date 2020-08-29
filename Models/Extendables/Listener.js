// Create an extendable listener/event file.
class Listener {
    /**
     * @param {string} name - The event to fire. 
     */
    constructor(name) {
        this.name = name;
    }

    // This will execute when the listener/event fires.
    fire() {
        throw new Error(`Listener ${this.name} doesn't do anything!`);
    }
};

// Export our extendable listener/event class.
module.exports = Listener;