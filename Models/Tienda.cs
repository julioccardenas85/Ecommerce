﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models
{
    public partial class Tienda
    {
        public Tienda()
        {
            ArticulosPorTienda = new HashSet<ArticulosPorTienda>();
        }

        public int Id { get; set; }
        public string Sucursal { get; set; }
        public string Direccion { get; set; }

        public virtual ICollection<ArticulosPorTienda> ArticulosPorTienda { get; set; }
    }
}