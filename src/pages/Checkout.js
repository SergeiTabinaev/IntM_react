import React from "react";


//Не готово
export const Checkout = () => {
    return(
        <div>
            <h3 className="text-center mt-5 mb-5">Оформление заказа</h3>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Наименование</th>
                    <th scope="col">Изображение</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Общая цена</th>
                </tr>
                </thead>
                <tbody>
                {/*{% for item in cart.products.all %}*/}
                <tr>
                    <th scope="row">item.product.title</th>
                    <td className="w-25"><img src="" alt='' className="img-fluid"/></td>
                    <td>item.product.price руб.</td>
                    <td>item.qty</td>
                    <td>item.final_price руб.</td>
                </tr>
                {/*{% endfor %}*/}
                <tr>
                    <td colSpan="2">?</td>
                    <td>Итого:</td>
                    <td>cart.total_products</td>
                    <td><strong>cart.final_price руб.</strong></td>
                </tr>
                </tbody>
            </table>
            <hr/>
                <h3 className="text-center mt-5 mb-5">Форма заказа</h3>
                {/*<form action="{% url 'make_order' %}" method="POST">*/}
                {/*    {% csrf_token %}*/}
                {/*    {{form | crispy}}*/}
                    создать какой то пост экшен на покупку (в инпут по умолчанию запихать values="Оформить заказ")
                    <input type="submit" className="btn btn-success btn-block mb-3" />
                {/*</form>*/}

        </div>
    )
}