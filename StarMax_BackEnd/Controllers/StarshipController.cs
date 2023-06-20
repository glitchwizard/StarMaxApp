using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarMaxApp.Context;
using StarMaxApp.Models;

namespace StarMaxApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StarshipsController : ControllerBase
    {
        private readonly StarMaxDbContext _context;

        public StarshipsController(StarMaxDbContext context)
        {
            _context = context;
        }

        // GET: api/Starships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Starship>>> GetStarships()
        {
            return await _context.Starships.ToListAsync();
        }

        // GET: api/Starships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Starship>> GetStarship(int id)
        {
            var starship = await _context.Starships.FindAsync(id);

            if (starship == null)
            {
                return NotFound();
            }

            return starship;
        }

        // POST: api/Starships
        [HttpPost]
        public async Task<ActionResult<Starship>> PostStarship(StarshipCreateDTO starshipCreateDTO)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var starship = new Starship
            {
                Name = starshipCreateDTO.Name,
                Model = starshipCreateDTO.Model,
                Manufacturer = starshipCreateDTO.Manufacturer,
                CostInCredits = starshipCreateDTO.CostInCredits,
                Length = starshipCreateDTO.Length,
                MaxAtmospheringSpeed = starshipCreateDTO.MaxAtmospheringSpeed,
                Crew = starshipCreateDTO.Crew,
                Passengers = starshipCreateDTO.Passengers,
                CargoCapacity = starshipCreateDTO.CargoCapacity,
                Consumables = starshipCreateDTO.Consumables,
                HyperdriveRating = starshipCreateDTO.HyperdriveRating,
                MGLT = starshipCreateDTO.MGLT,
                StarshipClass = starshipCreateDTO.StarshipClass,
                Url = starshipCreateDTO.Url,
                Created = DateTime.UtcNow,
                Edited = DateTime.UtcNow
            };

            _context.Starships.Add(starship);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStarship", new { id = starship.Id }, starship);
        }

        // PUT: api/Starships/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStarship(int id, Starship starship)
        {
            if (id != starship.Id)
            {
                return BadRequest();
            }

            _context.Entry(starship).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StarshipExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Starships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStarship(int id)
        {
            var starship = await _context.Starships.FindAsync(id);
            if (starship == null)
            {
                return NotFound();
            }

            _context.Starships.Remove(starship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StarshipExists(int id)
        {
            return _context.Starships.Any(e => e.Id == id);
        }
    }
}
