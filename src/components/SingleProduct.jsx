import { useParams } from 'react-router-dom';
import guard from './../assets/singleProductDescription/guard.svg';
import moisture from './../assets/singleProductDescription/moisture.svg';
import Trending from './../assets/singleProductDescription/Trending.svg';
import { useState } from 'react';
import products from './../data/products';
import Heading from './../components/Heading';
import './singleProduct.css';
import Reviews from './Reviews';
const SingleProduct = () => {
  const incrementHandler = () => {
    setProductNumber(productNumber + 1);
  };
  const decrementHandler = () => {
    setProductNumber(productNumber - 1);
  };
  const { id } = useParams();
  const [productsData] = useState(products);
  const [liked, setLiked] = useState(false);
  const [productNumber, setProductNumber] = useState(1);
  const targetProduct = productsData.find((product) => product.id === +id);
  return (
    <section className="singleProduct">
      <div className="product-review">
        <div className="selected-images">
          <ul>
            {targetProduct.singleProducts.map((image, index) => {
              return (
                <li key={index}>
                  <img src={image.product} alt={`product ${index}`} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="main-image">
          <span
            style={{ padding: targetProduct.discount ? '1rem 1.5rem' : 'null' }}
            className="product-discount"
          >
            {targetProduct.discount || null}
          </span>
          <img src={targetProduct.src} alt={targetProduct.title} />
        </div>
      </div>
      <div className="product-info">
        <Heading
          headingTitle="- Selling Fast"
          headingDescription={targetProduct.title}
          position="left"
        />
        <div className="card-information">
          <h3
            className="card-category"
            style={{
              backgroundColor: targetProduct.backgroundColor,
              color: targetProduct.color,
            }}
          >
            {targetProduct.category}
          </h3>
          <div className="card-price">
            <span className="old-card-price">
              {targetProduct.oldPrice || ''}
            </span>
            <span className="new-card-price">{targetProduct.newPrice}</span>
          </div>
          <p className="card-sku">
            SKU: <span>{targetProduct.sku}</span>
          </p>
        </div>
        <div className="product-shop">
          <div className="buttons-shop-buttons">
            <button className="btn decrement-btn" onClick={decrementHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  transform="translate(0,256) rotate(-90) skewX(0)"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                    <path
                      d="M37,27.528l-12.998,-12.998l-0.002,0.002l-0.002,-0.002l-12.998,12.998l3.942,3.942l9.058,-9.058l9.058,9.058z"
                      fill="#c1f5ea"
                    ></path>
                    <rect
                      x="1.12236"
                      y="27.24631"
                      transform="rotate(-45.001)"
                      width="5.572"
                      height="5.572"
                      fill="#ffffff"
                    ></rect>
                  </g>
                </g>
              </svg>
            </button>
            <span className="shop-value">{productNumber}</span>
            <button className="btn increment-btn" onClick={incrementHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  transform="translate(256,0) rotate(90) skewX(0)"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                    <path
                      d="M37,27.528l-12.998,-12.998l-0.002,0.002l-0.002,-0.002l-12.998,12.998l3.942,3.942l9.058,-9.058l9.058,9.058z"
                      fill="#c1f5ea"
                    ></path>
                    <rect
                      x="1.12236"
                      y="27.24631"
                      transform="rotate(-45.001)"
                      width="5.572"
                      height="5.572"
                      fill="#ffffff"
                    ></rect>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <button className="btn cart-button">Add To Cart</button>
          <div className="product-shop-fav" onClick={() => setLiked(!liked)}>
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 64 64"
              >
                <path d="M 17.890625 6 C 8.0204321 6 0 14.020432 0 23.890625 C 0 29.856293 3.567407 35.611828 8.2011719 40.673828 C 15.26905 48.44442 24.962798 54.661438 29.263672 57.246094 C 30.103989 57.753734 31.053248 58.00203 32 57.996094 C 32.944471 58.001994 33.894009 57.755968 34.734375 57.248047 L 34.736328 57.246094 C 39.036779 54.661711 48.729156 48.445423 55.796875 40.675781 C 60.431555 35.613285 64 29.8571 64 23.890625 C 64 14.020432 55.979568 6 46.109375 6 C 41.22346 6 36.779144 7.9724416 33.556641 11.160156 C 33.47478 11.240067 33.312975 11.400847 32.982422 11.619141 C 32.651869 11.837434 32.241315 12 32 12 C 31.758685 12 31.348131 11.837434 31.017578 11.619141 C 30.689494 11.402478 30.529707 11.244575 30.447266 11.164062 L 30.443359 11.160156 C 27.220849 7.9724356 22.77654 6 17.890625 6 z M 17.890625 8 C 22.240736 8 26.177832 9.751922 29.041016 12.585938 A 1.0001 1.0001 0 0 0 29.044922 12.589844 C 29.005062 12.550934 29.408366 12.953153 29.914062 13.287109 C 30.419766 13.621072 31.116315 14 32 14 C 32.883685 14 33.58024 13.621066 34.085938 13.287109 C 34.591634 12.953153 34.994938 12.550933 34.955078 12.589844 A 1.0001 1.0001 0 0 0 34.958984 12.585938 C 37.822174 9.751916 41.759264 8 46.109375 8 C 54.899182 8 62 15.100818 62 23.890625 C 62 29.04415 58.787586 34.446715 54.322266 39.324219 A 1.0001 1.0001 0 0 0 54.320312 39.326172 C 47.509076 46.814611 37.924974 52.997303 33.705078 55.533203 A 1.0001 1.0001 0 0 0 33.701172 55.535156 C 33.180858 55.850193 32.595261 56.004589 32.007812 56 A 1.0001 1.0001 0 0 0 31.992188 56 C 31.405607 56.0046 30.818173 55.848122 30.296875 55.533203 A 1.0001 1.0001 0 0 0 30.294922 55.533203 C 26.075069 52.997303 16.490971 46.814658 9.6796875 39.326172 A 1.0001 1.0001 0 0 0 9.6777344 39.324219 C 5.2124113 34.446762 2 29.04415 2 23.890625 C 2 15.100818 9.1008179 8 17.890625 8 z M 46.166016 10.931641 A 1.0001 1.0001 0 1 0 46.1875 12.931641 C 46.1875 12.931641 47.522407 12.916131 49.330078 13.503906 A 1.0001 1.0001 0 1 0 49.947266 11.601562 C 47.842937 10.917333 46.166016 10.931641 46.166016 10.931641 z M 53.001953 13.212891 A 1.0001 1.0001 0 0 0 52.400391 15.035156 C 54.140233 16.274245 55.792832 18.215529 56.703125 21.443359 A 1.0001 1.0001 0 1 0 58.626953 20.900391 C 57.599246 17.256221 55.628705 14.879161 53.560547 13.40625 A 1.0001 1.0001 0 0 0 53.001953 13.212891 z M 12.943359 32.861328 A 1.0001 1.0001 0 0 0 12.236328 33.117188 L 10.730469 34.433594 A 1.0001 1.0001 0 1 0 12.046875 35.939453 L 13.552734 34.623047 A 1.0001 1.0001 0 0 0 12.943359 32.861328 z M 16.271484 36.460938 A 1.0001 1.0001 0 0 0 15.583984 36.767578 L 14.179688 38.189453 A 1.0001 1.0001 0 1 0 15.601562 39.595703 L 17.007812 38.173828 A 1.0001 1.0001 0 0 0 16.271484 36.460938 z M 19.945312 39.832031 A 1.0001 1.0001 0 0 0 19.179688 40.185547 L 17.867188 41.695312 A 1.0002558 1.0002558 0 1 0 19.376953 43.007812 L 20.689453 41.498047 A 1.0001 1.0001 0 0 0 19.945312 39.832031 z M 23.830078 42.962891 A 1.0001 1.0001 0 0 0 23.730469 42.964844 A 1.0001 1.0001 0 0 0 22.990234 43.367188 L 21.773438 44.955078 A 1.0002487 1.0002487 0 1 0 23.361328 46.171875 L 24.578125 44.582031 A 1.0001 1.0001 0 0 0 23.830078 42.962891 z M 27.802734 45.857422 A 1.0001 1.0001 0 0 0 26.986328 46.310547 L 25.871094 47.970703 A 1.0001 1.0001 0 1 0 27.53125 49.085938 L 28.646484 47.427734 A 1.0001 1.0001 0 0 0 27.802734 45.857422 z M 32.039062 48.503906 A 1.0001 1.0001 0 0 0 31.154297 49.009766 L 30.140625 50.736328 A 1.0001 1.0001 0 1 0 31.865234 51.748047 L 32.878906 50.023438 A 1.0001 1.0001 0 0 0 32.039062 48.503906 z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#ed7899"
                  d="M32,56.999c0.768,0.006,1.538-0.196,2.22-0.609c4.26-2.56,13.9-8.76,20.84-16.39 C59.61,35.03,63,29.45,63,23.89C63,14.56,55.44,7,46.11,7c-4.619,0-8.811,1.863-11.854,4.875C34.214,11.916,33.125,13,32,13 s-2.214-1.084-2.256-1.125C26.701,8.863,22.509,7,17.89,7C8.56,7,1,14.56,1,23.89C1,29.45,4.39,35.03,8.94,40 c6.94,7.63,16.58,13.83,20.84,16.39C30.462,56.802,31.232,57.005,32,56.999L32,56.999z"
                ></path>
                <path
                  fill="#f283a5"
                  d="M56.874,10.77c4.066,4.418,6.087,8.836,6.045,13.254c-0.013,1.371-1.134,2.476-2.505,2.476l0,0 c-1.413,0-2.498-1.171-2.494-2.584c0-0.009,0-0.018,0-0.026c0-6.56-5.34-11.89-11.89-11.89c-0.932,0-1.857,0.113-2.751,0.328 c-1.098,0.264-2.234-0.246-2.77-1.24l-0.004-0.008c-0.78-1.448,0.028-3.239,1.628-3.621c4.397-1.049,9.453-0.386,14.262,2.895 C56.568,10.472,56.732,10.616,56.874,10.77z"
                ></path>
                <path
                  fill="#e0678f"
                  d="M31.994,56.716c-1.071,0-2.155-0.287-3.134-0.888c-3.762-2.311-13.236-8.48-19.933-15.842 c-0.612-0.668-1.219-1.377-1.896-2.216c-2.082-2.578-1.68-6.356,0.898-8.438c2.579-2.082,6.356-1.679,8.438,0.898 c0.518,0.641,0.97,1.17,1.424,1.666c5.834,6.415,14.754,12.112,17.35,13.706c2.824,1.734,3.707,5.429,1.973,8.253 C35.98,55.699,34.011,56.716,31.994,56.716z"
                ></path>
                <path
                  fill="none"
                  stroke="#8d6c9f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M32,56.999c0.768,0.006,1.538-0.196,2.22-0.609c4.26-2.56,13.9-8.76,20.84-16.39C59.61,35.03,63,29.45,63,23.89 C63,14.56,55.44,7,46.11,7c-4.619,0-8.811,1.863-11.854,4.875C34.214,11.916,33.125,13,32,13s-2.214-1.084-2.256-1.125 C26.701,8.863,22.509,7,17.89,7C8.56,7,1,14.56,1,23.89C1,29.45,4.39,35.03,8.94,40c6.94,7.63,16.58,13.83,20.84,16.39 C30.462,56.802,31.232,57.005,32,56.999L32,56.999z"
                ></path>
                <g>
                  <path
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M52.98,14.221c1.904,1.356,3.716,3.514,4.685,6.95"
                  ></path>
                  <path
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M46.176,11.932c0,0,1.507-0.016,3.463,0.62"
                  ></path>
                </g>
                <g>
                  <line
                    x1="12.895"
                    x2="11.389"
                    y1="33.87"
                    y2="35.186"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="16.296"
                    x2="14.89"
                    y1="37.47"
                    y2="38.892"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="19.935"
                    x2="18.623"
                    y1="40.842"
                    y2="42.352"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="23.784"
                    x2="22.568"
                    y1="43.975"
                    y2="45.563"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="27.817"
                    x2="26.701"
                    y1="46.869"
                    y2="48.528"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="32.016"
                    x2="31.003"
                    y1="49.517"
                    y2="51.242"
                    fill="none"
                    stroke="#8d6c9f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></line>
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
      <Heading
        headingTitle="- Product Features"
        headingDescription="Explore the Features"
        position="left"
      />
      <div className="product-description">
        <ul>
          <li>
            <div className="description-image">
              <img src={moisture} alt="moisture" />
            </div>
            <h3>Natural</h3>
            <p>
              We are using natural ingredients only when creating our products.
            </p>
          </li>
          <li>
            <div className="description-image">
              <img src={guard} alt="guard" />
            </div>
            <h3>Full Protection</h3>
            <p>
              This product provides broad spectrum SPF 50 and blue light
              protection.
            </p>
          </li>
          <li>
            <div className="description-image">
              <img src={Trending} alt="trending" />
            </div>
            <h3>Trending</h3>
            <p>It is one of our most popular products that we have on offer.</p>
          </li>
        </ul>
      </div>
      <Reviews className="reviews-product" />
    </section>
  );
};

export default SingleProduct;
