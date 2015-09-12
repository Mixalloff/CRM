using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    /// <summary>
    /// Физическое лицо
    /// </summary>
    public class IndividualPerson
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IndividualPersonId { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        public string Patronymic { get; set; }

        public string Country { get; set; }

        public string Region { get; set; }

        public string Address { get; set; }

        public Client Client { get; set; }
    }
}