import React from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import {
  totalAmountFunc, totalDiscountFunc,
} from "../../store/setting/setting.action";
import { ISettings } from "../../models/setting.model";
import Results from '../../components/Results/index';
import ResultsButton from "../../components/ResultsButton/index";

interface IProps extends StoreProps, DispatchProps {
}

interface DispatchProps {
  totalAmountFunc: HandlerDispatch;
  totalDiscountFunc: HandlerDispatch
}

interface StoreProps {
  setting: ISettings,
}

const ResultsContainer = (props: IProps) => {
  return (
    <div className={"containerCommon results"}>
      <div className={"contentCommon results-content"}>
        <Results settingResult={props.setting}/>
        <ResultsButton setting={props.setting} totalAmountFunc={props.totalAmountFunc} totalDiscountFunc={props.totalDiscountFunc}/>
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
  totalDiscountFunc
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);