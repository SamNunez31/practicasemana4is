import { Producto } from './productos.model';
export declare class ProductosResolver {
    private readonly catalogo;
    productos(): Producto[];
    productoPorId(id: number): Producto | undefined;
}
