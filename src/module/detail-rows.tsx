import { useState } from "react";
import { GENERAL_MARGIN } from "../constant/them.style";
import ProductData from "../data/detail-rows.json";

export default function DetailRows() {
    const [expandableIndexes, setExpandableIndexes] = useState<number[]>([]);

    return (
        <div id="detail-row" className={`${GENERAL_MARGIN} my-5`}>
            <h1 className="text-5xl font-semibold text-center my-12">Assignment 2</h1>

            <div className="block max-h-[290px] overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="sticky top-0 bg-gray-50">
                        <tr>
                            <th scope="col" className="border border-slate-300 p-4"></th>
                            <th scope="col" className="border border-slate-300 px-6 py-3">Product</th>
                            <th scope="col" className="border border-slate-300 px-6 py-3">ID</th>
                            <th scope="col" className="border border-slate-300 px-6 py-3">Unit Price</th>
                            <th scope="col" className="border border-slate-300 px-6 py-3">Qty Per Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductData.map((product, productIndex) => (
                            [<tr key={"detail-row-a" + productIndex} className={`border-b hover:bg-gray-50 ${productIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                <td className="border border-slate-300 w-4 p-4">
                                    <button onClick={() => setExpandableIndexes((indexes) => {
                                        if (indexes.includes(product.ProductID)) {
                                            return indexes.filter(x => x !== product.ProductID);
                                        }
                                        return [...indexes, product.ProductID];
                                    })}>+</button>
                                </td>
                                <td className="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{product.ProductName}</td>
                                <td className="border border-slate-300 px-6 py-4">{product.ProductID}</td>
                                <td className="border border-slate-300 px-6 py-4">{product.UnitPrice}</td>
                                <td className="border border-slate-300 px-6 py-4">{product.QuantityPerUnit}</td>
                            </tr>
                                ,
                            <tr key={"detail-row-b" + productIndex} className={`bg-white border-b hover:bg-gray-50 ${expandableIndexes.includes(product.ProductID) ? "" : "hidden"}`}>
                                <td></td>
                                <td colSpan={4}>
                                    <section className="m-4">
                                        <p><strong>In Stock: </strong>{product.UnitsInStock} units</p>
                                        <p><strong>On Order: </strong>{product.UnitsOnOrder} units</p>
                                        <p><strong>Reorder Level: </strong>{product.ReorderLevel} units</p>
                                        <p><strong>Discontinued: </strong> {product.Discontinued ? 'Yes' : 'No'}</p>
                                        <p><strong>Category: </strong>{product.Category.Description}</p>
                                    </section>
                                </td>
                            </tr>].map(x => x)
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
