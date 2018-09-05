function namespace(oNamespace, sPackage) {
    var json=oNamespace;
    var para=sPackage.split('.');
    var current=oNamespace;
    para.forEach(function(value,index,arr){
        if(current[value]===void 0){
            current[value]={};
            current=current[value]
        }
    })
    console.log(json)
    return json
}
namespace({a: {test: 1, b: 2}}, 'a.b.c.d');