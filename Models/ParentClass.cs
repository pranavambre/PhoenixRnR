using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace PhoenixRnR.Models
{
    public class ParentClass
    {
        public List<Home> Homes1 { get; set; }
        public List<Garden> Gardens { get; set; }

        public List<Pet> Pets { get; set; }

        public List<WaterResources> WaterResources { get; set; }
    }
}