const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return response.json();
    } catch {
      alert("ERRO AO BUSCAR PENSAMENTOS! ");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/body",
        },
        body: JSON.stringify(pensamento),
      });
      return response.json();
    } catch {
      alert("ERRO AO BUSCAR PENSAMENTOS! ");
      throw error;
    }
  },
};

export default api;
