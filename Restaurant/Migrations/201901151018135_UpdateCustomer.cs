namespace Restaurant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCustomer : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Customers", "PhoneNumber", c => c.String());
            AddColumn("dbo.Customers", "Email", c => c.String());
            AlterColumn("dbo.Foods", "Name", c => c.String());
            DropColumn("dbo.Customers", "Table");
            DropColumn("dbo.Customers", "Date");
            DropColumn("dbo.Customers", "PersNr");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Customers", "PersNr", c => c.Int(nullable: false));
            AddColumn("dbo.Customers", "Date", c => c.DateTime(nullable: false));
            AddColumn("dbo.Customers", "Table", c => c.Int(nullable: false));
            AlterColumn("dbo.Foods", "Name", c => c.String(nullable: false));
            DropColumn("dbo.Customers", "Email");
            DropColumn("dbo.Customers", "PhoneNumber");
        }
    }
}
