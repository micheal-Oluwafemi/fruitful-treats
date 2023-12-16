import { BsPlus, BsDash, BsJustifyLeft } from 'react-icons/bs';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';
import 'animate.css';
import { useSelector } from 'react-redux';
import {
  clearCart,
  decrease,
  getCartTotal,
  increase,
  remove,
} from '../redux/CartSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [acctNum, setAcctNum] = useState('################');
  const [date, setDate] = useState('MM/YY');
  const [cvv, setCvv] = useState('CVV');
  const [hideIcon, setHideIcon] = useState(false);
  const [hideProceedBtn, setHideProceedBtn] = useState(false);
  const [showAtm, setShowAtm] = useState(false);
  const [loading, setLoading] = useState(false);

  const { item, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [item]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);

    const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');

    setAcctNum(formattedValue);

    if (acctNum.length === 18) {
      setHideIcon(true);
    } else {
      setHideIcon(false);
    }
  };

  const handleDateChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '').slice(0, 4);

    const formattedValue = value.replace(/(.{2})(.{2})/, '$1/$2');

    setDate(formattedValue);
  };

  const handleCVVChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, '').slice(0, 3);

    setCvv(value);
    if (cvv.length === 2) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleSubmit = () => {
    if (acctNum === '################') {
      toast.error('Enter Acct Number!');
    } else if (date === 'MM/YY') {
      toast.error('Enter Card Expiry Date!');
    } else if (cvv === 'CVV') {
      toast.error('Enter Card Validation Value Number(CVV)!');
    } else if (
      cvv === 'CVV' ||
      acctNum === '################' ||
      date === 'MM/YY'
    ) {
      toast.error('Enter Card Details!');
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success('Payment Successful');
        dispatch(clearCart());
        navigate('/');
        window.scrollTo(0, 0);
      }, 3000);
    }
  };

  if (item.length == 0) {
    return (
      <>
        <div
          className='h-screen grid place-content-center
        '
        >
          <div className='animate-pulse'>
            <h3 className='text-black dark:text-whiteColor text-xl font-semibold text-center font-poppins'>
              Cart is Empty!
            </h3>
            <h4 className='text-[16px] text-black dark:text-whiteColor text-center font-poppins font-medium'>
              Add Items
            </h4>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={`bg-containerColor dark:bg-titleColor  md:px-[7rem] xlg:px-[15rem] px-4 pt-20 py-5 font-poppins text-black dark:text-white`}
    >
      <div className='flex md:flex-row flex-col items-start gap-5 md:gap-2 overflow-auto'>
        <div className='md:w-[60%] w-full'>
          <h1 className='text-2xl font-bold'>Shopping Cart.</h1>

          <div className='mt-12 relative h-max overflow-auto'>
            <table className='w-full table-auto text-sm text-left'>
              <thead className='text-gray-600 dark:text-whiteColor font-medium border-b'>
                <tr>
                  <th className='py-3 pr-36 lg:text-xl text-xl'>Product</th>
                  <th className='py-3 pr-12 lg:text-xl text-xl'>Quantity</th>
                  <th className='py-3 pr-12 lg:text-xl text-xl'>price</th>
                  <th className='py-3 pr-12 lg:text-xl text-xl'></th>
                </tr>
              </thead>
              <tbody className='text-gray-600 dark:text-whiteColor divide-y'>
                {item.map((item, idx) => (
                  <tr key={idx}>
                    <td className='pr-36 py-4 whitespace-nowrap flex flex-row items-center gap-4'>
                      <div className='w-[85%]'>
                        <img src={item.img} alt='' className='full' />
                      </div>

                      <div className='w-[15%]'>
                        <h3 className='text-xl tracking-wide lg:text-2xl font-medium font-cherryBoom'>
                          {item.header}
                        </h3>
                      </div>
                    </td>
                    <td className='pr-12 py-4 whitespace-nowrap '>
                      <div className='flex flex-row items-center justify-center gap-3'>
                        <div
                          onClick={() => dispatch(decrease(item.id))}
                          className='w-8 h-5 rounded-sm p-1 bg-green-500 flex justify-center items-center cursor-pointer'
                        >
                          <BsDash size={15} color='white' />
                        </div>

                        <div className='text-[14px] lg:text-[16px] font-semibold'>
                          {item.amount}
                        </div>

                        <div
                          onClick={() => dispatch(increase(item.id))}
                          className='w-8 h-5 rounded-sm p-1 bg-green-500 flex justify-center items-center cursor-pointer'
                        >
                          <BsPlus size={15} color='white' />
                        </div>
                      </div>
                    </td>

                    <td className='pr-12 py-4 whitespace-nowrap text-lg'>
                      {`$${item.price}`}
                    </td>
                    <td className='text-right pr-10 whitespace-nowrap'>
                      <button
                        onClick={() => dispatch(remove(item.id))}
                        className='py-1.5 px-2.5 text-white  duration-150 hover:bg-red-600 bg-red-500 text-[15px] border rounded-md lg:text-[15px] lg:py-2.5 lg:px-5'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='md:w-[40%] w-full p-3 bg-gradient-to-t from-whiteColor to-slate-100 md:rounded-none rounded-lg'>
          <h1 className='text-2xl font-bold text-black '>Payment Info.</h1>

          <div>
            <h5 className='text-gray-400 text-[16px] lg:text-[16px] pt-4 font-semibold'>
              Choose a payment method
            </h5>

            <div
              onClick={() => {
                setHideProceedBtn(true);
              }}
              className={` flex flex-row items-center justify-between py-2 px-1 ${
                hideProceedBtn === true ? 'border border-green-500' : ''
              }  mt-2 cursor-pointer`}
            >
              <div className='flex items-center gap-[1px]'>
                <HiOutlineCreditCard size={22} color='black' />

                <h4 className='text-[14px] lg:text-[15px] text-black font-semibold'>
                  Pay With Card
                </h4>
              </div>

              <div className='flex items-center gap-[1px]'>
                <BsJustifyLeft size={20} color='black' />

                <p className='text-[13px] lg:text-[15px] font-semibold text-black'>
                  paystack
                </p>
              </div>
            </div>

            <div
              onClick={() => {
                setShowAtm((prev) => !prev);
                // setHideProceedBtn()
              }}
              className={` ${
                hideProceedBtn === true
                  ? 'animate__animated animate__fadeInUp flex justify-center items-center cursor-pointer'
                  : 'hidden'
              }  `}
            >
              <h1 className='text-white text-center text-[15px] bg-green-500 w-full py-[8px] lg:text-[16px] mt-3 rounded-md'>
                Proceed to Payment
              </h1>
            </div>

            <div
              className={`${
                showAtm === true
                  ? ' animate__animated animate__fadeInUp block'
                  : 'hidden'
              } mt-2`}
            >
              <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <CardFront
                  setIsFlipped={setIsFlipped}
                  acctNum={acctNum}
                  date={date}
                  hideIcon={hideIcon}
                />

                <CardBack setIsFlipped={setIsFlipped} cvv={cvv} />
              </ReactCardFlip>

              <input
                type='text'
                placeholder='Card Number'
                maxLength={16}
                onChange={handleInputChange}
                // onFocus={() => setIsFlipped((prev) => !prev)}
                className='border border-gray-500 mt-3 text-[14px] px-2 py-2 w-full rounded-sm outline-none text-black lg:text-[15px]'
              />

              <div className='flex items-center justify-between mt-2'>
                <input
                  type='text'
                  onChange={handleDateChange}
                  className='border border-gray-500 text-[14px] lg:text-[13px] px-2 py-1.5 rounded-sm w-[4.1rem] lg:w-[4rem] outline-none text-black'
                  maxLength={4}
                  placeholder='MM/YY'
                />

                <input
                  type='text'
                  className='border border-gray-500 text-[14px] lg:text-[13px] px-2 py-1.5 rounded-sm w-[3rem] outline-none text-black'
                  placeholder='CVV'
                  maxLength={3}
                  onClick={() => setIsFlipped((prev) => !prev)}
                  onChange={handleCVVChange}
                />
              </div>
            </div>
          </div>

          <div className='flex items-center pt-6 gap-10'>
            <div>
              <h1 className='text-[1.4rem] lg:text-2xl font-semibold text-black'>{`$${totalAmount}`}</h1>
            </div>

            <a
              href='#payment'
              onClick={handleSubmit}
              className='bg-black-gradient px-3 py-2 rounded-md cursor-pointer flex-1'
            >
              <h3 className='text-[16px] font-semibold text-white text-center lg:text-[16px]'>
                {loading ? 'Loading...' : 'Pay'}
              </h3>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
