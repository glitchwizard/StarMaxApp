using StarMaxApp.Context;
using Microsoft.EntityFrameworkCore;
using StarMaxApp.Models;
using Newtonsoft.Json;
using StarMaxApp.DataTransferObjects;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<StarMaxDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// SeedDatabase
using (var scope = app.Services.CreateScope())
{
    SeedDatabase(scope.ServiceProvider.GetRequiredService<StarMaxDbContext>()).Wait();
}

app.Run();
async Task SeedDatabase(StarMaxDbContext context)
{
    if (!context.Starships.Any())
    {
        using var httpClient = new HttpClient();
        string next = "https://swapi.dev/api/starships/";

        while (next != null)
        {
            var response = await httpClient.GetStringAsync(next);

            var starships = JsonConvert.DeserializeObject<StarshipResult>(response);
            foreach (var starshipAPI in starships.Results)
            {
                // Create new starship entity from result and add it to the context
                var starship = new Starship
                {
                    Name = starshipAPI.Name,
                    Model = starshipAPI.Model,
                    Manufacturer = starshipAPI.Manufacturer,
                    CostInCredits = starshipAPI.Cost_in_credits,
                    Length = starshipAPI.Length,
                    MaxAtmospheringSpeed = starshipAPI.Max_atmosphering_speed,
                    Crew = starshipAPI.Crew,
                    Passengers = starshipAPI.Passengers,
                    CargoCapacity = starshipAPI.Cargo_capacity,
                    Consumables = starshipAPI.Consumables,
                    HyperdriveRating = starshipAPI.Hyperdrive_rating,
                    MGLT = starshipAPI.MGLT,
                    StarshipClass = starshipAPI.Starship_class,
                    Created = starshipAPI.Created.Value,
                    Edited = starshipAPI.Edited.Value,
                    Url = starshipAPI.Url,
                    StarshipFilmUrls = starshipAPI.Films.Select(url => new StarshipFilmUrl { Url = url }).ToList(),
                    StarshipPilotUrls = starshipAPI.Pilots.Select(url => new StarshipPilotUrl { Url = url }).ToList(),
                };
                context.Starships.Add(starship);
            }

            // Update the next URL for next iteration
            next = starships.Next;
        }
        await context.SaveChangesAsync();
    }
}