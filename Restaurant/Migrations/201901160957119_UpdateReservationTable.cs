namespace Restaurant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateReservationTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Reservations", "ID", "dbo.Customers");
            DropIndex("dbo.Reservations", new[] { "ID" });
            DropPrimaryKey("dbo.Reservations");
            AlterColumn("dbo.Reservations", "ID", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Reservations", "ID");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Reservations");
            AlterColumn("dbo.Reservations", "ID", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Reservations", "ID");
            CreateIndex("dbo.Reservations", "ID");
            AddForeignKey("dbo.Reservations", "ID", "dbo.Customers", "ID");
        }
    }
}
