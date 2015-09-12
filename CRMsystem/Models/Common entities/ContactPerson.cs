using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    /// <summary>
    /// Контактное лицо
    /// </summary>
    public class ContactPerson
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContactPersonId { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        public string Patronymic { get; set; }

        /// <summary>
        /// Должность
        /// </summary>
        public string Position { get; set; }
    }
}