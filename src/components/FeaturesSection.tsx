import Image from "next/image";

const features = [
  {
    num: "01",
    title: "60秒入力で\n複数社から一括見積",
    desc: "事業所の所在地・業種・ごみの種類と量を入力するだけ。事業系一般廃棄物・産業廃棄物どちらも対応。全国300社超の収集運搬・処分業者ネットワークから、条件に合う業者が見積を提示します。エリアごとの縄張りに縛られず最適な業者を選べます。",
    img: "/images/illustrations/buildings.svg",
  },
  {
    num: "02",
    title: "平均30%の\n廃棄物コスト削減",
    desc: "古くからの取引業者による値上げ要求も、相見積もりにかけることで適正価格に。店舗・施設運営者の年間コスト削減実績多数。契約切替の書類対応も無料でサポートします。",
    img: "/images/illustrations/factory-trucks.svg",
  },
  {
    num: "03",
    title: "新規開業・\n法令対応まで安心",
    desc: "新店舗・新施設の開業準備中でも、地域の業者選定からご相談OK。加盟業者は一般廃棄物・産廃の正規許可業者のみで、電子マニフェスト・リサイクル・行政書類作成まで、排出者責任のコンプライアンスをワンストップで支援します。",
    img: "/images/illustrations/worker.svg",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#e4f5f9] py-12">
      <div className="max-w-[640px] mx-auto px-4">
        <h2 className="text-center mb-10">
          <span className="inline-block bg-[#4abfd7] text-white font-black text-lg px-6 py-2 rounded-full">
            選ばれる3つの理由
          </span>
        </h2>

        <div className="space-y-8">
          {features.map((f) => (
            <div
              key={f.num}
              className="bg-white rounded-3xl p-6 shadow-lg relative"
            >
              <div className="absolute -top-4 left-6 bg-[#ffde35] text-black font-black text-sm px-4 py-1 rounded-full">
                POINT {f.num}
              </div>
              <div className="flex gap-4 items-start pt-2">
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src={f.img}
                    alt=""
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#4abfd7] text-lg mb-2 whitespace-pre-line leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-[#333] text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="block mt-10 bg-[#ff6b35] hover:bg-[#e85a24] transition-colors text-white text-center font-black text-lg rounded-full py-4 shadow-lg"
        >
          無料で一括見積りする
        </a>
      </div>
    </section>
  );
}
