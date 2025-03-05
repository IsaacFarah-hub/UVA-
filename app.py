import os
from flask import Flask, render_template, request, jsonify

# Crear una instancia de la aplicación Flask
app = Flask(__name__, static_folder='static')

# Variable global para almacenar el índice UV
indice_uv = "..."  # Valor inicial

# Ruta principal que maneja solicitudes GET y HEAD
@app.route('/', methods=['GET', 'HEAD'])
def index():
    # Renderizar la plantilla 'index.html' y pasar el valor de 'indice_uv'
    return render_template('index.html', indice_uv=indice_uv)

# Ruta para recibir datos del índice UV mediante una solicitud POST
@app.route('/recibir', methods=['POST'])
def recibir():
    global indice_uv

    # Intentar recibir los datos en formato JSON
    data = request.get_json()
    if data and "indice_uv" in data:
        try:
            # Validar que el índice UV sea un número válido
            indice_uv = float(data["indice_uv"])
        except (ValueError, KeyError):
            return jsonify({"error": "Índice UV no válido"}), 400
    else:
        # Si no es JSON, intentar recibir los datos como un formulario
        indice_uv = request.form.get('indice_uv')
        if indice_uv is None:
            return jsonify({"error": "No se recibió índice UV"}), 400

    # Imprimir el valor recibido en la consola para depuración
    print(f"Índice UV recibido: {indice_uv}")

    # Devolver una respuesta JSON indicando que los datos fueron recibidos correctamente
    return jsonify({"mensaje": "Datos recibidos", "indice_uv": indice_uv}), 200

# Ruta para obtener el valor actual del índice UV
@app.route('/obtener_uv')
def obtener_uv():
    # Devolver el valor actual de 'indice_uv' en formato JSON
    return jsonify({"indice_uv": indice_uv})

# Manejo de errores global
@app.errorhandler(Exception)
def handle_exception(e):
    # Devolver un mensaje de error genérico en caso de excepción
    return jsonify({"error": "Error interno del servidor"}), 500

# Bloque principal que se ejecuta cuando el script es llamado directamente
if __name__ == "__main__":
    # Obtener el puerto de la variable de entorno 'PORT' o usar el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Iniciar la aplicación Flask, escuchando en todas las interfaces de red
    app.run(host="0.0.0.0", port=port)
