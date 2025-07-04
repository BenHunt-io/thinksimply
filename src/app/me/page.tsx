import { Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function AboutMe() {
  return (
    <>
      <Timeline periods={[
        {
          dateRange: "Sep 2023 - Current",
          title: <>
            Panda Mobile, Polar Mobile, and Collegiate Mobile
          </>
        },
        {
          dateRange: "June 2022 - Sep 2023",
          title: <>
            Episode Six
          </>
        },
        {
          dateRange: "Jan 2021 - June 2022",
          title: <>
            Journey into the unknown
          </>
        },
        {
          dateRange: "June 2018 - Dec 2022",
          title: <>
            Open Lending
          </>
        },
        {
          dateRange: "May 2017 - June 2017",
          title: <>
            Runescape bots
          </>
        },
        {
          dateRange: "June 2012 - June 2014",
          title: <>
            Owner eVersity
          </>
        }
      ]} />

    </>
  )
}


interface Timeline {
  periods: {
    dateRange: string // Mon Year - Mon Year or Current
    title: ReactNode
  }[]
}


const Timeline = (props: Timeline) => {

  return (
    <>
      {props.periods.map((period) => (
        <div key={period.dateRange}>
          <Typography level="title-lg">{period.dateRange}</Typography>
          <Typography level="body-md">{period.title}</Typography>
        </div>
      ))}
    </>
  )
}
