namespace PhoenixRnR.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                    "dbo.Garden",
                    c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Questions = c.String(maxLength: 500),
                       
                    });
        }
        
        public override void Down()
        {
        }
    }
}
