import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants/marketOverviewDataConfig";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants/marketOverviewWidgetConfig";
import { SCRIPT_URLS } from "@/lib/constants/scriptsUrls";
import { TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants/topStoriesWidgetConfig";

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

      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={SCRIPT_URLS.TIMELINE}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={SCRIPT_URLS.MARKET_QUOTES}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
