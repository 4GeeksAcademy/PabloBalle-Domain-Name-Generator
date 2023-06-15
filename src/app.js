var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["joggeres", "racom"];
var prefix = [".com", ".es", ".org", ".net", ".org"];

// Función para generar las combinaciones de nombres de dominio
function generateDomainNames(pronoun, adj, noun, prefix) {
  var domainNames = [];

  // Recorrer todas las listas de pronombres, adjetivos y sustantivos
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < prefix.length; l++) {
          if (noun[k].endsWith("es") && prefix[l] === ".es") {
            // Combinar los elementos de las listas y agregar el sufijo ".com"
            var cleanNoun = noun[k].slice(0, -2);
            // Combinar los elementos de las listas sin "com" y agregar el sufijo ".com"
            var domainName = pronoun[i] + adj[j] + cleanNoun + prefix[l];
            domainNames.push(domainName);
          } else if (noun[k].endsWith("com") && prefix[l] === ".com") {
            // Combinar los elementos de las listas y agregar el sufijo ".com"
            cleanNoun = noun[k].slice(0, -3);
            // Combinar los elementos de las listas sin "com" y agregar el sufijo ".com"
            domainName = pronoun[i] + adj[j] + cleanNoun + prefix[l];
            domainNames.push(domainName);
          } else {
            domainName = pronoun[i] + adj[j] + noun[k] + prefix[l];
            domainNames.push(domainName);
          }
        }
      }
    }
  }

  return domainNames;
}

// Generar las combinaciones de nombres de dominio
var domainNames = generateDomainNames(pronoun, adj, noun, prefix);
console.log(domainNames);
