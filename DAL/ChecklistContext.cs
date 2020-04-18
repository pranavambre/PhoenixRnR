using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using PhoenixRnR.Models;
using System.Linq;
using System.Web;

namespace PhoenixRnR.DAL
{
    public class ChecklistContext:DbContext
    {
        public ChecklistContext() : base("ChecklistContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ChecklistContext, PhoenixRnR.Migrations.Configuration>());
           // Database.SetInitializer(new MigrateDatabaseToLatestVersion<ChecklistContext, Migrations.Configuration>(null);
        }

    public DbSet<Home> Homes { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Emergencykit> Emergencykits { get; set; }

        public DbSet<WaterResources> WaterResourcess { get; set; }

        public DbSet<Flamable> Flamables { get; set; }

        public DbSet<Garden> Gardens { get; set; }




        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}