
console.log(1)
// index.js
const module = require("./module/index");
console.log(module)	//  {name: "zhang", getName: ƒ, changeName: ƒ} "commons"
// module.js
module.exports = {
    name: "zhang",
    getName: function() {
        console.log(this.name);
    },
    changeName: function(n) {
        this.name = n;
    }
};