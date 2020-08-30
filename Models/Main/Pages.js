// Create our pages class to make item pages.
class Pages {
    /**
     * @description Set the current page with it's settings.
     * @param {Array} arr - The array to use. 
     * @param {Number} itemsPerPage - Items per page to display.
     * @param {Number} page - The page to display. 
     */
    set(arr, itemsPerPage, page=1) {
        const maxPages = Math.ceil(arr.length / itemsPerPage);

        if (page < 1 || page > maxPages) return null;
        return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
};

// Export our pages class.
module.exports = Pages;