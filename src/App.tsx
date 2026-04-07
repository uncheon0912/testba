/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Phone } from 'lucide-react';

const IMAGES = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FuwzI0%2FdJMcadapYRo%2FAAAAAAAAAAAAAAAAAAAAAFbSmGVRg2y2amNigJKljPwdRGjpOIOsJqgr-SKz_z8e%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3Dn%252BzHWhVt7HCNvMRss7%252BJpeB65Fo%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FG0EOj%2FdJMcacbzr3x%2FAAAAAAAAAAAAAAAAAAAAAGNhuHkccSjq-k_7JHpq802H3_Sadh-FxKspMno96MYZ%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DqppmQHtxvgPbRXALOJj8L2FJy6c%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FHSBFb%2FdJMcaibOhmd%2FAAAAAAAAAAAAAAAAAAAAADPiwxJBUWQDbh0FTO3GDtspl66JAp_Smn4Op18l3EuD%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DqVNPdumfEVk%252B4EWVJSVvYZQPJM8%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FuOygo%2FdJMcaibOhmf%2FAAAAAAAAAAAAAAAAAAAAALaK7afiZ00s0g7uejLnRl2Tvmkuw00hNh07kHkoqNMs%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DSCjFIGk%252FdrpctfC%252BTMM%252FcK%252FGYFU%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F7ldeM%2FdJMcaibOhmg%2FAAAAAAAAAAAAAAAAAAAAALKdbOTHRrxOCmrYFplbWNczfdbM8QjHW8p0Vim7X8eT%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DbleRbOQaJ%252Fj7TuJSE2bcMLdDDiA%253D"
];

const NAVER_BOOKING_URL = "https://m.booking.naver.com/booking/13/bizes/1599902?theme=place&service-target=map-pc&lang=ko&area=bmp&map-search=1";

function LocationAndReservation() {
  return (
    <div id="location-section" className="w-full flex flex-col">
      <div className="w-full bg-[#f4f1ee] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Moved Reservation Button */}
          <div className="flex justify-center">
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#b39ddb] text-white border-4 border-[#b39ddb] font-bold text-2xl md:text-4xl py-6 px-8 md:px-16 rounded-full shadow-[0_0_30px_rgba(179,157,219,0.6)] hover:bg-white hover:text-[#b39ddb] transition-all duration-300 animate-pulse"
            >
              <span className="text-center">
                1:1 맞춤 <br className="block md:hidden" />
                리프팅 예약하기
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Banner with Info Card and Text */}
      <div className="w-full bg-[#c27c70] py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Info Card (Left) - Replaced with Image */}
          <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden bg-white">
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FPxhSV%2FdJMcahjGLs7%2FAAAAAAAAAAAAAAAAAAAAAHjGZHYb7VI8mUfv14Ri8r7SROV-f1D9EIC7Bh2jPOVF%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DHy8PhfeLTcrFhdWyLVWZZX8MXHA%253D"
              alt="진료 안내"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text (Right) */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-relaxed lg:leading-snug">
              거울 앞에서의 똑같은<br />
              고민은 이제 그만!<br />
              지금 바로 비에이에서<br />
              당신만의<br />
              리즈 시절을 다시 찾으세요
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Top Fixed Consultation Button (Kakao) */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="https://pf.kakao.com/_MBxdzX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FEE500] text-[#391B1B] border-2 border-[#FEE500] font-bold py-3 px-6 rounded-full shadow-[0_0_15px_rgba(254,229,0,0.4)] hover:bg-[#FEE500]/90 transition-all duration-300 animate-pulse"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.864 1.802 5.373 4.5 6.777-.32 1.116-1.156 4.02-1.188 4.14-.04.15.053.23.166.18.144-.064 3.39-2.27 4.71-3.23.58.087 1.18.133 1.81.133 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
          </svg>
          상담하기
        </a>
      </div>

      {/* Bottom Center Fixed Reservation Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href={NAVER_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#b39ddb] text-white border-2 border-[#b39ddb] font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(179,157,219,0.5)] hover:bg-white hover:text-[#b39ddb] transition-all duration-300 animate-pulse whitespace-nowrap"
        >
          <Calendar className="w-5 h-5" />
          예약하기
        </a>
      </div>

      {/* Images Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-white gap-4 md:gap-5 pb-24">
        {IMAGES.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={src}
              alt={`Landing page section ${index + 1}`}
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
            {index === 0 && (
              <div
                className="absolute z-10 flex"
                style={{
                  top: '76.5%',
                  left: '26.5%',
                  width: '47%',
                  height: '5%'
                }}
              >
                <button
                  onClick={() => window.open(NAVER_BOOKING_URL, '_blank')}
                  className="flex-1 cursor-pointer hover:bg-black/10 active:bg-black/20 transition-colors"
                  title="예약하기"
                  aria-label="예약하기"
                />
                <button
                  onClick={() => {
                    document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 cursor-pointer hover:bg-black/10 active:bg-black/20 transition-colors"
                  title="자세히 보기"
                  aria-label="자세히 보기"
                />
              </div>
            )}
            {index === IMAGES.length - 1 && (
              <div
                className="absolute z-10"
                style={{
                  top: '79.5%',
                  left: '57.5%',
                  width: '35%',
                  height: '6.5%'
                }}
              >
                <button
                  onClick={() => window.open(NAVER_BOOKING_URL, '_blank')}
                  className="w-full h-full cursor-pointer hover:bg-black/10 active:bg-black/20 transition-colors rounded-md"
                  title="예약하기"
                  aria-label="예약하기"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Location and Reservation Section */}
      <LocationAndReservation />

      {/* Footer Section */}
      <div className="w-full bg-[#f5f5f5] py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 font-medium mb-6 text-sm md:text-base">
            이벤트 기간 : 2026년 04월 05일 ~ 2026년 04월 30일까지 &nbsp;&nbsp;|&nbsp;&nbsp; 대상 : 페이스북 및 제휴네트워크
          </p>
          <div className="text-gray-500 text-xs md:text-sm space-y-1">
            <p>* 효과는 개인의 차이에 따라 달라 질수 있습니다</p>
            <p>*모델은 AI모델을 사용하였습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}
