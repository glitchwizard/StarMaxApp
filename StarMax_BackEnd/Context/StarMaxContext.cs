using Microsoft.EntityFrameworkCore;
using StarMaxApp.Models;
using StarMaxApp.DataTransferObjects;

namespace StarMaxApp.Context;

public class StarMaxDbContext : DbContext
{
    public StarMaxDbContext(DbContextOptions<StarMaxDbContext> options) : base(options)
    { }

    public DbSet<Starship> Starships { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Ignore<StarshipAPI>();
        modelBuilder.Ignore<StarshipResult>();

        base.OnModelCreating(modelBuilder);
    }




}
