"use client";

import LazyLoadInitializer from "@/lib/lazyLoader";
import Header from "@/components/Header";
import PageFlexibleContent from "@/components/FlexibleContent";

export default function FlexiblePage({ flexibleContent, className, themeColor }) {
  return (
    <div className={className}>
      <LazyLoadInitializer />
      <Header themeColor={themeColor} />
      <PageFlexibleContent data={flexibleContent} />
    </div>
  );
}
