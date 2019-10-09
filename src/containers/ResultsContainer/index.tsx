import React from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import {
  totalAmountFunc,
} from "../../store/setting/setting.action";
import { ISettings } from "../../models/setting.model";
import Results from '../../components/Results/index';
import ResultsButton from "../../components/ResultsButton/index";

interface IProps extends StoreProps, DispatchProps {
}

interface DispatchProps {
  totalAmountFunc: HandlerDispatch;
}

interface StoreProps {
  setting: ISettings,
}

const ResultsContainer = (props: IProps) => {
  return (
    <div className={"resultsContainer"}>
      <Results totalAmount={props.setting.totalAmount} totalDiscount={props.setting.totalDiscount}/>
      <ResultsButton flat={props.setting.flat} price={props.setting.price}
                     coefficientActive={props.setting.coefficientActive}
                     discount={props.setting.discount} totalAmountFunc={props.totalAmountFunc}/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);