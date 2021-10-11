﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Site.Controller
{
    [Route("/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] string name)
        {
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new List<Claim>
             {
                 new Claim(ClaimTypes.NameIdentifier, name)
             }, "auth");
            ClaimsPrincipal claims = new ClaimsPrincipal(claimsIdentity);
            await HttpContext.SignInAsync(claims);
            return Redirect("/");
        }
        


    }
}