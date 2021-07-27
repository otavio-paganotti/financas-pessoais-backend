import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Control from './Control'

export default class Projection extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public maxEntry: number

  @column()
  public maxExpense: number

  @column()
  public qtdMonth: number

  @column()
  public active: boolean

  @hasOne(() => Control)
  public control: HasOne<typeof Control>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
