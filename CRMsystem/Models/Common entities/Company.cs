using CRMsystem.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    /// <summary>
    /// Компания (клиент сервиса)
    /// </summary>
    public class Company: ApplicationUser
    {
        public Company() : base()
        {
           Contacts = new List<Contact>();
        }

       // [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
      //  public int CompanyId { get; set; }


        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Сокращенное наименование
        /// </summary>
        public string Abbreviation { get; set; }

       // [Required]
       // public string Login { get; set; }

       // [Required]
        //public string Password { get; set; }

        /// <summary>
        /// Дата регистрации
        /// </summary>
        [Required]
        public DateTime RegisterDate { get; set; }

        /// <summary>
        /// Следующий платеж
        /// </summary>
        public DateTime NextPayment { get; set; }

        /// <summary>
        /// Остаток на балансе предприятия для оплаты сервиса
        /// </summary>
        [Required]
        public double Balance { get; set; }

        public string OGRN { get; set; }

        /// <summary>
        /// Юридический адрес
        /// </summary>
        public string LegalAddress { get; set; }

        /// <summary>
        /// Фактический адрес
        /// </summary>
        public string ActualAddress { get; set; }

        /// <summary>
        /// Контакты директора
        /// </summary>
       // public Contact Director { get; set; }

        public TariffPlan Tariff { get; set; }

        public virtual ICollection<Contact> Contacts { get; set; }
    }
}