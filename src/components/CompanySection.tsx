const companyInfo = [
  { label: "会社名", value: "株式会社GOLDER" },
  { label: "代表取締役", value: "辰己 逸奎" },
  {
    label: "所在地",
    value: "〒552-0001\n大阪府大阪市港区波除5丁目7-19 la benten102",
  },
  { label: "電話番号", value: "06-7632-5284" },
  { label: "FAX", value: "050-3730-9235" },
  { label: "メールアドレス", value: "realestate@golder.co.jp" },
  { label: "免許", value: "宅地建物取引業 大阪府知事(1)65301号" },
];

const businesses = [
  "企業・店舗向け廃棄物の一元管理サービスの提供",
  "廃棄物の分別指導、収集・処分業者の選定・交渉代行",
  "マニフェスト・行政書類・契約書などの作成・管理代行",
  "廃棄物処理に関するコスト削減・運用効率化コンサルティング",
  "不動産事業サポート（テナント仲介・物件売買など）",
];

export function CompanySection() {
  return (
    <section id="company" className="bg-white py-12">
      <div className="max-w-[640px] mx-auto px-4">
        <h2 className="text-center mb-2">
          <span className="inline-block bg-[#4abfd7] text-white font-black text-lg px-6 py-2 rounded-full">
            運営会社
          </span>
        </h2>
        <p className="text-center text-xs text-[#666] mb-8">COMPANY INFO</p>

        {/* Company table */}
        <div className="bg-[#e4f5f9] rounded-2xl p-5 mb-6 border-2 border-[#4abfd7]">
          <dl className="divide-y divide-white/80">
            {companyInfo.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[90px_1fr] gap-3 py-3 first:pt-0 last:pb-0"
              >
                <dt className="text-xs font-black text-[#4abfd7] pt-0.5">
                  {row.label}
                </dt>
                <dd className="text-xs text-[#333] font-bold whitespace-pre-line leading-relaxed">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Business content */}
        <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-[#e4f5f9]">
          <h3 className="text-sm font-black text-[#4abfd7] mb-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-4 bg-[#ffde35] rounded-sm" />
            事業内容
          </h3>
          <ul className="space-y-2">
            {businesses.map((b, i) => (
              <li
                key={i}
                className="flex gap-2 text-xs text-[#333] leading-relaxed"
              >
                <span className="text-[#0aac1d] font-black flex-shrink-0">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
