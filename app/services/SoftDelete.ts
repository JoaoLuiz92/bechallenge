/*import { LucidRow } from '@ioc:Adonis/Lucid/Model'
import { DateTime } from 'luxon';
// Optional null check query
export const softDeleteQuery = (query: ModelQueryBuilderContract<typeof BaseModel>) => {
  query.whereNull('deleted_at')
}
export const softDelete = async (row: LucidRow, column: string = 'deletedAt') => {
  if(row[column]) {
    if(row[column].isLuxonDateTime) {
      // Deleted represented by a datetime 
      row[column] = DateTime.local();
    } else {
      // Deleted represented by a boolean 
      row[column] = true;
    }
    await row.save();
  }
}*/