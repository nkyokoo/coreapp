'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserGroupSchema extends Schema {
  up () {
    this.create('user_group', (table) => {
      table.integer('id',10).notNullable().primary('id')
      table.string("name",100).notNullable()

    })
  }

  down () {
    this.drop('user_group')
  }
}

module.exports = UserGroupSchema
