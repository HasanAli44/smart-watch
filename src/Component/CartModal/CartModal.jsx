import CartImg1 from "../../../public/images/image1.png";
import CartImg2 from "../../../public/images/images3.png";
import CartImg3 from "../../../public/images/image2.png";

const CartModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="bg-white rounded-[20px] px-11">
          <h4 className="text-[22px] font-bold text-[#364A63] pt-11 pb-4">
            Your Cart
          </h4>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <thead>
                <tr>
                  <th className="text-[#8091A7] text-sm">Item</th>
                  <th className="text-[#8091A7] text-sm">Color</th>
                  <th className="text-[#8091A7] text-sm">Size</th>
                  <th className="text-[#8091A7] text-sm">Qnt</th>
                  <th className="text-[#8091A7] text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="">
                  <th className="flex items-center">
                    <img src={CartImg1} alt="" />
                    <p className="text-sm font-normal text-[#364A63] pl-2">
                      Classy Modern Smart watch
                    </p>
                  </th>
                  <td className=" text-sm text-[#364A63]">Black</td>

                  <td className="text-sm font-bold text-[#364A63]">XL</td>
                  <td className="text-sm font-bold text-[#364A63]">1</td>
                  <td className="text-sm font-bold text-[#364A63]">$99.00</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th className="flex items-center">
                    <img src={CartImg2} alt="" />
                    <p className="text-sm font-normal text-[#364A63] pl-2">
                      Classy Modern Smart watch{" "}
                    </p>
                  </th>
                  <td className=" text-sm text-[#364A63]">Purple</td>

                  <td className="text-sm font-bold text-[#364A63]">L</td>
                  <td className="text-sm font-bold text-[#364A63]">2</td>
                  <td className="text-sm font-bold text-[#364A63]">$178.00</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th className="flex items-center">
                    <img src={CartImg3} alt="" />
                    <p className="text-sm font-normal text-[#364A63] pl-2">
                      Classy Modern Smart watch
                    </p>
                  </th>
                  <td className=" text-sm text-[#364A63]">Cyan</td>

                  <td className="text-sm font-bold text-[#364A63]">M</td>
                  <td className="text-sm font-bold text-[#364A63]">1</td>
                  <td className="text-sm font-bold text-[#364A63]">$79.00</td>
                </tr>
                <tr>
                  <th className="text-[#373737] text-[16px] font-bold">
                    Total
                  </th>
                  <th></th>
                  <th></th>
                  <th className="font-bold">4</th>
                  <th className="text-[18px] font-bold text-[#373737]">
                    $356.00
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pb-11 pt-[26px] text-end">
            <button className="px-[18px] py-2  border rounded-[3px] font-bold text-[13px] text-[#364A63] mr-6">
              Continue Shopping
            </button>
            <button className="px-[18px] py-2 rounded-[3px] bg-[#6576FF] text-white font-bold text-[13px] ">
              Checkout
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartModal;
