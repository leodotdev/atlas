import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { content } from "@/utils/content";
import { ScrollView } from "@/components/ui/scroll-view";
import { Grid, GridItem } from "@/components/ui/grid";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <Grid
          className="gap-4 bg-green-200 p-4"
          _extra={{
            className:
              "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
          }}
        >
          {content.map((link, index) => (
            <GridItem
              key={index}
              _extra={{ className: "col-span-1" }}
              className="bg-blue-200"
            >
              <Link
                href={link.href}
                className="bg-red-200 py-8 text-center block"
              >
                {link.title}
              </Link>
            </GridItem>
          ))}
        </Grid>
      </ScrollView>
    </SafeAreaView>
  );
}
