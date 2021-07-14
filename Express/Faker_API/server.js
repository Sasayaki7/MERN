const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;






app.get("/api/users/new", (req, res) =>{
    res.json(new User());
})

app.get("/api/companies/new", (req, res)=>{
    res.json(new Company());
})

app.get("/api/user/company", (req, res)=>{
    res.json({user: new User(), company: new Company()})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User{
    static id = 1;
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this._id = User.id;
        User.id++;
    }
}


class Company{
    static id = 1;
    constructor(){
        this.name = faker.company.companyName();
        this.address = {street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()}
        this._id = Company.id;
        Company.id++;
    }
}
