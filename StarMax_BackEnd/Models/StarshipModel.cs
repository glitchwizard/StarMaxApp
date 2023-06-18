﻿using System.ComponentModel.DataAnnotations;

namespace StarMaxApp.Models;
public class Starship

{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Model { get; set; }
    public string? Manufacturer { get; set; }
    public string? CostInCredits { get; set; }
    public string? Length { get; set; }
    public string? MaxAtmospheringSpeed { get; set; }
    public string? Crew { get; set; }
    public string? Passengers { get; set; }
    public string? CargoCapacity { get; set; }
    public string? Consumables { get; set; }
    public string? HyperdriveRating { get; set; }
    public string? MGLT { get; set; }
    public string? StarshipClass { get; set; }
    public string? Url { get; set; }
    public DateTime Created { get; set; }
    public DateTime Edited { get; set; }

    public ICollection<StarshipPilotUrl>? StarshipPilotUrls { get; set; }
    public ICollection<StarshipFilmUrl>? StarshipFilmUrls { get; set; }
}

public class StarshipPilotUrl
{
    [Key]
    public int Id { get; set; }
    public int StarshipId { get; set; }
    public Starship Starship { get; set; }
    public string Url { get; set; }
}

public class StarshipFilmUrl
{
    [Key]
    public int Id { get; set; }
    public int StarshipId { get; set; }
    public Starship Starship { get; set; }
    public string Url { get; set; }
}