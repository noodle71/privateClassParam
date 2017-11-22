# privateClassParam
How to declare a private param within a JS class

3 ways to declare a private variable within a JS Class:
- Private class param
- Private param defining a function per instance
- Private param accesible from prototype

# Run

```bash
node index.js
```

# Result

```bash
ClassParam -> Instance 1 -> instance.privateParam -> undefined
ClassParam -> Instance 1 -> instance.sumToPrivateParam(1) -> 1
ClassParam -> Instance 1 -> instance.sumToPrivateParam(3) -> 4
ClassParam -> Instance 1 -> instance.sumToPrivateParam('bla') -> 4bla

ClassParam -> Instance 2 -> instance.privateParam -> undefined
ClassParam -> Instance 2 -> instance.sumToPrivateParam(1) -> 4bla1
ClassParam -> Instance 2 -> instance.sumToPrivateParam(3) -> 4bla13
ClassParam -> Instance 2 -> instance.sumToPrivateParam('bla') -> 4bla13bla

InstanceParam -> Instance 1 -> instance.privateParam -> undefined
InstanceParam -> Instance 1 -> instance.sumToPrivateParam(1) -> 1
InstanceParam -> Instance 1 -> instance.sumToPrivateParam(3) -> 4
InstanceParam -> Instance 1 -> instance.sumToPrivateParam('bla') -> 4bla

InstanceParam -> Instance 2 -> instance.privateParam -> undefined
InstanceParam -> Instance 2 -> instance.sumToPrivateParam(1) -> 1
InstanceParam -> Instance 2 -> instance.sumToPrivateParam(3) -> 4
InstanceParam -> Instance 2 -> instance.sumToPrivateParam('bla') -> 4bla

InstanceParamProto -> Instance 1 -> instance.privateParam -> undefined
InstanceParamProto -> Instance 1 -> instance.sumToPrivateParam(1) -> 1
InstanceParamProto -> Instance 1 -> instance.sumToPrivateParam(3) -> 4
InstanceParamProto -> Instance 1 -> instance.sumToPrivateParam('bla') -> 4bla

InstanceParamProto -> Instance 2 -> instance.privateParam -> undefined
InstanceParamProto -> Instance 2 -> instance.sumToPrivateParam(1) -> 1
InstanceParamProto -> Instance 2 -> instance.sumToPrivateParam(3) -> 4
InstanceParamProto -> Instance 2 -> instance.sumToPrivateParam('bla') -> 4bla
```
