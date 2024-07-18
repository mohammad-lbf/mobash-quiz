import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Typer from '../Typed';

const FirstBanner = () => {

  return (
    <div className="pt-4 mt-0 mt-lg-4 mb-0 pb-0 pb-lg-4">
      <div className="container pt-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="pt-20">
              <motion.div 
                className="box-banner-4 d-flex flex-column align-items-center align-items-lg-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="banner-info d-flex flex-column align-items-center align-items-lg-start">
                  <motion.span
                    style={{ fontFamily: "Vazirmatn" }}
                    className="text-sm-bold color-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    Mobash Academy | آکادمی زبان انگلیسی مبش
                  </motion.span>
                  <br />
                  <motion.h3
                    style={{ fontFamily: "KalamehWeb-Bold", fontSize: "30px", color: "#03004e", lineHeight: "55px" }}
                    className="d-inline-block mt-10 mb-15 text-center text-lg-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    با آموزش‌های آکادمی مبش، با اعتماد به نفس و روان انگلیسی صحبت کنید!
                  </motion.h3>
                  <br />
                  <div className="box-socials">
                    <motion.a
                      rel='noreferrer'
                      className="bg-gray-800 hover-up text-center pt-2"
                      href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg=="
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      <i className="bi bi-instagram text-white"></i>
                    </motion.a>
                    <motion.a
                      rel='noreferrer'
                      className="bg-gray-800 hover-up text-center pt-2 mx-2"
                      href="https://api.whatsapp.com/send?phone=989383439244"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    >
                      <i className="bi bi-whatsapp text-white"></i>
                    </motion.a>
                    <motion.a
                      rel='noreferrer'
                      className="bg-gray-800 hover-up text-center pt-2"
                      href="https://www.youtube.com/@English.with.Mobash"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    >
                      <i className="bi bi-youtube text-white"></i>
                    </motion.a>
                  </div>
                </div>

                {/* <motion.button className='btn-main-2 mt-3' style={{fontFamily: "KalamehWeb-Bold"}} onClick={scrollToIntroSection}>
                      شروع یادگیری<i class="bi bi-chevron-double-down me-2"></i>
                  </motion.button> */}

              </motion.div>
            </div>
          </div>
          <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
            <motion.div
              className="box-banner-4 d-flex justify-content-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="banner-image">
                <Image width={"470"} height={"420"} alt="first-banner-image" className='img-fluid' src={`/images/home-first-banner.png`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
