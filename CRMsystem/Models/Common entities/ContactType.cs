using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRM.Models.Common_entities
{
    /// <summary>
    /// Тип контакта (телефон, email, ...)
    /// </summary>
    public class ContactType
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContactTypeId { get; set; }

        public string Name { get; set; }
    }
}