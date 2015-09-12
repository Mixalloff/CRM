using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CRMsystem.Models.Company_entities
{
    public class Task
    {
        public Task()
        {
            Tags = new List<Tag>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskId { get; set; }

        public Task ParentTask { get; set; }

        public Deal Deal { get; set; }

        public TaskType TaskType { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        /// <summary>
        /// Дедлайн (дата исполнения)
        /// </summary>
        public DateTime Deadline { get; set; }

        public TaskStatus Status { get; set; }

        public IEnumerable<Tag> Tags { get; set; }
    }
}