document
  .getElementById('meuFormulario')
  .addEventListener('submit', function (event) {
    event.preventDefault() // Impede o envio do formulário

    // Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById('campoA').value)
    var campoB = parseFloat(document.getElementById('campoB').value)

    // Valida se o Campo B é maior que o Campo A
    if (campoB > campoA) {
      document.getElementById('mensagem').textContent = 'Formulário válido!'
      document.getElementById('mensagem').style.color = 'green'
    } else {
      document.getElementById('mensagem').textContent =
        'Formulário inválido. O número B deve ser maior que o número A.'
      document.getElementById('mensagem').style.color = 'red'
    }
  })
