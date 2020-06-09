<?php

	$destino='system.r.c.m.peru@gmail.com';	
	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$telefono=$_POST['telefono'];
	$asunto=$_POST['asunto'];
	$contenido="Nombre: " .$nombre. "\nCorreo: " .$correo. "\ntelefono: " .$telefono. "\nasunto: " .$asunto;

	mail($destino, $contenido);

	echo "<script>alert('Correo enviado Exitosamente')</script>";
	echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>