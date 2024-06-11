import { useEffect } from "react";
import Typed from "typed.js";

const Typer = () => {
  useEffect(() => {
    const options = {
      strings: ["English With Mobash", "امیرحسین مبشری", "مدرس زبان انگلیسی"], // متن‌های به زبان فارسی
      typeSpeed: 110,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed("#typed-element", options);

    return () => {
      typed.destroy(); // حذف تایپ شونده هنگام خروج از صفحه
    };
  }, []);

  return <span style={{fontFamily:"Vazirmatn"}} className="fw-bold" id="typed-element"></span>;
};

export default Typer;
