import React from "react";

const Index = () => {
  return (
    <div dir="rtl" className="mt-[100px]">
      <div className="text-center">
        <p className="text-[#11898C]">الدعم اللوجستي للباحثين</p>
        <div className="w-[90%] md:w-[60%] lg:w-[40%] m-auto text-center">
          <h1
            className="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold text-[#353939] my-2"
            style={{
              lineHeight: "70px",
              md: { lineHeight: "80px" },
              lg: { lineHeight: "90px" },
            }}
          >
            ندعمك في كل خطوة
          </h1>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-center">
          <p className="text-[#5A6161]">
            مرحبًا بك في قسم الدعم اللوجستي للباحثين بجمعية داعم لأبحاث الأورام!
            نحن هنا لنساندك في كل خطوة من رحلتك البحثية. اختر نوع الدعم الذي
            تحتاجه وثق بأننا سنكون معك في كل خطوة لتحقيق أهدافك.
          </p>
        </div>
      </div>

      <div className="h-[50px] md:h-[100px]"></div>

      <div className="my-[8]">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-center">
          <h1 className="text-lg md:text-xl font-bold my-3">
            اختر نوع الدعم الذي تحتاجه
          </h1>
          <p className="text-[#5A6161]">
            اختر نوع الدعم الذي تحتاجه من الخيارات أدناه وانطلق نحو تحقيق أهدافك
            البحثية.
          </p>
        </div>
      </div>

      <div className="h-[50px] md:h-[100px]"></div>

      {/* Support and Management Cards */}
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-[50%] h-[350px] md:h-[550px] suport flex items-end p-5 mb-5 md:mb-0">
          <div className="text-center">
            <h1 className="font-bold text-lg md:text-xl my-2 text-white">
              دعم الأفراد والمؤسسات
            </h1>
            <div className="w-[90%] md:w-[500px] m-auto">
              <p className="text-white">
                برنامج دعم الأبحاث دعمًا شاملًا للباحثين والمؤسسات. نهدف إلى
                توفير جميع الموارد اللازمة لاكتشافات رائدة في مجال السرطان.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-[350px] md:h-[550px] mange p-5 flex items-end">
          <div className="text-center">
            <h1 className="font-bold text-lg md:text-xl my-2 text-white">
              إدارة الدراسات السريرية
            </h1>
            <div className="w-[90%] md:w-[500px] m-auto">
              <p className="text-white">
                وحدة إدارة الدراسات السريرية تهدف إلى تسريع إجراء الدراسات
                السريرية وترجمة هذه الدراسات لإنتاج بحثي من الممكن أن يعيد صياغة
                كثير من السياسات العلاجية المتبعة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[50px] md:h-[100px]"></div>
    </div>
  );
};

export default Index;
