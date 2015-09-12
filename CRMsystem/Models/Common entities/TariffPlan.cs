using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class TariffPlan
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TariffPlanId { get; set; }

        public string Name { get; set; }

        /// <summary>
        /// Месячная плата
        /// </summary>
        public double MonthlyPayment { get; set; }
    }
}