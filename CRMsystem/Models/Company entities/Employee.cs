using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    /// <summary>
    /// Сотрудник
    /// </summary>
    public class Employee
    {
        public Employee()
        {
            Positions = new List<Position>();
            Deals = new List<Deal>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployeeId { get; set; }

        [Required]
         public string Login { get; set; }

        [Required]
        public string Password { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        public string Patronymic { get; set; }

        /// <summary>
        /// Отдел
        /// </summary>
        public Department Department { get; set; }

        public IEnumerable<Position> Positions { get; set; }
        public IEnumerable<Deal> Deals { get; set; }
    }
}