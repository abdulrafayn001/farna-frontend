import React from 'react';
import { Order } from '../interfaces';

const Invoice = React.forwardRef<HTMLDivElement, { order: Order }>(
  (
    {
      order: {
        orderProducts,
        customer,
        salesReceiptDate,
        paymentType,
        validity,
        shipmentType,
        PI_number,
      },
    },
    ref
  ) => {
    const totalAmount = orderProducts.reduce(
      (total, product) => total + product.quantity * product.rate,
      0
    );

    return (
      <div
        ref={ref}
        className="bg-white w-full h-auto font-serif overflow-y-auto"
        id="pdf-invoice"
      >
        <div className="flex items-center mb-12 leading-[1.2]">
          <div className="text-3xl font-bold mb-5 text-[32pt]">
            FARNA TEXTILES
          </div>
          <img
            src="../../public/farna-logo.png"
            alt="Farna Textiles Logo"
            className="h-15 w-auto ml-[12rem]"
          />
        </div>
        <div className="text-2xl text-green-600 mb-8">REQUEST FOR P.I</div>
        <div className="flex justify-between mb-8">
          <div>
            <div className="text-2xs text-gray-400">BILL TO</div>
            <div className="text-base">{customer.businessName}</div>
          </div>
          <div>
            <div className="text-left mb-6 flex">
              <div className="text-2xs text-gray-400">DATE</div>
              <div className="text-base ml-3">{salesReceiptDate}</div>
            </div>
            <div className="text-2xs text-gray-400">PAYMENT METHOD</div>
            <div className="text-base">{paymentType.name}</div>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div>
            <div className="text-2xs text-gray-400">VALIDITY</div>
            <div className="text-base uppercase text-black-500">{validity}</div>
          </div>
          <div>
            <div className="text-2xs text-gray-400">SHIPMENT</div>
            <div className="text-base uppercase text-black-500">
              {shipmentType}
            </div>
          </div>
          <div>
            <div className="text-2xs text-gray-400">P.I NUMBER</div>
            <div className="text-base uppercase text-black-500">
              {PI_number}
            </div>
          </div>
        </div>
        <div className="flex justify-between text-green-600 bg-gray-200">
          <div className="w-1/6 font-medium">ACTIVITY</div>
          <div className="w-1/6 font-medium">DESCRIPTION</div>
          <div className="w-1/6 font-medium">QTY</div>
          <div className="w-1/6 font-medium">RATE</div>
          <div className="w-1/6 font-medium">AMOUNT</div>
        </div>
        {/* Table Content */}
        {orderProducts.map(({ id, product, quantity, rate }) => (
          <div key={id} className="flex justify-between mb-4">
            <div className="w-1/6">
              {product.denier} Lot #{product.lotNo}
            </div>
            <div className="w-1/6">
              {`${product.luster} | ${product.denier} | ${product.noOfFilaments} `}
              {product.endUses.map((endUse, index) => (
                <span key={endUse.name}>
                  {endUse.name}
                  {index !== product.endUses.length - 1 && ' | '}
                </span>
              ))}
            </div>
            <div className="w-1/6">{quantity}</div>
            <div className="w-1/6">{rate}</div>
            <div className="w-1/6">{quantity * rate}</div>
          </div>
        ))}
        <hr className="mt-6 border-t border-dashed border-gray-400 w-full" />
        <div className="mt-4 flex justify-end">
          <div className="text-lg text-gray-400 pr-[19rem]">TOTAL</div>
          <div className="text-1xl">{totalAmount.toFixed(2)}</div>
        </div>
        <hr className="mt-2 border-t border-dashed border-gray-400 w-[25rem] ml-auto" />
        <div className="mt-4 flex justify-end">
          <div className="text-lg text-gray-400 pr-[9rem]">BALANCE DUE</div>
          <div className="text-2xl font-semibold pr-2">USD 0.00</div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12">
          Page 1 of 1
        </div>
      </div>
    );
  }
);

Invoice.displayName = 'Invoice';

export default Invoice;