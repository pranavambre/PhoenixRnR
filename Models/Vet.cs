namespace PhoenixRnR.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Vet")]
    public partial class Vet
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public string Address { get; set; }

        public int? Postcode { get; set; }

        public string Location_name { get; set; }
    }
}
