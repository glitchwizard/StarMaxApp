using System.ComponentModel.DataAnnotations;

namespace StarMaxApp.Models;
public class Starship

{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string? Name { get; set; }

    [Required]
    [StringLength(100)]
    public string? Model { get; set; }

    [StringLength(100)]
    public string? Manufacturer { get; set; }

    [StringLength(50)]
    public string? CostInCredits { get; set; }

    [StringLength(50)]
    public string? Length { get; set; }

    [StringLength(50)]
    public string? MaxAtmospheringSpeed { get; set; }

    [StringLength(50)]
    public string? Crew { get; set; }

    [StringLength(50)]
    public string? Passengers { get; set; }

    [StringLength(50)]
    public string? CargoCapacity { get; set; }

    [StringLength(50)]
    public string? Consumables { get; set; }

    [StringLength(50)]
    public string? HyperdriveRating { get; set; }

    [StringLength(50)]
    public string? MGLT { get; set; }

    [StringLength(50)]
    public string? StarshipClass { get; set; }

    [StringLength(200)]
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

public class StarshipCreateDTO
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }

    [Required]
    [StringLength(100)]
    public string Model { get; set; }

    [StringLength(100)]
    public string Manufacturer { get; set; }

    [StringLength(50)]
    public string CostInCredits { get; set; }

    [StringLength(50)]
    public string Length { get; set; }

    [StringLength(50)]
    public string MaxAtmospheringSpeed { get; set; }

    [StringLength(50)]
    public string Crew { get; set; }

    [StringLength(50)]
    public string Passengers { get; set; }

    [StringLength(50)]
    public string CargoCapacity { get; set; }

    [StringLength(50)]
    public string Consumables { get; set; }

    [StringLength(50)]
    public string HyperdriveRating { get; set; }

    [StringLength(50)]
    public string MGLT { get; set; }

    [StringLength(50)]
    public string StarshipClass { get; set; }

    [StringLength(200)]
    public string Url { get; set; }

}