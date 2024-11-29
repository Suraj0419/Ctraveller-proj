import sql, { ConnectionPool } from 'mssql';

export class Database {
  private config: any;
  private pool: ConnectionPool;

  constructor(config: any) {
    this.config = config;
  }

  async connect(): Promise<void> {
    try {
      this.pool = await sql.connect(this.config);
      console.log('Connected to SQL Server');
    } catch (error) {
      console.error('Error connecting to SQL Server:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.pool.close();
      console.log('Disconnected from SQL Server');
    } catch (error) {
      console.error('Error disconnecting from SQL Server:', error);
      throw error;
    }
  }

  async query(sqlQuery: string): Promise<any[]> {
    try {
      const result = await this.pool.request().query(sqlQuery);
      return result.recordset;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error;
    }
  }
}