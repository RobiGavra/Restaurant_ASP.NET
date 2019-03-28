namespace Restaurant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateDatabaseTabes : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        PersonID = c.Int(nullable: false),
                        Age = c.Int(nullable: false),
                        Function = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        Salary = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.ID);
            
            DropColumn("dbo.People", "Age");
            DropColumn("dbo.People", "Function");
            DropColumn("dbo.People", "StartDate");
            DropColumn("dbo.People", "Salary");
            DropColumn("dbo.People", "Discriminator");
        }
        
        public override void Down()
        {
            AddColumn("dbo.People", "Discriminator", c => c.String(nullable: false, maxLength: 128));
            AddColumn("dbo.People", "Salary", c => c.Decimal(precision: 18, scale: 2));
            AddColumn("dbo.People", "StartDate", c => c.DateTime());
            AddColumn("dbo.People", "Function", c => c.Int());
            AddColumn("dbo.People", "Age", c => c.Int());
            DropTable("dbo.Employees");
        }
    }
}
