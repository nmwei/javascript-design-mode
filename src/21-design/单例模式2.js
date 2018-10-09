const single = {
  a() {
    console.log('1')
  }
}

single.a()


const getSingle =fn => {
  let result
  return () => result || (result = fn(arguments)) 
}

const createObj = () => new Object();

const createSingleObj = getSingle(createObj)
const s1 = createSingleObj()
const s2 = createSingleObj()
console.log(s1) //{}
console.log(s1 === s2) //true
