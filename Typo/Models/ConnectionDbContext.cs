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
            modelBuilder.Entity<Word>().HasData(new Word
            {
                Id = 1,
                Text = "ciao"

            }, new Word
            {
                Id = 2,
                Text = "come"
            }, new Word
            {
                Id = 3,
                Text = "stai"
            }, new Word
            {
                Id = 4,
                Text = "oggi"
            }, new Word
            {
                Id = 5,
                Text = "pomeriggio"
            });
        }
    }
}
