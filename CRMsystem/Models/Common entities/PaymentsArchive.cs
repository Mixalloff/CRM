using CRMsystem.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class PaymentsArchive
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentsArchiveId { get; set; }

        /// <summary>
        /// Компания
        /// </summary>
        public ApplicationUser Company { get; set; }

        /// <summary>
        /// Дата платежа
        /// </summary>
        public DateTime PaymentDate { get; set; }

        /// <summary>
        /// Сумма
        /// </summary>
        public double Amount { get; set; }
    }
}