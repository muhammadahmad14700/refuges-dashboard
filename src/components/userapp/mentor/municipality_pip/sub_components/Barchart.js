import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import taal from "../../../../../assets/images/taal.svg";
import woon from "../../../../../assets/images/woon.svg";
import wel from "../../../../../assets/images/wel.svg";
import soc from "../../../../../assets/images/soc.svg";
import werk from "../../../../../assets/images/werk.svg";
import bijs from "../../../../../assets/images/bijs.svg";
import bij from "../../../../../assets/images/bij.svg";
import maat from "../../../../../assets/images/maat.svg";
import zelf from "../../../../../assets/images/zelf.svg";
import { useTranslation } from 'react-i18next';
// const domain = [0, 1];
const ticks = [0, 50, 100];
const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 1).toFixed(fixed)}%`;
};
const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 1.3}
        y={y - radius}
        fill="#e84e0e"
        textAnchor="middle"
        fontFamily="opensans-bold"
        fontSize={11}
        // fontWeight={600}
        dominantBaseline="middle"
      >
        {parseInt(value)}%
      </text>
    </g>
  );
};

export default function Barchart(props) {
  const [t] = useTranslation();
  const [graphData, setGraphData] = React.useState([]);
  React.useEffect(() => {
    if (props.data) {
      let newArr = [];
      newArr.push({
        name: t("Language"),
        value: parseInt(props.data.averageLanguage)
      });
      newArr.push({
        name: t("Place Of Residence"),
        value: parseInt(props.data.averagePlaceOfResidence)
      });
      newArr.push({
        name: t("Well Being"),
        value: parseInt(props.data.averageWellbeing)
      });
      newArr.push({
        name: t("Social Contact"),
        value: parseInt(props.data.averageSocialContact)
      });
      newArr.push({
        name: t("Work"),
        value: parseInt(props.data.averageWork)
      });
      newArr.push({
        name: t("Training"),
        value: parseInt(props.data.averageTraining)
      });
      newArr.push({
        name: t("Contribution"),
        value: parseInt(props.data.averageContribution)
      });
      newArr.push({
        name: t("municipality_page_society"),
        value: parseInt(props.data.averageSociety)
      });
      newArr.push({
        name: t("Self-Sustainability-municipality-page"),
        value: parseInt(props.data.averageSelfSustainability)
      });
      setGraphData(newArr);


    }
  }, [props.data])
  return (
    <div id="container-mun-chart">
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "72px",
          position: "absolute",
        }}
      >
        <img
          src={taal}
          alt="taal"
          width="50"
          className="graph-xaxis-icon"
        // height="50"
        />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "160px",
          position: "absolute",
        }}
      >
        <img src={woon} alt="woon" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "248px",
          position: "absolute",
        }}
      >
        <img src={wel} alt="wel" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "336px",
          position: "absolute",
        }}
      >
        <img src={soc} alt="soc" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "422px",
          position: "absolute",
        }}
      >
        <img src={werk} alt="werk" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "510px",
          position: "absolute",
        }}
      >
        <img src={bijs} alt="bijs" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "598px",
          position: "absolute",
        }}
      >
        <img src={bij} alt="bij" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "686px",
          position: "absolute",
        }}
      >
        <img src={maat} alt="maat" width="50" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "283px",
          marginLeft: "773px",
          position: "absolute",
        }}
      >
        <img src={zelf} alt="zelf" width="50" className="graph-xaxis-icon" />
      </div>

      <ResponsiveContainer
      //  width="563px" height={350}
      >
        <BarChart
          // width="100%"
          // height={350}
          data={graphData}
          barSize={17}
          barGap={5}
          maxBarSize={17}
          margin={{
            //   top: 50,
            //   right: 30,
            left: -20,
            bottom: 10,
          }}
        >
          <Bar dataKey="value" fill="#e84e0e" isAnimationActive={true}>
            <LabelList
              fill="#e84e0e"
              offset={10}
              dataKey="value"
              position="top"
              fontFamily={"opensans-bold"}
              fontSize={12}
              fontWeight={600}
              content={renderCustomizedLabel}
            />
          </Bar>
          <XAxis
            dataKey="name"
            padding={{ left: 12 }}
            tick={{ fill: "black", fontSize: "11" }}
            tickMargin={22}
            axisLine={{ stroke: "black" }}
            stroke="black"
            fontFamily="opensans-semibold"
            minTickGap={0}
            interval={0}
          />
          <YAxis
            dataKey="value"
            type="number"
            domain={[0, 105]}
            minTickGap={50}
            tickFormatter={toPercent}
            tick={{ fill: "#454a92", fontSize: "11" }}
            axisLine={{ stroke: "black" }}
            stroke="black"
            fontFamily="opensans-bold"
            ticks={ticks}
          />
          <Tooltip cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

