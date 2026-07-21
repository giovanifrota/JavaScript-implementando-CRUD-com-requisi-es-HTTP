const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return response.json();
    } catch {
      alert("ERRO AO BUSCAR PENSAMENTOS! ");
    }
  },
};

export default api;
