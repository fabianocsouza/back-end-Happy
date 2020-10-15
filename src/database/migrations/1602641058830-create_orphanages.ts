import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602641058830 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      //REALIZAR ALTERAÇÕES
      //CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
      await queryRunner.createTable(new Table({ 
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, //Essa coluna não pode ser negativa;
            isPrimary: true, //chave primaria;
            isGenerated: true, //Essa coluna será gerada automaticamente
            generationStrategy: 'increment' //Irá icrementar um número 
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text'
          },
          {
            name: 'instructions',
            type: 'text'
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          }
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      //DESFAZER O QUE FOI FEITO NO UP
      await queryRunner.dropTable('orphanages');
  }

}
