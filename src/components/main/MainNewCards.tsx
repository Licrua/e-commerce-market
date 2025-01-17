import { newProducts } from '@/types/cards'
async function MainNewCards() {
  const res = await fetch(
    'https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods'
  )

  if (!res.ok) {
    throw Error('error')
  }

  const products: newProducts = await res.json()

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-red-600">
	  🆕 Новинки  🆕
      </h2>
      <div className="carousel w-screen py-20 rounded-box">
        {products?.map((product) => (
          <div className="carousel-item p-5" key={product.id}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 p-1 object-cover bg-center rounded-t-lg"
              />
              <div className="card bg-base-100 w-96 shadow-xl mt-4">
                <div className="card-body ">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="badge badge-outline bg-amber-50">
                    {product.category}
                  </p>
                  <p>Цена: {product.currentPrice} ₽</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Купить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainNewCards

// https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods
