/* CartWidget */

const CartWidget = (numerito) => {
    return (
        <div>
            <a href="#carrito">
                <img src="./src/img/pelota-padel.png" alt="pelota padel store" className="pelota" id="toggleCarrito"/>
            </a>
            {numerito > 0 && <span className="numerito">{numerito}</span>}
        </div>
    )
}; export default CartWidget