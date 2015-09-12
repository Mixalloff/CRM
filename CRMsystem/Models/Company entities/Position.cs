using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class Position
    {
        public Position()
        {
            Employees = new List<Employee>();
        }


        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PositionId { get; set; }

        public string Name { get; set; }

        /// <summary>
        /// Уровень доступа
        /// </summary>
        public int AccessLevel { get; set; }

        public IEnumerable<Employee> Employees { get; set; }
    }
}