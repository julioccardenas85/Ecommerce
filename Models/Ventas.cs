﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TiendaVirtual.Models
{
    public partial class Ventas
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public int IdArticulo { get; set; }
        public DateTime? Fecha { get; set; }

        public virtual Articulos IdArticuloNavigation { get; set; }
        public virtual Clientes IdClienteNavigation { get; set; }
    }
}