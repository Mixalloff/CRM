using CRMsystem.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class BankAccount
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BankAccountId { get; set; }

        /// <summary>
        /// Компания
        /// </summary>
        public ApplicationUser Company { get; set; }

        /// <summary>
        /// Банк
        /// </summary>
        public Bank Bank { get; set; }

        /// <summary>
        /// Банковские реквизиты
        /// </summary>
        public BankDetails BankDetails { get; set; }
    }
}