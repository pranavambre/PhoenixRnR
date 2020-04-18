using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace PhoenixRnR.Models
{
    public class ParentClass
    {
        public Home Homes1 { get; set; }
        public Garden Gardens { get; set; }

        public Pet Pets { get; set; }

        public WaterResources WaterResources { get; set; }
    }
}