function drink(n, pz, gz, he) {
  let [pingzi = pz, gaizi = gz, jiu = n, hele = he] = []
  pingzi = pz + jiu
  gaizi = gz + jiu
  jiu = Math.floor(pingzi / 4) + Math.floor(gaizi / 2)
  hele = hele + jiu
  console.log(jiu, pingzi, gaizi, hele)
  drink(jiu, pingzi, gaizi, hele)
}

console.log(drink(5, 0, 0, 0))
