import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "事業所情報を入力",
    badge: "完全無料",
    desc: "業種・所在地・ごみの種類と量を60秒で入力。\n既存店舗も新規オープン予定もOK。",
    img: "/images/ref/top/step_img1.svg",
  },
  {
    num: "2",
    title: "複数業者から\n一括見積が届く",
    desc: "一般廃棄物・産廃の許可業者が見積を提示。\n通常1〜3営業日で結果をお知らせ。",
    img: "/images/ref/top/step_img2.svg",
  },
  {
    num: "3",
    title: "比較・選定\nそのまま契約",
    desc: "金額・サービス内容を比較して契約先を決定。\n契約切替や開業時の書類対応も無料サポート。",
    img: "/images/ref/top/step_img3.svg",
  },
];

export function FlowSection() {
  return (
    <section className="bg-[#ffde35] py-12">
      <div className="w-full px-4">
        <h2 className="text-center mb-8">
          <span className="inline-block bg-[#4abfd7] text-white font-black text-lg px-6 py-2 rounded-full">
            ご利用の流れ
          </span>
        </h2>

        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl p-5 shadow-md relative"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#4abfd7] text-white flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-bold leading-none">STEP</span>
                  <span className="text-2xl font-black leading-none">{s.num}</span>
                </div>

                {s.img && (
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={s.img}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="flex-1">
                  {s.badge && (
                    <span className="inline-block bg-[#f84b6c] text-white text-[10px] font-black px-2 py-0.5 rounded-full mb-1">
                      {s.badge}
                    </span>
                  )}
                  <h3 className="font-black text-[#333] text-base whitespace-pre-line leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#666] whitespace-pre-line mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
