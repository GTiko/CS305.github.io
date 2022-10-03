"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests



/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

/**
 * 
 * @param {Object} player object with method
 * @returns {number} total number of point 
 */
function findTotalPlayerPoints(player) {
    return player.stats.reduce((totalPoint, current) => totalPoint + current.points, 0);
}

/**
 * 
 * @param {Array} teamStatisticsArr array of object
 * @returns {Array} array of object with jersey and total points
 */
function findTotalScores(teamStatisticsArr) {
    return teamStatisticsArr.map(player => {
        return { jersey: player.jersey, total: findTotalPlayerPoints(player) };
    });
}