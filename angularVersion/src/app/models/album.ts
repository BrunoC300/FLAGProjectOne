import { Foto } from './foto';

export class Album {
    id: number | undefined
    nome: string | undefined;
    fotos: Foto[];
}