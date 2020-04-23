using System;
using Microsoft.EntityFrameworkCore;

namespace Typo.Models
{
    public class ConnectionDbContext : DbContext
    {
        public ConnectionDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Word> Words { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
