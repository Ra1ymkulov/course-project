"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const hideFooter =
    pathname?.startsWith("/auth") || pathname?.startsWith("/user");
  return !hideFooter ? (
    <footer className="pt-10">
      <div className="flex flex-col ">
        <div className="flex flex-col text-center gap-2.5 items-center relative pb-20">
          <h1 className="text-4xl font-bold">Присоединяйся к нам</h1>
          <p className="text-base max-w-150 w-full">
            Мы предоставляем множество функций, которые вы можете использовать.
            Постепенное накопление информация
          </p>
          <div className="flex items-center justify-center w-full absolute bottom-[-16%]">
            <input
              type="text"
              className="w-5xl h-15 border border-[#949494] bg-white pl-5 outline-none border-r-0 rounded-tl-sm rounded-bl-sm"
              placeholder="Твой Email"
            />
            <button className="bg-[#23a6f0] py-4.5 px-5 text-white rounded-tr-sm rounded-br-sm">
              Подписка
            </button>
          </div>
        </div>
        <div className="py-20 bg-[#F5F9FC]">
          <div className="container">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h4>Logo</h4>
                <p className="max-w-90 w-full text-start text-base">
                  (Название)— это частная виртуальная сеть с уникальными
                  функциями и высоким уровнем безопасности.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#23a6f0]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#23a6f0]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#23a6f0]"></div>
                </div>
                <p className="text-base text-[#AFB5C0]">©2020LaslesVPN</p>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <ul className="flex flex-col gap-3">
                  <li className="footer-li">Продукт</li>
                  <li className="footer-li">Download </li>
                  <li className="footer-li">Pricing</li>
                  <li className="footer-li">Locations</li>
                  <li className="footer-li">Server</li>
                  <li className="footer-li">Countries</li>
                  <li className="footer-li">Blog</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="footer-li">Engage</li>
                  <li className="footer-li">LaslesVPN ? </li>
                  <li className="footer-li">FAQ</li>
                  <li className="footer-li">Tutorials</li>
                  <li className="footer-li">About Us</li>
                  <li className="footer-li">Privacy Policy</li>
                  <li className="footer-li">Terms of Service</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="footer-li">Earn Money</li>
                  <li className="footer-li">Affiliate</li>
                  <li className="footer-li">Become Partner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    ""
  );
};

export default Footer;
