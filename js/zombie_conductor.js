/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  this.direccion = direccion;
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, direccion);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  if(this.direccion=='v'){
    //this.x -= this.velocidad;
    //this.y -= this.velocidad;
    this.y--;
  }
  if(this.direccion=='h'){
    //this.y += this.velocidad;
    //this.x -= this.velocidad;
    this.x++;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if (this.x > this.rangoMov.hastaX && this.direccion == 'h'){
    //this.velocidad *= -1;
    this.x=0;
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
}

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.vidas=0;
}
