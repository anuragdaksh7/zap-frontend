"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const typeColors: Record<string, string> = {
  unread: "hsl(var(--warning))",
  bookmarked: "hsl(var(--accent))",
  collections: "hsl(var(--cta))",
}

const typeLabels: Record<string, string> = {
  unread: "Unread",
  bookmarked: "Bookmarked",
  collections: "Collections",
}

type BreakdownItem = {
  type: "unread" | "bookmarked" | "collections"
  count: number
}

type ChartPieDonutTextProps = {
  totalEmails: number
  breakdown: BreakdownItem[]
}

const chartConfig = {
  unread: {
    label: "Unread",
    color: "hsl(var(--warning))",
  },
  bookmarked: {
    label: "Bookmarked",
    color: "hsl(var(--accent))",
  },
  collections: {
    label: "Collections",
    color: "hsl(var(--cta))",
  },
};

export default function ChartPieDonutText({ totalEmails, breakdown }: ChartPieDonutTextProps) {
  // Add fill and label to each breakdown item
  const chartData = breakdown.map(item => ({
    ...item,
    fill: typeColors[item.type],
    label: typeLabels[item.type],
  }))

  return (
    <Card className="flex flex-col max-w-[17rem] mx-auto pb-4">
      <CardHeader className="items-center pb-0">
        <CardTitle>Email Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[220px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" nameKey="label" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-2xl font-bold">
                          {totalEmails.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Total Emails
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex justify-center gap-4 mt-3 flex-wrap">
          {breakdown.map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: typeColors[item.type] }}
              />
              <span className="text-sm text-muted-foreground">{typeLabels[item.type]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}