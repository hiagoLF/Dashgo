import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // Factories são métodos para geração de dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        // Aqui não problema ser colocado cratedAt. Ele converte para created_at
        createdAt() {
          // Aqui o faker gera datas de no máximo 10 dias de distância
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      // É neste método que ativamos a Factory
      // Aqui sinalizamos que queremos criar 200 usuários
      server.createList("user", 200);
    },

    routes() {
      // Path base da URL para ser chamada a api
      this.namespace = "api";
      // Delay de resposta da API
      this.timing = 750;

      // Isso se chama Shorthands
      // Ele detecta que você quer pegar todos os valores da model users
      this.get("/users");
      // Aqui também é um shorthand ==> Ele cria todoa a estrutura para que se possa criar um novo usuário
      this.post("/users");

      // Precisamos aqui retornar o namespace para "/" pois "/api" pode entrar em conflito com as rotas da api do Next
      this.namespace = "";
      // Caso não seja encontrada nenhuma rota com o nome passado, ele passa adiante para que a requisição possa cair em outra coisa.
      this.passthrough();
    },
  });

  return server;
}
