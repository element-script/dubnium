/* Example plugin file to load. */
module.exports = {
    package_example: require("dubnium-test-pkg"),
    function_example() { console.log("Hello, world") },
    file_example: require("fs").readFileSync("./cool_plugin.js")
}