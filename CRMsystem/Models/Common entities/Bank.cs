using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class Bank
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BankId { get; set; }

        public string Name { get; set; }

        public string Region{ get; set; }

        /// <summary>
        /// Регистрационный код
        /// </summary>
        public string RegistrationCode { get; set; }

        /// <summary>
        /// Корр. счет
        /// </summary>
        public string CorrAccount { get; set; }

        /// <summary>
        /// БИК
        /// </summary>
        public string BIK { get; set; }
    }
}