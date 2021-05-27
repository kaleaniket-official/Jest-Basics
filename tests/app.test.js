const request =  require("supertest");
const app = require("../app");

describe(" POST /users", () => {

    describe("When username and pass given", () => {

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

        test("Responce content type should be JSON", async () => {
            const response = await request(app).post("/users").send({
                user: "username",
                pass: "password"
            })

            expect(response.body.userId).toBeDefined();

        })

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