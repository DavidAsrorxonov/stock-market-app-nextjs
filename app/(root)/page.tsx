import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants/marketOverviewWidgetConfig";
import { SCRIPT_URLS } from "@/lib/constants/scriptsUrls";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={SCRIPT_URLS.MARKET_OVERVIEW}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
          />
        </div>

        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={SCRIPT_URLS.STOCK_HEATMAP}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
