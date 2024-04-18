import request from 'supertest';

//What is request
// console.log(`>>> The type of requst: ${typeof request}`); //function
// console.log(`>>> The number args: ${request.length}`); // 1
// console.log(`What is the definition of the function: ${request.toString()}`);

async function GET(testid:string, baseURL:string, endpoint:string, auth:string, queryParam: object){
   let res =  await request("https://reqres.in")
    .get("/api/users?page=2")
    .query({})
    .auth("", "")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    console.log(`Res: ${JSON.stringify(res)}`);
}