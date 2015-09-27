using CRMsystem.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    public class TariffsArchive
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TariffsArchiveId { get; set; }

        /// <summary>
        /// Компания
        /// </summary>
        public ApplicationUser Company { get; set; }

        /// <summary>
        /// Дата начала использования тарифа
        /// </summary>
        public DateTime StartDate { get; set; }

        /// <summary>
        /// Тарифный план
        /// </summary>
        public TariffPlan Tariff { get; set; }
    }
}