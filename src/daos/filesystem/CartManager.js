import { cartsModel } from "../mogodb/models/cart.model.js";
import ProductManager from "./ProductManager.js";

//Clase
class CartManager {
  //Metodos;

  //Crear Carrito
  newCart = async () => {
    try {
      //Crear carrito
      const cart = await cartsModel.create({ products: [], quantity: 0 });
      return { success: "Carrito creado con exito" };
    } catch (error) {
      return { error: "No se pudo crear el carrito" + error };
    }
  };

  //Get Cart by id
  getCartById = async (cid) => {
    try {
      const cart = await cartsModel.findById(cid).populate("products.product");
      return cart;
    } catch (error) {
      return { error: "No existe el carrito" };
    }
  };

  //Get All Carts
  getAllCarts = async () => {
    //Obtener carritos
    try {
      const carts = await cartsModel.find().populate("products.product");
      return carts;
    } catch (error) {
      return { error: "No Existen carritos" };
    }
  };

  //add product to cart
  addProductToCart = async (cid, pid) => {
    //Instancia ProductManager
    const productManager = new ProductManager();
    let cart;
    let product;

    //Obtener carrito
    try {
      cart = await this.getCartById(cid);
    } catch {
      return { error: "No existe el carrito" };
    }

    //Obtener producto
    try {
      product = await productManager.getProductById({ _id: pid });
    } catch {
      return { error: "No existe el producto" };
    }

    //Agregar producto al carrito
    try {
      //Buscar producto en el carrito
      const productInCart = cart.products.find(
        (product) => product.product._id == pid
      );
      console.log(productInCart);
      //Si el producto ya esta en el carrito
      if (productInCart) {
        //Incrementar cantidad
        productInCart.quantity++;
      } else {
        //Si el producto no esta en el carrito
        //Agregar producto al carrito
        cart.products.push({ product: pid, quantity: 1 });
      }
      //Guardar cambios
      await cart.save();

      //Retornar carrito
      return "Producto agregado al carrito";
    } catch {
      return { error: "No se pudo agregar el producto al carrito" };
    }
  };

  //put product to cart
  putProductToCart = async (cid, pid, quantity) => {};

  //put quantity to product in cart
  putQuantityOfProductsInCart = async (cid, pid, quantity) => {
    try {
      //Obtener carrito
      const cart = await cartsModel.findById(cid).populate("products.product");

      //buscar producto en el carrito
      const productInCart = cart.products.find(
        (product) => product.product._id == pid
      );

      //Actualizar cantidad
      productInCart.quantity = quantity;
      cart.save();

      return "Cantidad del producto actualizada";
    } catch {
      return { error: "No se pudo actualizar la cantidad del producto" };
    }
  };

  //delete product from cart
  deleteProductFromCart = async (cid, pid) => {
    //Obtener carrito
    try {
      const cart = await cartsModel.findById(cid);

      //Eliminar producto del carrito metodo pull
      try {
        cart.products.pull(pid);
        cart.save();

        return "Producto eliminado del carrito";
      } catch {
        return { error: "No se pudo eliminar el producto del carrito" };
      }
    } catch {
      return { error: "No existe el carrito" };
    }
  };

  //delete all products from cart
  deleteAllProductsFromCart = async (cid) => {
    //Obtener carrito
    try {
      const cart = await this.getCartById(cid);

      //Eliminar todos los productos del carrito
      try {
        cart.products = [];
        cart.save();

        return "Productos eliminados del carrito";
      } catch {
        return { error: "No se pudieron eliminar los productos del carrito" };
      }
    } catch {
      return { error: "No existe el carrito" };
    }
  };
}

export default CartManager;
