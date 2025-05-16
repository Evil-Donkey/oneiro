"use client";

import LazyLoadInitializer from "@/lib/lazyLoader";
import Header from "@/components/Header";
import PageFlexibleContent from "@/components/FlexibleContent";

export default function FlexiblePage({ flexibleContent, className, lightTheme, hideNavigation, textWhite }) {
  return (
    <div className={className}>
      <LazyLoadInitializer />
      <Header lightTheme={lightTheme} hideNavigation={hideNavigation} />
      <PageFlexibleContent data={flexibleContent} textWhite={textWhite} />
    </div>
  );
}
