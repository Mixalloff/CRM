using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class ActivityLog
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActivityLogId { get; set; }

        public Employee Employee { get; set; }

        public Operation Operation { get; set; }

        public DateTime Date { get; set; }

        public Deal Deal { get; set; }
    }
}