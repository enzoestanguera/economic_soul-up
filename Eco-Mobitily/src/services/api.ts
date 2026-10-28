const api_url = "http://localhost:8080/api";

export interface EcoItems {
    id: number;
    usuario: string;
    transportes: string;
    pontos: number;
}

export async function getEcoItems(): Promise<EcoItems[]> {
    try {
        const response = await fetch(`${api_url}/ecoitems`);
        if (!response.ok) {
            throw new Error(`Erro na Api status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os itens ecológicos:", error);
        return [];
    }
}

export async function createEcoItem(item: EcoItems): Promise<EcoItems> {
  try {
    const response = await fetch(`${api_url}/eco-items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Erro ao enviar dados para a API.");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no POST:", error);
    throw error;
  }
}
