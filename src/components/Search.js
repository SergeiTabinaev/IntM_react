import React from 'react'

// еще в работе: поиск товаров
export const SearchForm = () => {
    return (<div>

                {/*или переделать на реактовские формы)*/}
                {/*action="{% url 'category_detail' slug=category.slug %}" method="GET"*/}
                <form className="d-flex mt-3" >
                    <input className="form-control me-2" name="search" type="search" placeholder="Поиск товара" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Поиск</button>
                </form>
                <hr/>
                {/*action="{% url 'category_detail' slug=category.slug %}" method="GET"*/}
                    <form >
                        category | product_spec
                        <p className="text-center">
                            <button className="btn btn-outline-success" type="submit">Поиск</button>
                            <button className="btn btn-outline-info" type="submit">Сбросить</button>
                        </p>
                    </form>

            </div>
    )
}


// в app.js поместить высоко
// export const Form = () => {
//     const [value, setValue] = useState('')
//
//     const submitHandler = event => {
//         event.preventDefault()}
//
//     if (value.trim()) {
//         // ...
//         setValue('')
//     }else {
//     }
//
//     return (
//         <form onSubmit={submitHandler}>
//             <div className='form-group'>
//                 <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Поиск товара'
//                     value={value}
//                     onChange={e => setValue(e.target.value)}
//                 />
//             </div>
//         </form>
//     )
// }


