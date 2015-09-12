using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    /// <summary>
    /// Этап сделки
    /// </summary>
    public class DealStage
    {
        public DealStage()
        {
            Deals = new List<Deal>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DealStageId { get; set; }

        public string Name { get; set; }

        /// <summary>
        /// Номер этапа
        /// </summary>
        public int StageNumber { get; set; }

        public IEnumerable<Deal> Deals { get; set; }
    }
}