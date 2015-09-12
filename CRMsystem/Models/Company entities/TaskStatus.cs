using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class TaskStatus
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskStatusId { get; set; }

        public string Name { get; set; }
    }
}