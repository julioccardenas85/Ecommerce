﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models
{
    public partial class Clientes
    {
        public Clientes()
        {
            Ventas = new HashSet<Ventas>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }

        public virtual ICollection<Ventas> Ventas { get; set; }
    }
}