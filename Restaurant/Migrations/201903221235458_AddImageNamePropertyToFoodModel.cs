namespace Restaurant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddImageNamePropertyToFoodModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Foods", "ImageName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Foods", "ImageName");
        }
    }
}
