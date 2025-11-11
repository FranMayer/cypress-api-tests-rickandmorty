describe('Rick and Morty API Test Suite', () => {

  const API_URL = 'https://rickandmortyapi.com/api';

  it('GET - Character 2 (Morty)', () => {
    cy.request('GET', `${API_URL}/character/2`)
      .should((response) => {
        // Verifica el código de estado
        expect(response.status).to.eq(200);
        // Verifica el contenido del body
        expect(response.body.name).to.eq('Morty Smith');
        expect(response.body.status).to.eq('Alive');
      });
  });

  it('GET - Character 99999 (Not Found)', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}/character/99999`,
      failOnStatusCode: false 
    }).should((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error', 'Character not found');
    });
  });

  it('GET - Filter by name "rick" and status "alive"', () => {
    cy.request('GET', `${API_URL}/character/?name=rick&status=alive`)
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.results).to.have.length.greaterThan(0);

        // Verifica que todos los resultados sean "Rick" y "Alive"
        response.body.results.forEach(character => {
          expect(character.name).to.include('Rick');
          expect(character.status).to.eq('Alive');
        });
      });
  });

  it('GET - Character 1 (Rick) - Schema Validation', () => {
    cy.request('GET', `${API_URL}/character/1`)
      .should((response) => {
        expect(response.status).to.eq(200);

        // Verificamos los TIPOS de datos (Schema)
        expect(response.body.id).to.be.a('number');
        expect(response.body.name).to.be.a('string');
        expect(response.body.status).to.be.a('string');
        expect(response.body.species).to.be.a('string');
        expect(response.body.gender).to.be.a('string');
        expect(response.body.origin).to.be.a('object');
        expect(response.body.location).to.be.a('object');
        expect(response.body.image).to.be.a('string');
        expect(response.body.episode).to.be.an('array'); // 'an' es un alias de 'a'
        expect(response.body.url).to.be.a('string');
        expect(response.body.created).to.be.a('string');
      });
  });

  it('GET - Multiple Characters (1, 2, 3)', () => {
    cy.request('GET', `${API_URL}/character/1,2,3`)
      .should((response) => {
        expect(response.status).to.eq(200);

        // Verificamos que la respuesta sea un array
        expect(response.body).to.be.an('array');
        
        // Verificamos que el array contenga exactamente 3 personajes
        expect(response.body).to.have.length(3);

        // (Extra) Verificamos que los IDs sean correctos
        expect(response.body[0].name).to.eq('Rick Sanchez');
        expect(response.body[1].name).to.eq('Morty Smith');
        expect(response.body[2].name).to.eq('Summer Smith');
      });
  });

  it('GET - Chained Request - Character Origin', () => {
    
    cy.request('GET', `${API_URL}/character/1`) // Rick Sanchez
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Rick Sanchez');

        
        const originUrl = response.body.origin.url;
        
        
        expect(originUrl).to.not.be.empty;

        
        return cy.request('GET', originUrl);
      })
      .then((originResponse) => {
        
        expect(originResponse.status).to.eq(200);
        expect(originResponse.body.name).to.eq('Earth (C-137)');
        expect(originResponse.body.dimension).to.eq('Dimension C-137');
      });
  });
});