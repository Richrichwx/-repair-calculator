import React from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import {
  periodResult,
  totalAmountFunc, totalDiscountFunc,
} from "../../store/setting/setting.action";
import { ISettings } from "../../models/setting.model";
import Results from '../../components/Results/index';
import ResultsButton from "../../components/ResultsButton/index";

interface IProps extends StoreProps, DispatchProps {
}

interface DispatchProps {
  totalAmountFunc: HandlerDispatch;
  totalDiscountFunc: HandlerDispatch;
  periodResult: HandlerDispatch;
}

interface StoreProps {
  setting: ISettings,
}

const ResultsContainer = (props: IProps) => {
  return (
    <div className={"containerCommon results"}>
      <ResultsButton setting={props.setting} totalAmountFunc={props.totalAmountFunc}
                     totalDiscountFunc={props.totalDiscountFunc}
                     periodResult={props.periodResult}/>
      <div className={"contentCommon results-content"}>
        <Results settingResult={props.setting}/>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    setting: state.setting,
  }
};

const mapDispatchToProps = {
  totalAmountFunc,
  totalDiscountFunc,
  periodResult
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);