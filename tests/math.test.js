 const math = require("../math");

test("Test addition", () => {
        const addition = math(2,4);
        if(addition !== 6)
            throw Error("Addtion shoud be 6 but got "+addition);
})

//Using expect().toBe()
test("Test addition", () => {
    const addition = math(2,4);
    expect(addition).toBe(6);
})

//Using expect().toBe()
test("Test addition with default", () => {
    const addition = math();
    expect(addition).toBe(10);
});


const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0)
                reject(new Error("Number should be not negative!"));
            resolve(a+b);
        }, 2000);
    })
}

test('Test addtion with done function', (done) => {
    add(2,3).then(sum => expect(sum).toBe(5));
    done();  // this line if n ot added the test will fail
})

test('Test addtion with async await', async () => {
    const sum  = await add(2,3);
    expect(sum).toBe(5);
})