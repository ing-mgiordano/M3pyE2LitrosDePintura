const COBERTURA_LITROS = 12

function calcularLitros() {
    const userAlto = document.getElementById("input-Alto").value
    const userAncho = document.getElementById("input-Ancho").value
    const userManos = document.getElementById("input-Manos").value

    const areaPintar = userAlto*userAncho
    const litrosMano = areaPintar/COBERTURA_LITROS
    const litrosTotales = litrosMano*userManos
       
    const litrosNecesarios = document.getElementById("litros-necesarios")
    litrosNecesarios.innerHTML = `Se necesitan ${litrosTotales}L 
    para pintar una pared de ${areaPintar}m^2 dando ${userManos} manos de pintura`

    console.log(`Alto=${userAlto}, Ancho=${userAncho}, Manos=${userManos}, Area=${areaPintar}, LitrosxMano=${litrosMano}, LitrosTotales=${litrosTotales}`)
}
