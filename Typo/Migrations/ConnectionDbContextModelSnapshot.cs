﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Typo.Models;

namespace Typo.Migrations
{
    [DbContext(typeof(ConnectionDbContext))]
    partial class ConnectionDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Typo.Models.Word", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Words");

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            Text = "ciao"
                        },
                        new
                        {
                            Id = 2L,
                            Text = "come"
                        },
                        new
                        {
                            Id = 3L,
                            Text = "stai"
                        },
                        new
                        {
                            Id = 4L,
                            Text = "oggi"
                        },
                        new
                        {
                            Id = 5L,
                            Text = "pomeriggio"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
