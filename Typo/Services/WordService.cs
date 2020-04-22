using System;
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
    }
}
