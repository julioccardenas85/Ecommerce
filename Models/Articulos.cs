﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models
{
    public partial class Articulos
    {
        public Articulos()
        {
            ArticulosPorTienda = new HashSet<ArticulosPorTienda>();
            Ventas = new HashSet<Ventas>();
        }

        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public double Precio { get; set; }
        public byte[] Imagen { get; set; }
        public int Stock { get; set; }

        public virtual ICollection<ArticulosPorTienda> ArticulosPorTienda { get; set; }
        public virtual ICollection<Ventas> Ventas { get; set; }
    }
}