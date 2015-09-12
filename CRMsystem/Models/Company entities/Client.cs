using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class Client
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClientId { get; set; }

        public ClientSource Source { get; set; }

        public PaymentMethod PayMethod { get; set; }
    }
}