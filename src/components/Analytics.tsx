import Script from "next/script";
import { GOOGLE_ADS, GTM_ID } from "@/data/site";

// 구글 태그·GTM 자리. src/data/site.ts에 ID를 넣으면 자동으로 켜진다.
export default function Analytics() {
  return (
    <>
      {GOOGLE_ADS.id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS.id}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GOOGLE_ADS.id}');${
              GOOGLE_ADS.labels.pageview
                ? `gtag('event','conversion',{send_to:'${GOOGLE_ADS.id}/${GOOGLE_ADS.labels.pageview}',value:1.0,currency:'KRW'});`
                : ""
            }`}
          </Script>
        </>
      )}
      {GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
    </>
  );
}
