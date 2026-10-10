import type { ReactNode } from 'react';
import Svg from './CategoryIcon';

export interface Category {
  name: string;
  icon: ReactNode;
}

// Ícones provisórios: trocar pelos SVGs originais do Figma
export const CATEGORIES: Category[] = [
    {
        name: 'Tecnologia',
        icon: (
            <Svg>
                <rect x="2" y="4" width="14" height="10" rx="1" />
                <path d="M6 18h6M9 14v4" />
                <rect x="18" y="8" width="4" height="10" rx="1" />
            </Svg>
        ),
    },
    {
        name: 'Supermercado',
        icon: (
            <Svg>
                <path d="M3 9l1.5-5h15L21 9" />
                <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                <path d="M5 12v8h14v-8" />
            </Svg>
        ),
    },
    {
        name: 'Bebidas',
        icon: (
            <Svg>
                <path d="M10 2h4M10 2v4l-2 3v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-3V2" />
            </Svg>
        ),
    },
    {
        name: 'Ferramentas',
        icon: (
            <Svg>
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
            </Svg>
        ),
    },
    {
        name: 'Saúde',
        icon: (
            <Svg>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </Svg>
        ),
    },
    {
        name: 'Esportes e Fitness',
        icon: (
            <Svg>
                <path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12" />
            </Svg>
        ),
    },
    {
        name: 'Moda',
        icon: (
            <Svg>
                <path d="M8 3 3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z" />
            </Svg>
        ),
    },
];