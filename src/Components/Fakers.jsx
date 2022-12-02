import React from 'react'

import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

 const USERS = [];

 function createRandomUser(){
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    address: faker.address.cityName(),
    age: faker.date.birthdate(),
    phone: faker.phone.number(),
    occupation: faker.commerce.department(),
    vehicle: faker.vehicle.model(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
console.log(USERS)

const Fakers = () => {
  return (
    <div>
      {
        USERS.map((el)=>(
          <div>
            {el.userId}
          </div>
        ))
      }
    </div>
    
  )
}

export default Fakers