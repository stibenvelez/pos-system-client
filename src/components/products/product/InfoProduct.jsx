import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const InfoProduct = () => {
  const product = useSelector(({products})=>products.product);
  return (
      <div className="flex flex-col items-center gap-8 lg:items-start lg:justify-center lg:flex-row">
          <div className="w-64 h-64 bg-gray-300 border-8 rounded">
              <img
                  className="object-contain rounded"
                  src={`/public/assets/img/products/${
                      product.image ?? "productDefault.png"
                  }`}
                  alt="product"
              />
          </div>
          <div className="w-2/3">
              <div className="grid grid-cols-1 gap-4 ">
                  <div className="flex flex-col gap-4 p-10 bg-white rounded-md shadow">
                      <div className="flex flex-col gap-4">
                          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                              <div className="">
                                  <label
                                      htmlFor="quantity"
                                      className="block text-sm font-medium text-gray-700 capitalize"
                                  >
                                      Producto
                                      <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                      id="product"
                                      name="product"
                                      type="text"
                                      placeholder="Ejemplo: Pasacinta, Parlante 10 pulgadas, polarizado completo"
                                      autoComplete="product"
                                      className="block w-full px-3 py-2 mt-1 capitalize border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.product}
                                      readOnly
                                  />
                              </div>
                              <div className="">
                                  <label
                                      htmlFor="category"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Categoria
                                      <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                      id="idProductCategory"
                                      name="idProductCategory"
                                      autoComplete="idProductCategory"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.idProductCategory}
                                      readOnly
                                  />
                              </div>
                              <div className="">
                                  <label
                                      htmlFor="quantity"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Marca
                                  </label>
                                  <input
                                      id="brand"
                                      name="brand"
                                      type="text"
                                      placeholder="Pionneer, Bose, Focal, Kenwood"
                                      autoComplete="brand"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.brand}
                                      readOnly
                                  />
                              </div>
                          </div>

                          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                              <div className="">
                                  <label
                                      htmlFor="quantity"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Precio de venta
                                      <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                      id="unitPrice"
                                      name="unitPrice"
                                      type="text"
                                      placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                      autoComplete="unitPrice"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.unitPrice}
                                      readOnly
                                  />
                              </div>
                              <div className="">
                                  <label
                                      htmlFor="unitCost"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Costo unitario
                                  </label>
                                  <input
                                      id="unitCost"
                                      name="unitCost"
                                      type="text"
                                      placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                      autoComplete="quantity"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.unitCost}
                                      readOnly
                                  />
                                  product
                              </div>
                              <div className="col-span-1 ">
                                  <label
                                      htmlFor="quantity"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      % comisión
                                  </label>
                                  <input
                                      id="commissionPercentage"
                                      name="commissionPercentage"
                                      type="text"
                                      placeholder="% 000"
                                      autoComplete="commissionPercentage"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={
                                          product.commissionPercentage
                                      }
                                      readOnly
                                  />
                              </div>
                              <div className="">
                                  <label
                                      htmlFor="quantity"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Valor de comision
                                      <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                      id="commissionValue"
                                      name="commissionValue"
                                      type="text"
                                      placeholder="Ejemplo: Pasasinta, Parlante 10 pulgadas, polarizado completo"
                                      autoComplete="commissionValue"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.commissionValue}
                                      readOnly
                                  />
                              </div>
                          </div>
                          <div>
                              <div className="">
                                  <label
                                      htmlFor="observations"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Notas
                                  </label>
                                  <textarea
                                      id="observations"
                                      name="observations"
                                      autoComplete="observations"
                                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-200bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      defaultValue={product.observations}
                                      readOnly
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="py-3 flex">
                      <Link
                          to={`/dashboard/products/edit-product/${product.idProduct}`}
                          className="bg-gray-500 py-2 px-3 text-white rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                      >
                          Editar producto
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default InfoProduct