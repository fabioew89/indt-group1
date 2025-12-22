import { computed, Injectable, signal } from '@angular/core';
import { IItem } from '../../core/models/IItem';

@Injectable({
  providedIn: 'root',
})
export class TrackedItems {
  arrayDeTestes: IItem[] = [
    {
      id: `${crypto.randomUUID()}`,
      name: "Projetor Epson X41",
      description: "Projetor de alta resolução para salas de reunião.",
      category: "Eletrônicos",
      localization: "Sala de Conferência A",
      initialStatus: "Disponível"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Cadeira Ergonômica Pro",
      description: "Cadeira com ajuste lombar e de altura.",
      category: "Mobiliário",
      localization: "Escritório Central",
      initialStatus: "Em uso"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "MacBook Pro 16\"",
      description: "Laptop para edição de vídeo e design.",
      category: "Informática",
      localization: "Departamento de TI",
      initialStatus: "Manutenção"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Quadro Branco Magnético",
      description: "Quadro de 2x1 metros para brainstorming.",
      category: "Escritório",
      localization: "Sala de Treinamento",
      initialStatus: "Disponível"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Ar Condicionado Split",
      description: "Unidade de 12.000 BTUs.",
      category: "Eletrodomésticos",
      localization: "Recepção",
      initialStatus: "Operacional"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Câmera Canon EOS R",
      description: "Câmera Mirrorless para cobertura de eventos.",
      category: "Fotografia",
      localization: "Estúdio de Criação",
      initialStatus: "Reservado"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Roteador Wi-Fi 6",
      description: "Roteador de alta velocidade para rede interna.",
      category: "Redes",
      localization: "Rack Principal",
      initialStatus: "Ativo"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Microfone Yeti Blue",
      description: "Microfone USB para gravações de podcast.",
      category: "Áudio",
      localization: "Cabine de Som",
      initialStatus: "Disponível"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Monitor Dell 27\"",
      description: "Monitor 4K com conexão USB-C.",
      category: "Informática",
      localization: "Bancada 04",
      initialStatus: "Em uso"
    },
    {
      id: `${crypto.randomUUID()}`,
      name: "Cafeteira Industrial",
      description: "Máquina de café expresso automática.",
      category: "Cozinha",
      localization: "Copa",
      initialStatus: "Aguardando Limpeza"
    }
  ]

  trackedItems = signal<IItem[]>(this.initializedItems());
  hasTrackedItems = computed(() => this.trackedItems().length > 0);

  initializedItems() {
    // localStorage.setItem('trackedItems', JSON.stringify(this.arrayDeTestes))
    const currentTrackedItems = localStorage.getItem('trackedItems');

    if (currentTrackedItems) {
      try {
        const parsed = JSON.parse(currentTrackedItems);

        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    console.log('Nenhum item em cache');
    return [];
  }

  createItem(newItemData: Omit<IItem, 'id'>): void {
    const newitem: IItem = {
      ...newItemData,
      id: crypto.randomUUID()
    };

    this.trackedItems.update(items => [...items, newitem]);

    localStorage.setItem('trackedItems', JSON.stringify(this.trackedItems()));
  }
}
