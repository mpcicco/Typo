using System;
using System.Collections.Generic;
using System.Linq;
using Typo.Models;

namespace Typo.Services
{
    public class WordService
    {
        readonly ConnectionDbContext _typoContext;

        public WordService(ConnectionDbContext context)
        {
            _typoContext = context;
        }

        public IEnumerable<Word> GetAll()
        {
            var shortWords = _typoContext.Words.Where(wrd => wrd.NLetters > 3 && wrd.NLetters < 7).OrderBy(x => Guid.NewGuid()).Take(50);
            var mediumWords = _typoContext.Words.Where(wrd => wrd.NLetters > 7 && wrd.NLetters < 10).OrderBy(x => Guid.NewGuid()).Take(100);
            var largeWords = _typoContext.Words.Where(wrd => wrd.NLetters > 10 && wrd.NLetters < 14).OrderBy(x => Guid.NewGuid()).Take(100);

            var fullList = shortWords.Concat(mediumWords);
            return (fullList.Concat(largeWords)).ToList();
        }

        public Word Get(int id)
        {
            return _typoContext.Words.FirstOrDefault(w => w.Id == id);
        }

        public void Add(Word entity)
        {
            _typoContext.Words.Add(entity);
            _typoContext.SaveChanges();
        }

        public void Update(Word word, Word entity)
        {
            word.Id = entity.Id;
            word.Text = entity.Text;
            word.NLetters = entity.NLetters;

            _typoContext.SaveChanges();
        }

        public void Delete(Word employee)
        {
            _typoContext.Words.Remove(employee);
            _typoContext.SaveChanges();
        }
    }
}
