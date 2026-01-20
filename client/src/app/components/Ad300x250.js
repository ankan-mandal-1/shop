"use client";

import Script from "next/script";

export default function Ad300x250() {
  return (
    <div style={{ textAlign: "center" }}>
      <Script
        id="at-options"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions = {
              key: "d71be34ee8d35c8101e1566ac99eeac2",
              format: "iframe",
              height: 250,
              width: 300,
              params: {}
            };
          `,
        }}
      />

      <Script
        src="https://www.highperformanceformat.com/d71be34ee8d35c8101e1566ac99eeac2/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
