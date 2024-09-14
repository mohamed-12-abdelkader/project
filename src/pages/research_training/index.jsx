import React from "react";

const Index = () => {
  return (
    <div dir="rtl" className="mt-[100px]">
      <div className="text-center ">
        <p className="text-[#11898C]">التدريب البحثي</p>
        <div className=" w-[95%] m-auto text-center md:w-[40%]">
          <h1
            className="text-[30px] font-extrabold text-[#353939] my-2 md:text-[60px]"
            style={{ lineHeight: "90px" }}
          >
            عزز مهاراتك البحثية معنا
          </h1>
        </div>
        <div className="w-[90%] m-auto text-center md:w-[60%]">
          <p className="text-[#5A6161]">
            &quot;نسعى في جمعية داعم لتقديم أفضل برامج التدريب والتطوير للباحثين
            في مجال الأورام. انضم إلينا واستفد من الدورات وورش العمل المصممة
            خصيصًا لتعزيز مهاراتك البحثية والعلمية. كل تدريب يعتبر خطوة جديدة
            نحو التقدم والابتكار في مجال الأبحاث.&quot;
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
      <div className="my-[8] ">
        <div className="w-[90%] m-auto text-center md:w-[60%]">
          <h1 className="text-xl font-bold my-3">
            اختر الطريق الذي يناسبك لتعزيز مهاراتك البحثية
          </h1>
          <p className="text-[#5A6161]">
            هل تحتاج إلى إرشاد متخصص لتحقيق أبحاثك؟ أم تفضل حضور دورات تدريبية
            متخصصة؟ نحن هنا لنساعدك في كلا الخيارين. اختر ما يناسبك وانطلق نحو
            تحقيق أهدافك البحثية.
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
      <div className="md:flex justify-center">
        <div className="w-[95%] m-auto h-[550px] search flex items-end p-5 md:w-[50%]">
          <div className="text-center">
            <h1 className="font-bold text-xl my-2 text-white">
              الإرشاد البحثي
            </h1>
            <div className=" m-auto md:w-[500px]">
              <p className="text-white">
                برنامج الإرشاد البحثي يقدم لك الدعم المستمر من قبل علماء
                متخصصين. ستحصل على توجيه مخصص يناسب احتياجاتك ويساعدك على تطوير
                مهاراتك المهنية.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[95%] m-auto h-[550px] training p-5 flex items-end md:w-[50%]">
          <div className="text-center">
            <h1 className="font-bold text-xl my-2 text-white">
              التدريب المتخصص
            </h1>
            <div className=" m-auto md:w-[500px]">
              <p className="text-white">
                نقدم لك فرصة لرفع مستوى معرفتك ومهاراتك العلمية. ستجد دورات
                قصيرة وورش عمل علمية لتلبية احتياجاتك البحثية، مثل طرق البحث
                العلمي، تطوير الذات و غيرها.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Index;
