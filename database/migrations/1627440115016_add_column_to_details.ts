import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Details extends BaseSchema {
  protected tableName = 'details'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('father')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('father')
    })
  }
}
