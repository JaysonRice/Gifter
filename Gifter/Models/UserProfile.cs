using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System;

namespace Gifter.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        public string FirebaseUserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

    }
}