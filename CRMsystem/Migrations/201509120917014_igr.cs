namespace CRMsystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class igr : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Banks",
                c => new
                    {
                        BankId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Region = c.String(),
                        RegistrationCode = c.String(),
                        CorrAccount = c.String(),
                        BIK = c.String(),
                    })
                .PrimaryKey(t => t.BankId);
            
            CreateTable(
                "dbo.BankAccounts",
                c => new
                    {
                        BankAccountId = c.Int(nullable: false, identity: true),
                        Bank_BankId = c.Int(),
                        BankDetails_BankDetailsId = c.Int(),
                        Company_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.BankAccountId)
                .ForeignKey("dbo.Banks", t => t.Bank_BankId)
                .ForeignKey("dbo.BankDetails", t => t.BankDetails_BankDetailsId)
                .ForeignKey("dbo.AspNetUsers", t => t.Company_Id)
                .Index(t => t.Bank_BankId)
                .Index(t => t.BankDetails_BankDetailsId)
                .Index(t => t.Company_Id);
            
            CreateTable(
                "dbo.BankDetails",
                c => new
                    {
                        BankDetailsId = c.Int(nullable: false, identity: true),
                        AccountNumber = c.String(),
                        INN = c.String(),
                        KPP = c.String(),
                        OKPO = c.String(),
                    })
                .PrimaryKey(t => t.BankDetailsId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                        Name = c.String(),
                        Abbreviation = c.String(),
                        RegisterDate = c.DateTime(),
                        NextPayment = c.DateTime(),
                        Balance = c.Double(),
                        OGRN = c.String(),
                        LegalAddress = c.String(),
                        ActualAddress = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                        Tariff_TariffPlanId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TariffPlans", t => t.Tariff_TariffPlanId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex")
                .Index(t => t.Tariff_TariffPlanId);
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.TariffPlans",
                c => new
                    {
                        TariffPlanId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        MonthlyPayment = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.TariffPlanId);
            
            CreateTable(
                "dbo.Contacts",
                c => new
                    {
                        ContactId = c.Int(nullable: false, identity: true),
                        Content = c.String(),
                        Company_Id = c.String(maxLength: 128),
                        Person_ContactPersonId = c.Int(),
                        Type_ContactTypeId = c.Int(),
                    })
                .PrimaryKey(t => t.ContactId)
                .ForeignKey("dbo.AspNetUsers", t => t.Company_Id)
                .ForeignKey("dbo.ContactPersons", t => t.Person_ContactPersonId)
                .ForeignKey("dbo.ContactTypes", t => t.Type_ContactTypeId)
                .Index(t => t.Company_Id)
                .Index(t => t.Person_ContactPersonId)
                .Index(t => t.Type_ContactTypeId);
            
            CreateTable(
                "dbo.ContactPersons",
                c => new
                    {
                        ContactPersonId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Surname = c.String(),
                        Patronymic = c.String(),
                        Position = c.String(),
                    })
                .PrimaryKey(t => t.ContactPersonId);
            
            CreateTable(
                "dbo.ContactTypes",
                c => new
                    {
                        ContactTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ContactTypeId);
            
            CreateTable(
                "dbo.PaymentsArchives",
                c => new
                    {
                        PaymentsArchiveId = c.Int(nullable: false, identity: true),
                        PaymentDate = c.DateTime(nullable: false),
                        Amount = c.Double(nullable: false),
                        Company_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.PaymentsArchiveId)
                .ForeignKey("dbo.AspNetUsers", t => t.Company_Id)
                .Index(t => t.Company_Id);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.TariffsArchives",
                c => new
                    {
                        TariffsArchiveId = c.Int(nullable: false, identity: true),
                        StartDate = c.DateTime(nullable: false),
                        Company_Id = c.String(maxLength: 128),
                        Tariff_TariffPlanId = c.Int(),
                    })
                .PrimaryKey(t => t.TariffsArchiveId)
                .ForeignKey("dbo.AspNetUsers", t => t.Company_Id)
                .ForeignKey("dbo.TariffPlans", t => t.Tariff_TariffPlanId)
                .Index(t => t.Company_Id)
                .Index(t => t.Tariff_TariffPlanId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.TariffsArchives", "Tariff_TariffPlanId", "dbo.TariffPlans");
            DropForeignKey("dbo.TariffsArchives", "Company_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.PaymentsArchives", "Company_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Contacts", "Type_ContactTypeId", "dbo.ContactTypes");
            DropForeignKey("dbo.Contacts", "Person_ContactPersonId", "dbo.ContactPersons");
            DropForeignKey("dbo.Contacts", "Company_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.BankAccounts", "Company_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "Tariff_TariffPlanId", "dbo.TariffPlans");
            DropForeignKey("dbo.BankAccounts", "BankDetails_BankDetailsId", "dbo.BankDetails");
            DropForeignKey("dbo.BankAccounts", "Bank_BankId", "dbo.Banks");
            DropIndex("dbo.TariffsArchives", new[] { "Tariff_TariffPlanId" });
            DropIndex("dbo.TariffsArchives", new[] { "Company_Id" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.PaymentsArchives", new[] { "Company_Id" });
            DropIndex("dbo.Contacts", new[] { "Type_ContactTypeId" });
            DropIndex("dbo.Contacts", new[] { "Person_ContactPersonId" });
            DropIndex("dbo.Contacts", new[] { "Company_Id" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", new[] { "Tariff_TariffPlanId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.BankAccounts", new[] { "Company_Id" });
            DropIndex("dbo.BankAccounts", new[] { "BankDetails_BankDetailsId" });
            DropIndex("dbo.BankAccounts", new[] { "Bank_BankId" });
            DropTable("dbo.TariffsArchives");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.PaymentsArchives");
            DropTable("dbo.ContactTypes");
            DropTable("dbo.ContactPersons");
            DropTable("dbo.Contacts");
            DropTable("dbo.TariffPlans");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.BankDetails");
            DropTable("dbo.BankAccounts");
            DropTable("dbo.Banks");
        }
    }
}
