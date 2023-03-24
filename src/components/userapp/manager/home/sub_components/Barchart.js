
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
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";
import taal from "../../../../../assets/images/taal.svg";
import woon from "../../../../../assets/images/woon.svg";
import wel from "../../../../../assets/images/wel.svg";
import soc from "../../../../../assets/images/soc.svg";
import werk from "../../../../../assets/images/werk.svg";
import bijs from "../../../../../assets/images/bijs.svg";
import bij from "../../../../../assets/images/bij.svg";
import maat from "../../../../../assets/images/maat.svg";
import zelf from "../../../../../assets/images/zelf.svg";
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

function Barchart(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [graphData, setGraphData] = React.useState([]);
  React.useEffect(() => {
    if (props.data) {
      dispatch(Actions.getPipprogressStats(props.data.id));
    }
  }, [props.data]);
  const pipprogress_stats_confirmation = useSelector(
    ({ BarchartReducer }) => BarchartReducer.PipprogressStatsReducer.data
  );

  const pipprogress_stats_loadingg = useSelector(
    ({ BarchartReducer }) =>
      BarchartReducer.PipprogressStatsReducer.isLoading
  );

  const pipprogress_stats_errMsgg = useSelector(
    ({ BarchartReducer }) => BarchartReducer.PipprogressStatsReducer.errMsg
  );
  React.useEffect(() => {
    if (pipprogress_stats_confirmation && pipprogress_stats_confirmation.getMunicipalityPIPProgressStats && pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats) {
      props.setTotalProgress(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.totalProgressPercent);
      let newArr = [];
      newArr.push({
        name: t("Language"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageLanguage)
      });
      newArr.push({
        name: t("Place Of Residence"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averagePlaceOfResidence)
      });
      newArr.push({
        name: t("Well Being"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageWellbeing)
      });
      newArr.push({
        name: t("Social Contact"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageSocialContact)
      });
      newArr.push({
        name: t("Work"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageWork)
      });
      newArr.push({
        name: t("Training"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageTraining)
      });
      newArr.push({
        name: t("Contribution"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageContribution)
      });
      newArr.push({
        name: t("Society"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageSociety)
      });
      newArr.push({
        name: t("Self-Sustainability"),
        value: parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.averageSelfSustainability)
      });
      setGraphData(newArr);


    }
  }, [pipprogress_stats_confirmation])
  return (
    <div id="container">
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "54px",
          position: "absolute",
        }}
      >
        <img
          src={taal}
          alt="taal"
          className="graph-xaxis-icon"
        // height="50"
        />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "117px",
          position: "absolute",
        }}
      >
        <img src={woon} alt="woon" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "180px",
          position: "absolute",
        }}
      >
        <img src={wel} alt="wel" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "243px",
          position: "absolute",
        }}
      >
        <img src={soc} alt="soc" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "306px",
          position: "absolute",
        }}
      >
        <img src={werk} alt="werk" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "369px",
          position: "absolute",
        }}
      >
        <img src={bijs} alt="bijs" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "434px",
          position: "absolute",
        }}
      >
        <img src={bij} alt="bij" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "497px",
          position: "absolute",
        }}
      >
        <img src={maat} alt="maat" className="graph-xaxis-icon" />
      </div>
      <div
        style={{
          zIndex: "1",
          marginTop: "238px",
          marginLeft: "560px",
          position: "absolute",
        }}
      >
        <img src={zelf} alt="zelf" className="graph-xaxis-icon" />
      </div>

      <ResponsiveContainer>
        <BarChart
          // width="100%"
          // height={300}
          data={graphData}
          barSize={17}
          //   barGap={0}
          maxBarSize={17}
          margin={{
            top: 20,
            //   right: 30,
            left: -20,
            bottom: 10,
          }}

        >
          <Bar dataKey="value" fill="#e84e0e" isAnimationActive={false}>
            <LabelList
              fill="#e84e0e"
              offset={10}
              dataKey="value"
              position="top"
              //   fontFamily={"opensans-bold"}
              //   fontSize={12}
              //   fontWeight={600}
              content={renderCustomizedLabel}
            />
          </Bar>
          <XAxis
            dataKey="name"
            padding={{ left: 5 }}
            tick={{ fill: "black", fontSize: "10" }}
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
            domain={[0, 100]}
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
export default withReducer("BarchartReducer", reducer)(Barchart);
