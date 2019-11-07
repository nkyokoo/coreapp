'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('alter_users', (table) => {
      this.raw("alter table `users` add constraint `users_group_id_foreign` foreign key (`group_id`) references `user_group` (`id`)")

    })
  }

  down () {
    this.table('alter_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUserSchema
