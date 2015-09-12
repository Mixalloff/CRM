using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    /// <summary>
    /// Сделка
    /// </summary>
    public class Deal
    {
        public Deal()
        {
            DealStages = new List<DealStage>();
            Employees = new List<Employee>();
            Tags = new List<Tag>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DealId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        /// <summary>
        /// Дата открытия сделки
        /// </summary>
        public DateTime OpeningDate { get; set; }

        /// <summary>
        /// Количество этапов сделки
        /// </summary>
        public string StagesNumber { get; set; }

        public Client Client { get; set; }

        public IEnumerable <DealStage> DealStages { get; set; }
        public IEnumerable<Employee> Employees { get; set; }
        public IEnumerable<Tag> Tags { get; set; }
    }
}