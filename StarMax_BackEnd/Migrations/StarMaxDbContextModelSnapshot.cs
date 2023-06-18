﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StarMaxApp.Context;

#nullable disable

namespace StarMax_BackEnd.Migrations
{
    [DbContext(typeof(StarMaxDbContext))]
    partial class StarMaxDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("StarMaxApp.Models.Starship", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CargoCapacity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Consumables")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CostInCredits")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Crew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Edited")
                        .HasColumnType("datetime2");

                    b.Property<string>("HyperdriveRating")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Length")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MGLT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Manufacturer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaxAtmospheringSpeed")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Passengers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StarshipClass")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Starships");
                });

            modelBuilder.Entity("StarMaxApp.Models.StarshipFilmUrl", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("StarshipId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("StarshipId");

                    b.ToTable("StarshipFilmUrl");
                });

            modelBuilder.Entity("StarMaxApp.Models.StarshipPilotUrl", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("StarshipId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("StarshipId");

                    b.ToTable("StarshipPilotUrl");
                });

            modelBuilder.Entity("StarMaxApp.Models.StarshipFilmUrl", b =>
                {
                    b.HasOne("StarMaxApp.Models.Starship", "Starship")
                        .WithMany("StarshipFilmUrls")
                        .HasForeignKey("StarshipId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Starship");
                });

            modelBuilder.Entity("StarMaxApp.Models.StarshipPilotUrl", b =>
                {
                    b.HasOne("StarMaxApp.Models.Starship", "Starship")
                        .WithMany("StarshipPilotUrls")
                        .HasForeignKey("StarshipId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Starship");
                });

            modelBuilder.Entity("StarMaxApp.Models.Starship", b =>
                {
                    b.Navigation("StarshipFilmUrls");

                    b.Navigation("StarshipPilotUrls");
                });
#pragma warning restore 612, 618
        }
    }
}
