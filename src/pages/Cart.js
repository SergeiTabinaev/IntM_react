import React, {useState, useEffect} from "react";
import axios from "axios";

//Еще в работе: логика заказа товара
export const Cart = () => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/cart/cartproducts/`
        }).then(response => {
            // setProds(response.data[1].products)
            setProds(response.data)
        })
    }, [])


    const del = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(`http://127.0.0.1:8000/api/cart/cartproducts/${id}`, {
                method: 'DELETE'
            });

            setProds(prods.filter((cp) => cp.id !== id));
        }
    }

    return(
        <div>
            <h3 className="text-center mt-5 mb-5">
                Ваша корзина
            </h3>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Наименование</th>
                    <th scope="col">Изображение</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Общая цена</th>
                    <th scope="col">Действие</th>
                </tr>
                </thead>
                <tbody>
                {prods.map(cp => (
                <tr>
                    <th scope="row"> {cp.product.title} </th>
                    <td className="w-25">
                        <img className="img-fluid" src={`http://127.0.0.1:8000` + cp.product.image} height="180" alt=""/>
                    </td>
                    <td>
                        {cp.product.price} руб.
                    </td>
                    <td> сделать счетчик
                        {/*<form action="{% url 'change_qty' slug=item.product.slug %}" method="POST">*/}
                        {/*    {% csrf_token %}*/}
                        {/*    <input type="number" class="form-control" name="qty" style="width: 70px;" min="1" value="{{ item.qty }}">*/}
                        {/*        <br>*/}
                        {/*            <input type="submit" class="btn btn-primary" value="Изменить кол-во">*/}
                        {/*</form>*/}
                    </td>
                    <td> {cp.final_price} руб.</td>
                    <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => del(cp.id)}>
                                Удалить из корзины
                            </button>
                    </td>
                </tr>
                ))}
                {/*<tr>*/}
                {/*    <td>?</td>*/}
                {/*    <td>Итого:</td>*/}
                {/*    <td> cart.total_products </td>*/}
                {/*    <td><strong> cart.final_price руб.</strong></td>*/}
                {/*    <td>*/}
                {/*        <NavLink exact to='/checkout'>*/}
                {/*            <button className="btn btn-primary">*/}
                {/*                Перейти к оформлению*/}
                {/*            </button>*/}
                {/*        </NavLink>*/}
                {/*    </td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </div>
    )
}