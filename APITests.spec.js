const {test,expect} = require('@playwright/test')

var userid;

test("Get Users",async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Create User",async({request})=>{
    const response = await request.post("https://reqres.in/api/users",
                             {
                                data:{
                                    "name":"Kumar","job":"trainee"},
                                    headers:{"Accept":"application/json"}
                             })
    console.log(await response.json())
    expect(response.status()).toBe(201)

    const res=await response.json()
    userid=res.id;
})

test("Update User",async({request})=>{
    const response = await request.put("https://reqres.in/api/users/"+userid,
                             {
                                data:{
                                    "name":"Kumar","job":"engineer"},
                                    headers:{"Accept":"application/json"}
                             })
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Delete User",async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/"+userid)
                             
    //console.log(await response.json())
    expect(response.status()).toBe(204)
})

