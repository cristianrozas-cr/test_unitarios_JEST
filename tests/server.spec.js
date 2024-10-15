const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("GET /cafes devuelve un status code 200, un arreglo, y al menos un objeto", async () => {
        const response = await request(server).get('/cafes');
        
        // Verifica que el código de estado sea 200
        expect(response.status).toBe(200);
    
        // Verifica que el cuerpo de la respuesta sea un arreglo
        expect(response.body).toBeInstanceOf(Array);
    
        // Verifica que el arreglo contenga al menos un objeto
        expect(response.body.length).toBeGreaterThan(0);
    });
    

    it("se obtiene un código 404 al intentar eliminar un café con un id que no existe", async () => {
        const response = await request(server).delete('/cafe/5');
        expect(response.status).toBe(404)
    })

    it("POST /cafes agrega un nuevo café y devuelve un código 201", async () => {
        const id = 5;
        const producto = { id, nombre: "Nuevo cafe" };
        const response = await request(server)
            .post("/cafes")
            .send(producto);
            
        expect(response.status).toBe(201);
        expect(response.body).toContainEqual(producto);
    });

    it("PUT /cafes devuelve un status code 400 si el id del parámetro no coincide con el id del café en el payload", async () => {
        const idParametro = 1;  // Id enviado en los parámetros
        const cafePayload = { id: 2, nombre: "Café actualizado" };  // Id diferente en el payload
    
        const response = await request(server)
            .put(`/cafes/${idParametro}`)  // Enviar el id en los parámetros
            .send(cafePayload);  // Enviar el payload con un id diferente
        
        // Verificar que se devuelva un status code 400
        expect(response.status).toBe(400);
        
        // Verificar que el mensaje de error sea el correcto
        expect(response.body.message).toBe("El id del parámetro no coincide con el id del café recibido");
    });

});

