using CRM.Models.Common_entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class LegalPerson
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LegalPersonId { get; set; }

        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Сокращенное наименование
        /// </summary>
        public string Abbreviation { get; set; }

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
        public Contact Director { get; set; }
    }
}