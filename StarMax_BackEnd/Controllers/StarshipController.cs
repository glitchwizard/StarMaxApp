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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Starship>>> GetStarships()
        {
            var starships = await _context.Starships.ToListAsync();
            return Ok(starships);
        }

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
    }
}
