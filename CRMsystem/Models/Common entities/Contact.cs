using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    /// <summary>
    /// Контакт
    /// </summary>
    public class Contact
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContactId { get; set; }

        /// <summary>
        /// Содержание контакта (контент)
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Контактное лицо
        /// </summary>
        public ContactPerson Person { get; set; }

        /// <summary>
        /// Тип контакта
        /// </summary>
        public ContactType Type { get; set; }

        public virtual Company Company { get; set; }
    }
}