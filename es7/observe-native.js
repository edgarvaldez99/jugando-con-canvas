const persona = {
  nombre: 'Freddy',
  empresa: 'Mejorando.la'
}
Object.observe(persona, changes => {
  changes.forEach(console.log)
})
setTimeout(() => persona.empresa = 'Platzi', 2500)
