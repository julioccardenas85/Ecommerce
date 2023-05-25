
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;
using TiendaVirtual.Models;

namespace TiendaVirtual.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloController : ControllerBase
    {
        
        private readonly TiendaContext _context;

        public ArticuloController(TiendaContext context)
        {           
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listArticulos = await _context.Articulos.ToListAsync();

                return Ok(listArticulos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var articulo = await _context.Articulos.FindAsync(id);

                if (articulo == null)
                {
                    return NotFound();
                }

                return Ok(articulo);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var articulo = await _context.Articulos.FindAsync(id);

                if (articulo == null)
                {
                    return NotFound();
                }

                _context.Articulos.Remove(articulo);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Articulos artículo)
        {
            try
            {
                _context.Add(artículo);
                await _context.SaveChangesAsync();

                return CreatedAtAction("Get", new { id = artículo.Id }, artículo);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Articulos articulo)
        {
            try
            {
                if (id != articulo.Id)
                {
                    return BadRequest();
                }

                _context.Update(articulo);
                await _context.SaveChangesAsync();

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
