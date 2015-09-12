using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class BankDetails
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BankDetailsId { get; set; }

        /// <summary>
        /// Номер расчетного счета
        /// </summary>
        public string AccountNumber { get; set; }

        public string INN { get; set; }

        public string KPP { get; set; }

        public string OKPO { get; set; }
    }
}