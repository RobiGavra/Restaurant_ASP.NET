namespace Restaurant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingReservation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        TableNo = c.Int(nullable: false),
                        PersNo = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Customer_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Customers", t => t.Customer_ID)
                .Index(t => t.Customer_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Reservations", "Customer_ID", "dbo.Customers");
            DropIndex("dbo.Reservations", new[] { "Customer_ID" });
            DropTable("dbo.Reservations");
        }
    }
}
