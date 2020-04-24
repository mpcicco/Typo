using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Typo.Dto;
using Typo.Models;
using Typo.Services;

namespace Typo.Controllers
{
    [Route("api/word")]
    [ApiController]
    public class WordController : ControllerBase
    {
        private readonly WordService _wordService;
        private readonly IMapper _mapper;

        public WordController(IMapper mapper, WordService wordService)
        {
            _wordService = wordService;
            _mapper = mapper;
        }

        // GET: api/Employee
        [HttpGet]
        public IActionResult Get()
        {
            var word = _mapper.Map<List<WordDto>>(_wordService.GetAll());
            return Ok(word);
        }

        // GET: api/Employee/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            Word word = _wordService.Get(id);

            if (word == null)
            {
                return NotFound("The Word record couldn't be found.");
            }

            return Ok(word);
        }

        // POST: api/Employee
        [HttpPost]
        public IActionResult Post([FromBody] Word word)
        {
            if (word == null)
            {
                return BadRequest("Word is null.");
            }
            _wordService.Add(word);
            return CreatedAtRoute(
                  "Get",
                  new { Id = word.Id },
                  word);
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Word word)
        {
            if (word == null)
            {
                return BadRequest("Word is null.");
            }

            Word wordToUpdate = _wordService.Get(id);
            if (wordToUpdate == null)
            {
                return NotFound("The Word record couldn't be found.");
            }
            _wordService.Update(wordToUpdate, word);
            return NoContent();
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Word word = _wordService.Get(id);
            if (word == null)
            {
                return NotFound("The Word record couldn't be found.");
            }

            _wordService.Delete(word);
            return NoContent();
        }
    }
}
