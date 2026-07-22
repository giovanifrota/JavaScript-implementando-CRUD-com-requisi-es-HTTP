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
};

export default api;
