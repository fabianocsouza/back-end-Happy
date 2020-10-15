import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602669280788 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, 
          isPrimary: true, 
          isGenerated: true, 
          generationStrategy: 'increment' 
        },
        {
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'orphanage_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'imageOrphanage',
          columnNames:['orphanage_id'],     // Qual o nome da coluna que irá armazenar o relacionameto;
          referencedTableName:'orphanages', // Qual tabela está se relacionado;
          referencedColumnNames: ['id'],    // Qual a coluna na tabela de orphanages que está se referenciando;
          onUpdate: 'CASCADE',              //Atualiza id sem perder a referencia das imagens existentes;
          onDelete: 'CASCADE'               // Quando o orphanege for deletado as imagem será também deletadas;
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('images');
  }

}
