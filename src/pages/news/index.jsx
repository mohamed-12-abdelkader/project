import React from "react";
import img from "../../images/598e8503aa101eaeb4fb1270d9f47263.jpeg";
import Image from "next/image";

const index = () => {
    return (
        <div dir="rtl" className="mt-[100px]">
            <div className="text-center">
                <p className="text-[#11898C] my-2"> الأخبار </p>
                <div className="w-[60%] m-auto text-center">
                    <h1
                        className="font-bold text-[50px] text-[#353939]"
                        style={{ lineHeight: "80px" }}
                    >
                        اكتشف أحدث الأخبار والتطورات وكن جزءًا من التغيير!
                    </h1>
                </div>
                <div className="w-[60%] m-auto text-center">
                    <p className="text-[#353939] mt-2">
                        ابقَ على اطلاع دائم بأحدث الأخبار والمستجدات من جمعية داعم لأبحاث
                        الأورام. كل ما هو جديد يسهم في تعزيز جهودنا لمكافحة السرطان
                        وتحسين حياة المرضى.
                    </p>
                </div>
            </div>

            <div className="h-[100px]"></div>

            <div className="flex w-[95%] m-auto">
                <div className="w-[50%]">
                    <Image
                        src={img}
                        className="h-[485px] w-[635px]"
                        style={{ borderRadius: "20px" }}
                        alt="Event image"
                    />
                    <p className="my-2">1 محرم 1446</p>
                    <h1 className="text-xl font-bold">
                        جمعية داعم تستضيف ورشة عمل متقدمة حول أحدث تقنيات الأبحاث في مجال
                        السرطان. الورشة ستتناول تقنيات الـ CAR-T-Cell الجديدة في علاج
                        السرطان.
                    </h1>
                    <p>
                        شهد المؤتمر السنوي لأبحاث الأورام لعام 2024 نجاحًا باهرًا، حيث اجتمع
                        أبرز الباحثين والخبراء من جميع أنحاء العالم لمناقشة أحدث التطورات
                        والابتكارات في مجال علاج السرطان. تم تقديم العديد من الأبحاث الرائدة
                        التي تبشر بأمل جديد للمرضى، حيث تناولت الأوراق البحثية مواضيع متنوعة
                        بدءًا من العلاج المناعي والوراثة الجزيئية، وصولاً إلى استخدام تقنيات
                        الذكاء الاصطناعي في التشخيص والعلاج.
                    </p>
                </div>

                <div className="w-[50%] mx-3">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="h-[150px] w-[100%] flex m-2">
                            <Image
                                src={img}
                                className="h-[150px] w-[200px]"
                                style={{ borderRadius: "10px" }}
                                alt={`Event image ${index + 1}`}
                            />
                            <div className="my-3 mx-2">
                                <p className="m-1">1 محرم 1446</p>
                                <p className="m-1">
                                    جمعية داعم تستضيف ورشة عمل متقدمة حول أحدث تقنيات الأبحاث في
                                    مجال السرطان. الورشة ستتناول تقنيات الـ CAR-T-Cell الجديدة في
                                    علاج السرطان.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-[100px]"></div>
        </div>
    );
};

export default index;