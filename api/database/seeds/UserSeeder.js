'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const User = use("App/Models/User");

class UserSeeder {
  async run () {
    const user = new User();

    user.usermame = "admin";
    user.email = "admin@localhost.local";
    user.password = "1234";
    user.group_id = 2

    await user.save();
  }
}

module.exports = UserSeeder;
