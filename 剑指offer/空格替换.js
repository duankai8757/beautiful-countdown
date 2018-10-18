
function replaceSpace(str)
{
    var a=str.replace(/\s/g,'%20');
    return a
}
console.log(replaceSpace('We Are Happy'))