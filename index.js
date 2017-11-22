//Private class param: Declate a global private param within each instance
var ClassParam = (function(){
  var privateParam = 0;
  
  function ClassParam(){}
  
  ClassParam.prototype.sumToPrivateParam = function(num){
    return privateParam += num;
  };
  return ClassParam;
})();

//Instance Param: Declate a private param within each instance
//Cons: Each instance has the method defined instead of define the method in the Class prototype.
//this lead to memory overhead. If you create 1000 instances, 1000 functions are declared.
var InstanceParam = (function(){
  function InstanceParam(){
    var privateParam = 0;
    
    this.sumToPrivateParam = function(num){
      return privateParam += num;
    };
  }
  return InstanceParam;
})();

//Instance Param inside prototype: Declate a private param within each instance. Now you don't have
//to declare a function per instance but, you have a internal variable per instance which is accesible
//only by the symbol defined within the class
var InstanceParamProto = (function() {
    var privateParam = Symbol('privateParam');

    function InstanceParamProto() {
        this[privateParam] = 0;
    }

    InstanceParamProto.prototype.sumToPrivateParam = function(num) {
        return this[privateParam] += num;
    };

    return InstanceParamProto;
}());


test('ClassParam', ClassParam);
test('InstanceParam', InstanceParam);
test('InstanceParamProto', InstanceParamProto);


function test(title, Constructor){
  var classParam1 = new Constructor();
  logResults(`${title} -> Instance 1`, classParam1);
  var classParam2 = new Constructor();
  logResults(`${title} -> Instance 2`, classParam2);
}

function logResults(title, instance){
  console.log(`\n${title} -> instance.privateParam -> ${instance.privateParam}`);
  console.log(`${title} -> instance.sumToPrivateParam(1) -> ${instance.sumToPrivateParam(1)}`);
  console.log(`${title} -> instance.sumToPrivateParam(3) -> ${instance.sumToPrivateParam(3)}`);
  console.log(`${title} -> instance.sumToPrivateParam('bla') -> ${instance.sumToPrivateParam('bla')}`);
}
