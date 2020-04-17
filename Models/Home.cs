using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PhoenixRnR.Models
{
    public class Home
    {
        public int ID { get; set; }
        public string Questions { get; set; }

        public bool IsCheked { get; set; }
    }

    public class HouseModel
    {
        public List<Home> Homes1 { get; set; }
    }
}