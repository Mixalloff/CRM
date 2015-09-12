using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using CRM.Models.Common_entities;

namespace CRMsystem.Models
{
    // Чтобы добавить данные профиля для пользователя, можно добавить дополнительные свойства в класс ApplicationUser. Дополнительные сведения см. по адресу: http://go.microsoft.com/fwlink/?LinkID=317594.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Обратите внимание, что authenticationType должен совпадать с типом, определенным в CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Здесь добавьте утверждения пользователя
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Bank> Bank { get; set; }
        public DbSet<BankAccount> BankAccount { get; set; }
        public DbSet<BankDetails> BankDetails { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<Contact> Contact { get; set; }
        public DbSet<ContactPerson> ContactPerson { get; set; }
        public DbSet<ContactType> ContactType { get; set; }
        public DbSet<PaymentsArchive> PaymentsArchive { get; set; }
        public DbSet<TariffPlan> TariffPlan { get; set; }
        public DbSet<TariffsArchive> TariffsArchive { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}