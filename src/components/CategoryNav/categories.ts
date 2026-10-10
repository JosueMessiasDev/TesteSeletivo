import tecnologia from '../../assets/categorias/tecnologia.png';
import supermercado from '../../assets/categorias/supermercado.png';
import bebidas from '../../assets/categorias/bebidas.png';
import ferramentas from '../../assets/categorias/ferramentas.png';
import saude from '../../assets/categorias/saude.png';
import esportes from '../../assets/categorias/esportes.png';
import moda from '../../assets/categorias/moda.png';

export interface Category {
  name: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
];