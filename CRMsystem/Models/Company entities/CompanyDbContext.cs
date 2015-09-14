using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class CompanyDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<ActivityLog> ActivityLogs { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ClientSource> ClientSources { get; set; }
        public DbSet<Deal> Deals { get; set; }
        public DbSet<DealStage> DealStages { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<IndividualPerson> IndividualPersons { get; set; }
        public DbSet<LegalPerson> LegalPersons { get; set; }
        public DbSet<Operation> Operations { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<TaskStatus> TaskStatuses { get; set; }
        public DbSet<TaskType> TaskTypes { get; set; }

        public CompanyDbContext(string companyName)
            : base(companyName + "_db", throwIfV1Schema: false)
        {
        }

        public static CompanyDbContext Create(string companyName)
        {
            return new CompanyDbContext(companyName);
        }
    }
}