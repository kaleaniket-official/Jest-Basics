const request =  require("supertest");
const makeApp = require("../app");

const creatUser = jest.fn();
const getUser = jest.fn();

const app = makeApp({
    creatUser,
    getUser
});

describe(" POST /users", () => {
    beforeEach(() => {
        creatUser.mockReset();
    })

    describe("When username and pass given", () => {

        test("Should save username and pass to DB", async () => {
            const bodyData = [
                {user: "username1", pass: "password1"},
                {user: "username2",pass: "password2"},
                {user: "username3",pass: "password3"}
            ]
            for(const body of bodyData){
                creatUser.mockReset();
                const response = await request(app).post("/users").send(body);
                expect(creatUser.mock.calls.length).toBe(1);
                expect(creatUser.mock.calls[0][0]).toBe(body.user);
                expect(creatUser.mock.calls[0][1]).toBe(body.pass);
            }

        })

        test("cretatUser should return  with user id ", async () => {
            for(let i = 0;i<10;i++){
                creatUser.mockReset();
                creatUser.mockResolvedValue(i);
                const response = await request(app).post("/users").send({
                    user: "username",
                    pass: "password"
                })
    
                expect(response.body.userId).toBe(i);
            }
        })
        
        test("Should respond with 200 ok", async () => {
            const response = await request(app).post("/users").send({
                user: "username",
                pass: "password"
            })

            expect(response.statusCode).toBe(200);

        })

        test("Responce content type should be JSON", async () => {
            const response = await request(app).post("/users").send({
                user: "username",
                pass: "password"
            })

            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

        })

        // test("Responce content type should be JSON", async () => {
        //     const response = await request(app).post("/users").send({
        //         user: "username",
        //         pass: "password"
        //     })

        //     expect(response.body.userId).toBeDefined();

        // })

    });

    describe("When username and pass not given", () => {

        test("Response should be 400", async () => {
            const bodyData = [
                {user: "username"},
                {pass: "password"},
                {}
            ]
            
            for(const body of bodyData){
                const response = await request(app).post("/users").send(body)
    
                expect(response.statusCode).toBe(400);   
            }

        })

    });

})