
import React from 'react'
import Phone from './Phone';
import './App.css';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';


// icons
import { MdOutlineSignalWifi0Bar } from "react-icons/md";
import { IoIosWifi, IoIosBluetooth, IoMdPhonePortrait } from "react-icons/io";
import { RiRouterLine } from "react-icons/ri";
import { CiUnlock, CiDroplet } from "react-icons/ci";
import { PiSpeakerSimpleHigh } from "react-icons/pi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRotateRight } from "react-icons/fa6";
import { RiHotspotLine } from "react-icons/ri";
import { FiMinimize2 } from "react-icons/fi";





export default function App() {
  return (
    <>

      <div className="row py-5 text-white" style={{ background: 'black' }}>

        <div className="col-md-4 col-2">
          <h1 className='px-5'>P</h1>
          <h1 className='px-5'>h</h1>
          <h1 className='px-5'>o</h1>
          <h1 className='px-5'>n</h1>
          <h1 className='px-5'>e</h1>
          <h1 className='px-5'>2a</h1>
        </div>

        <div className="col-md-4 text-md-center col-10 ">
          <Phone />
        </div>

        <div className="col-md-4 p-3 mt-5">
          <h1>Phone (2a)</h1>
          <h3>Powerfully unique</h3>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className='mb-4 mt-3'>
              <h6>British GQ</h6>
              <p>Phone(2a) is already 2024's phone of the year</p>
            </SwiperSlide>
            <SwiperSlide className='mb-4 mt-3'>
              <h6>WIRED</h6>
              <p>It's a no-brainer smartphone that anyone can love, whether your budget is small or large</p>
            </SwiperSlide>
            <SwiperSlide className='mb-4 mt-3'>
              <h6>Digital Trends</h6>
              <p>Fun design, colorful photos performance, and masses of customization make</p>
            </SwiperSlide>
            <SwiperSlide className='mb-4 mt-3'>
              <h6>Expert Reviews</h6>
              <p>A gorgeous display and terrific stamina in a uniquely stylish package</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container my-5 pb-5">
        <h1 className='display-2'>All. In</h1>

        <div className="row mt-5">
          <div className="col-md-3 col-12">
            <div className='bg_dark text-white rounded-top-4 p-2 py-md-5 px-md-4'>
              <h1>8-core</h1>
              <h1>4 nm</h1>
              <h1>Gen 2</h1>
              <p className='pb-md-5'>Media Tek Dimensity 7200 Pro 5G</p>
            </div>
            <img className='rounded-bottom-4 img-fluid' src="./img-1.jpg" width='100%' alt="" />
          </div>

          <div className="col-md-6 col-12">
            <div className="row">

              <div className="col-6 col-md-6 mt-3 mt-lg-0  text-white">
                <div className='p-2 pb-4 pt-4 rounded-top-4 bg_dark'>
                  <h2 className='px-2'>32 MP</h2>
                  <p className='px-2'>Front camera</p>
                </div>
                <img className='bg_dark rounded-bottom-4 img-fluid' src="./img-2.png" width='100%' alt="" />
              </div>

              <div className="col-6 col-md-6 mt-3 mt-lg-0">
                <div className='bg_dark text-white  p-2 pt-4 rounded-4'>
                  <img className='mx-5 img-fluid' src="./img-4.jpg" width='45%' alt="" />
                  <h3 className='pt-3 px-2'>Glyph Interface</h3>
                  <p className='px-2'>15 innovative functions</p>
                </div>
              </div>

              <div className="col-6 col-md-6 mt-3">
                <div className='bg_dark text-white pt-4 pb-5 p-2 rounded-4'>
                  <h2>Nothing OS 2.5</h2>
                  <p className='pb-5 mb-5'>Powered by Android 14</p>
                </div>
              </div>

              <div className="col-6 col-md-6 mt-3">
                <img className='rounded-top-4 img-fluid' src="./img-3.jpg" width='100%' alt="" />
                <div className='bg-light rounded-4'>
                  <h3 className='px-2 pt-2'>120 HZ</h3>
                  <p className='px-2'>10-bit flexible AMOLED display</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-3 mt-lg-0">
            <div className='dual50 p-2 text-white rounded-4 pt-5'>
              <h1 className='px-2'>Dual50 MP</h1>
              <p className='px-2'>Main and ultra-wide cameras</p>
              <img className='img-fluid' src="./img-5.png" width='100%' alt="" />
            </div>
          </div>
        </div>



        <div className="row mt-3">

          <div className="col-6 col-md-3">
            <div className='bg-warning rounded-4 p-2'>
              <p style={{ height: '6rem' }}></p>
              <h1 className='display-3'>1,300 nits</h1>
              <p>peak brightness</p>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className='p-2 bg-danger text-white rounded-4'>
              <p style={{ height: '9rem' }}></p>
              <h3>Designed in London</h3>
            </div>
          </div>

          <div className="col-6 col-md-3 mt-3 mt-lg-0" >
            <div className='bg_dark text-white rounded-4 p-2' style={{ height: '15.8rem' }}>
              <h3 className='display-3'>20 GB RAM</h3>
              <p>12GB + 8GP RAM Booster</p>
            </div>

          </div>

          <div className="col-6 col-md-4 mt-3 mt-lg-0" style={{ height: '16rem' }}>
            <div className='p-2 bg-light rounded-4' id='hj'>
              <h2 className='pt-3 px-3 display-4'>5000 mAh Battery</h2>
              <p className='px-3'>Up to 29 hours video Playback</p>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid bg_dark text-white p-5 my-5">
        <div className="row my-5 py-5">
          <div className="col-12 col-md-7">
            <div className="p-md-5 p-3  m-md-5">
              <h1 className='display-1 mb-4'>Go. Pro.</h1>
              <h3>Co-engineered with MediaTek, the custom Dimensity 7200 Pro processor delivers the best performance with optimal power consumption.</h3>
            </div>
          </div>
          <div className="col-12 text-center col-md-4 mt-md-5">
            <img className='img-fluid' src="./bottom.jpg" width='500px' alt="" data-aos="fade-up" data-aos-duration="1500" />
          </div>
        </div>
      </div>


      <div className="container-fluid bg_dark text-white p-5 my-5">
        <div className="row my-5 py-5">
          <div className="col-12 col-md-8">
            <div className="p-md-5 p-3  m-md-5">
              <h1 className='display-1 mb-4'>Full. Tank.</h1>
              <h3>Keep going for 2 days straight* with our biggest battery to date.</h3>
            </div>
          </div>
          <div className="col-12 text-center col-md-4">
            <div className="mx-5"> <div className="border border-5 mx-4 rounded-top-2" style={{ 'height': '2.5rem', 'width': '5rem' }}></div></div>
            <div className="border border-5 rounded-5 text-white" style={{ 'height': '24rem', 'width': '14rem' }}>
              <h3 className='mt-5'>Battery</h3>
              <div className='bg-danger my-1' style={{ 'height': '3.5rem', 'width': '215px' }} data-aos="fade-up" data-aos-duration="2000"></div>
              <div className='bg-danger my-1' style={{ 'height': '3.5rem', 'width': '215px' }} data-aos="fade-up" data-aos-duration="2000"></div>
              <div className='bg-danger my-1' style={{ 'height': '3.5rem', 'width': '215px' }} data-aos="fade-up" data-aos-duration="2000"></div>
              <div className='bg-danger my-1' style={{ 'height': '3.5rem', 'width': '215px' }} data-aos="fade-up" data-aos-duration="2000"></div>
              <div className='bg-danger rounded-bottom-5' style={{ 'height': '2.8rem', 'width': '215px' }}></div>
            </div>

          </div>
        </div>
      </div>


      <div className="container" id='college_img'>
        <h1 className='display-1'>#WithNothing</h1>
        <p className='display-6 col-md-6'>Judge for yourself. Here’s what our users have captured on Phone (2a).</p>
        <div className="row mt-5">
          <div className="col-md-3 col-6"><img className='rounded img-fluid' src="./kg-1.jpg" width='260px' alt="" /></div>
          <div className="col-md-3 col-6"><img className='rounded img-fluid mb-3' src="./kg-2.jpg" width='260px' alt="" /></div>
          <div className="col-md-3 col-6"><img className='rounded img-fluid' src="./kg-3.jpg" width='260px' alt="" /></div>
          <div className="col-md-3 col-6"><img className='rounded img-fluid' src="./kg-4.jpg" width='260px' alt="" /></div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 col-6"><img className='rounded img-fluid' src="./kg-5.jpg" width='260px' alt="" /></div>
          <div className="col-md-3 col-6"><img className='rounded mb-3 img-fluid' src="./kg-6.jpg" width='260px' alt="" /></div>
          <div className="col-md-6 col-12"><img className='rounded ' src="kg-2.jpg" width='590px' height='175px' alt="" /></div>
        </div>
      </div>



      <div className="container my-5" id='college_img'>

        <div className='mb-5'>
          <h1 className='display-2'>Smart. Talk.</h1>
          <p>Ask, listen and learn from ChatGPT on-the-go. A first-of-its-kind integration,
            made for your Nothing ecosystem. Only on Nothing earbuds when
            connected to a Nothing phone. Compatible with Phone (1), Phone (2) and Phone (2a)</p>
        </div>

        <div className="row">

          <div className="col-md-6">
            <div className="text-center">
              <img className='img-fluid' src="sm.jpg" width='400px' alt="" />
            </div>

            <div className="px-5">
              <h5 className='mt-5'>Voice control</h5>
              <p>Use your voice to access ChatGPT on Ear and Ear (a), wherever you are. Setup via the Nothing X app. Coming soon to Ear (1), Ear (2) and Ear (stick)</p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="text-center">
              <img className='img-fluid' src="sm1.jpg" width='400px' alt="" />
            </div>

            <div className="px-5">
              <h5 className='mt-5'>Bespoke Nothing Widgets</h5>
              <p>Get the answers you need faster, and at your fingertips. Text, voice or image search right from your home screen</p>
            </div>

          </div>
        </div>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img className='img-fluid' src="./phone1.png" width='400px' alt=""
              data-aos="zoom-out-right"
              data-aos-duration="3000"
            />
          </div>

          <div className="col-md-5">
            <img className='img-fluid' src="./kn1.webp" width='400px' alt=""
              data-aos="zoom-out-left"
              data-aos-duration="3000" />
          </div>

          <div className="col-md-6 mt-5">
            <img className='img-fluid' src="./kn2.jpg" width='600px' alt=""
              data-aos="zoom-out-left"
              data-aos-duration="3000"
            />
          </div>

          <div className="col-md-6">
            <img className='img-fluid' src="./kn3.webp" width='400px' alt=""
              data-aos="zoom-out-right"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>


      <div className="container">

        <div className="my-4">
          <h1 className="display-2">And. More.</h1>
          <h4>Everything you need</h4>
        </div>

        <div className="row my-5">
          <div className="col-md-3 col-6">
            <MdOutlineSignalWifi0Bar size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Dual 5G</h3>
            <p>With blazing fast peak downlink speeds of 3300 Mbps</p>
          </div>

          <div className="col-md-3 col-6">
            <IoIosBluetooth size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Bluetooth 5.3</h3>
            <p>Power efficiency and reliability</p>
          </div>

          <div className="col-md-3 col-6">
            <IoIosWifi size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Wi-Fi 6</h3>
            <p>1.4x faster than Wi-Fi 5</p>
          </div>

          <div className="col-md-3 col-6">
            <RiRouterLine size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>NFC</h3>
            <p>Supports Google Wallet, and more</p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-3 col-6">
            <IoMdPhonePortrait size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Linear haptic motor</h3>
            <p>More tactile vibration responses</p>
          </div>

          <div className="col-md-3 col-6">
            <CiUnlock size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Fingerprint sensor</h3>
            <p>In-screen optical scanner</p>
          </div>

          <div className="col-md-3 col-6">
            <PiSpeakerSimpleHigh size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Stereo speakers</h3>
            <p>For an immersive viewing experience</p>
          </div>

          <div className="col-md-3 col-6">
            <IoLockClosedOutline size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Face Unlock</h3>
            <p>Rapid face scanning for convenient unlocking</p>
          </div>
        </div>


        <div className="row my-5">
          <div className="col-md-3 col-6">
            <CiDroplet size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>IP54 Certified</h3>
            <p>Tested for water and dust resistance</p>
          </div>

          <div className="col-md-3 col-6">
            <FaArrowRotateRight size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>360° Antenna</h3>
            <p>Ring design around the phone to ensure no dead zones</p>
          </div>

          <div className="col-md-3 col-6">
            <RiHotspotLine size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Advanced Hotspot</h3>
            <p>Up to 15.32% less power consumption</p>
          </div>

          <div className="col-md-3 col-6">
            <FiMinimize2 size='50' className='bg-dark rounded-5 p-1' color='white' />
            <h3>Hybrid Co-Existance 2.0</h3>
            <p>Up to 68% reduced latency when Bluetooth and Wi-Fi are dual-active</p>
          </div>
        </div>

      </div>



      <div className="bg-dark text-white px-4 py-1 mb-5">
        <h4>compare</h4>
      </div>
      <div className="row">

        <div className="col-md-7 text-center col-12">
          <img className='img-fluid' src="./phone2.png" width='220px' alt="" />
          <h1 className='my-3'>Phone (2a)</h1>
          <p className="mb-5">Starting at $27,999.00</p>
        </div>

        <div className="col-md-5 text-center col-12">
          <img className='img-fluid' src="./phone1.png" width='200px' alt="" />
          <h1 className='my-3'>Phone (1)</h1>
          <p className="mb-5">Starting at $31,999.00</p>
        </div>

      </div>


      <div className="accordion container my-5" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Camera
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Display
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Capacity
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseFour">
              Connectivity
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseFive">
              Operating System
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseSix">
              Battery
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseSeven">
              Dimensions
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseEight">
              In the box
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

      </div>




      <div className="container-fluid text-white bg_dark">
        <footer className="p-5 ">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className='my-3'>Products</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Phone (2a)</li>
                <li className="nav-item mb-2">Phone (2)</li>
                <li className="nav-item mb-2">Ear (a)</li>
                <li className="nav-item mb-2">Ear</li>
                <li className="nav-item mb-2">Accessories</li>
                <li className="nav-item mb-2">Apparel</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className='my-3'>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">About us</li>
                <li className="nav-item mb-2">Careers</li>
                <li className="nav-item mb-2">Community</li>
                <li className="nav-item mb-2">Newsroom</li>
                <li className="nav-item mb-2">Sustainability</li>
                <li className="nav-item mb-2">Business enquiry</li>
                <li className="nav-item mb-2">Press contact</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className='my-3'>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Suppport centre</li>
                <li className="nav-item mb-2">Contact us</li>
                <li className="nav-item mb-2">Contact us via WhatsApp</li>
                <li className="nav-item mb-2">Service centre</li>
                <li className="nav-item mb-2">E-waste management</li>
                <li className="nav-item mb-2">Find a store</li>
                <li className="nav-item mb-2">Security Vulnerability Report</li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>JOIN OUR MAILING LIST</h5>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Submit</button>
                </div>
              </form>
            </div>
          </div>


          <div className="row border-top">
            <div className="col-md-2 col-12 mt-4">Privacy policy</div>
            <div className="col-md-2 col-12 mt-4">Warranty</div>
            <div className="col-md-2 col-12 mt-4">Acceptable use policy</div>
            <div className="col-md-2 col-12 mt-4">User agreement</div>
          </div>
        </footer>
      </div>


    </>
  )
}

