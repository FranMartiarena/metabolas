# metabolas

Supongamos que tenemos un plano de coordenadas.
La idea es dar un color a cada punto (x,y) en funcion del mismo par (x,y).
Osea, hay una funcion f tal que f(x,y) es un color.

Si definimos f(x,y) = (x,y,0), donde la terna que devuelve la funcion es un color en RGB, y corremos para cada punto del plano la funcion, obtenemos lo siguiente:

(IMAGEN)

La esquina de arriba a la izquierda es el origen (0,0), entonces a medida que nos movemos para la derecha desde el origen irá aumentando x, osea el color rojo se hace mas fuerte.
Lo mismo si desde el origen solamente bajamos, aumenta la coordenada y, y tambien el color verde.
A medida que nos acercamos a la esquina de abajo a la derecha se juntan el rojo y el verde, formando el amarillo.

Veamos algo un poquito mas complicado;
Sea (a,b) el punto en el centro del plano.
Definamos f(x,y) = sqrt(((x-a)°2)+((y-b)°2)) = distancia entre el punto (x,y) y el centro del plano.

Si ahora en lugar de usar RGB usamos escala de grises, a medida que nos alejamos del centro se hace todo mas claro:

(IMAGEN)

Esta idea de distancia la podemos aprovechar para crear el concepto de "metaballs": Si 

