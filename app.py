import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

indice_uv = "..."  # Valor inicial

@app.route('/')
def index():
    return render_template('index.html', indice_uv=indice_uv)

@app.route('/recibir', methods=['POST'])
def recibir():
    global indice_uv

    # Intentar recibir el dato en formato JSON
    data = request.get_json()
    if data and "indice_uv" in data:
        indice_uv = data["indice_uv"]
    else:
        # Si no es JSON, intentar recibirlo como formulario
        indice_uv = request.form.get('indice_uv')

    # Si aún no se obtuvo el valor, poner un mensaje de error
    if indice_uv is None:
        return jsonify({"error": "No se recibió índice UV"}), 400
    
    print(f"Índice UV recibido: {indice_uv}")
    return jsonify({"mensaje": "Datos recibidos", "indice_uv": indice_uv}), 200

@app.route('/obtener_uv')
def obtener_uv():
    return jsonify({"indice_uv": indice_uv})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))